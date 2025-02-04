import 'dart:html';
import 'dart:math';
import 'package:path/path.dart' as path;

import 'package:redux/redux.dart';
import 'package:scadnano/src/state/design.dart';
import 'package:scadnano/src/state/domain.dart';
import 'package:scadnano/src/state/geometry.dart';
import 'package:scadnano/src/state/grid.dart';
import 'package:scadnano/src/state/loopout.dart';
import 'package:scadnano/src/state/position3d.dart';
import 'package:scadnano/src/state/strand.dart';
import 'package:tuple/tuple.dart';
import '../state/app_state.dart';
import '../actions/actions.dart' as actions;
import '../state/helix.dart';
import '../util.dart' as util;

oxdna_export_middleware(Store<AppState> store, dynamic action, NextDispatcher next) {
  if (action is actions.OxdnaExport) {
    AppState state = store.state;

    List<Strand> strands_to_export;
    if (action.selected_strands_only) {
      strands_to_export = store.state.ui_state.selectables_store.selected_strands.toList();
      if (strands_to_export.isEmpty) {
        window.alert('''\
No strands are selected, so nothing to export.
First select some strands, or choose Export🡒oxDNA to export all strands in the design.''');
        return;
      }
    } else {
      strands_to_export = state.design.strands.toList();
    }

    Tuple2<String, String> dat_top = to_oxdna_format(state.design, strands_to_export);
    String dat = dat_top.item1;
    String top = dat_top.item2;

    String default_filename = state.ui_state.loaded_filename;
    String default_filename_dat = path.setExtension(default_filename, '.dat');
    String default_filename_top = path.setExtension(default_filename, '.top');

    util.save_file(default_filename_dat, dat);
    util.save_file(default_filename_top, top);
  }
  next(action);
}

Tuple2<String, String> to_oxdna_format(Design design, [List<Strand> strands_to_export = null]) {
  OxdnaSystem system = convert_design_to_oxdna_system(design, strands_to_export);
  Tuple2<String, String> dat_top = system.oxdna_output();
  return dat_top;
}

class OxdnaVector {
  double x;
  double y;
  double z;

  OxdnaVector(this.x, this.y, this.z);

  double dot(OxdnaVector other) => x * other.x + y * other.y + z * other.z;

  OxdnaVector cross(OxdnaVector other) {
    double xc = y * other.z - z * other.y;
    double yc = z * other.x - x * other.z;
    double zc = x * other.y - y * other.x;
    return OxdnaVector(xc, yc, zc);
  }

  double length() => sqrt(x * x + y * y + z * z);

  OxdnaVector normalize() {
    double len = length();
    return OxdnaVector(x / len, y / len, z / len);
  }

  OxdnaVector coord_min(OxdnaVector other) => OxdnaVector(min(x, other.x), min(y, other.y), min(z, other.z));

  OxdnaVector coord_max(OxdnaVector other) => OxdnaVector(max(x, other.x), max(y, other.y), max(z, other.z));

  OxdnaVector operator +(OxdnaVector other) => OxdnaVector(x + other.x, y + other.y, z + other.z);

  OxdnaVector operator -(OxdnaVector other) => OxdnaVector(x - other.x, y - other.y, z - other.z);

  OxdnaVector operator *(num scalar) => OxdnaVector(x * scalar, y * scalar, z * scalar);

  OxdnaVector operator -() => OxdnaVector(-x, -y, -z);

  String toString() => '(${x}, ${y}, ${z})';

  OxdnaVector rotate(num angle, OxdnaVector axis) {
    OxdnaVector u = axis.normalize();
    double c = cos(angle * pi / 180);
    double s = sin(angle * pi / 180);

    OxdnaVector u_cross_this = u.cross(this);
    return u * dot(u) + (u_cross_this * c).cross(u) - (u_cross_this * s);
  }
}

// Constants related to oxdna export
const _GROOVE_GAMMA = 20.0;
const _BASE_DIST = 0.6;
final _OXDNA_ORIGIN = OxdnaVector(0, 0, 0);

/// r, b, and n represent the oxDNA conf file vectors that describe a nucleotide
/// r is the position of the base
/// b is the backbone-base vector (in documentation as versor: more info on versors here https://eater.net/quaternions)
/// n is the forward direction of the helix
class OxdnaNucleotide {
  OxdnaVector center;
  OxdnaVector normal;
  OxdnaVector forward;
  String base;

  OxdnaVector v = _OXDNA_ORIGIN; // velocity for oxDNA conf file
  OxdnaVector L = _OXDNA_ORIGIN; // angular velocity for oxDNA conf file

  OxdnaNucleotide(this.center, this.normal, this.forward, this.base);

  OxdnaVector get r => center - b * _BASE_DIST;

  OxdnaVector get b => -normal;

  OxdnaVector get n => forward;
}

class OxdnaStrand {
  List<OxdnaNucleotide> nucleotides = [];

  OxdnaStrand();

  OxdnaStrand join(OxdnaStrand other) => OxdnaStrand()..nucleotides = nucleotides + other.nucleotides;
}

/// represents an oxDNA system and contains a list of strands
/// from its list of strands it can compute the oxDNA conf and top files
class OxdnaSystem {
  List<OxdnaStrand> strands = [];

  OxdnaVector compute_bounding_box([bool cubic = true]) {
    OxdnaVector min_vec = null;
    OxdnaVector max_vec = null;

    for (var strand in strands) {
      for (var nuc in strand.nucleotides) {
        if (min_vec == null) {
          min_vec = nuc.center;
          max_vec = nuc.center;
        } else {
          min_vec = min_vec.coord_min(nuc.center);
          max_vec = max_vec.coord_max(nuc.center);
        }
      }
    }

    if (min_vec != null && max_vec != null) {
      // 5 is arbitrarily chosen so that the box has a bit of wiggle room
      // 1.5 multiplier is to make all crossovers appear (advice from Oxdna authors)
      var box = (max_vec - min_vec + OxdnaVector(5, 5, 5)) * 1.5;
      if (cubic) {
        // oxDNA requires cubic bounding box with default simulation options
        var max_side = max(box.x, max(box.y, box.z));
        box = OxdnaVector(max_side, max_side, max_side);
      }
      return box;
    } else {
      return OxdnaVector(1, 1, 1);
    }
  }

  Tuple2<String, String> oxdna_output() {
    OxdnaVector bbox = compute_bounding_box();

    List<String> dat_list = [
      't = 0',
      'b = ${bbox.x} ${bbox.y} ${bbox.z}',
      'E = 0 0 0',
    ];
    List<String> top_list = [];

    int nuc_count = 0;
    int strand_count = 0;

    for (var strand in strands) {
      strand_count += 1;

      int nuc_index = 0;
      for (var nuc in strand.nucleotides) {
        int n5 = nuc_count - 1;
        int n3 = nuc_count + 1;
        nuc_count += 1;

        if (nuc_index == 0) n5 = -1;
        if (nuc_index == strand.nucleotides.length - 1) n3 = -1;
        nuc_index += 1;

        top_list.add('${strand_count} ${nuc.base} ${n3} ${n5}');
        dat_list.add('${nuc.r.x} ${nuc.r.y} ${nuc.r.z} ' +
            '${nuc.b.x} ${nuc.b.y} ${nuc.b.z} ' +
            '${nuc.n.x} ${nuc.n.y} ${nuc.n.z} ' +
            '${nuc.v.x} ${nuc.v.y} ${nuc.v.z} ' +
            '${nuc.L.x} ${nuc.L.y} ${nuc.L.z}');
      }
    }

    String top = top_list.join('\n') + '\n';
    String dat = dat_list.join('\n') + '\n';

    top = '${nuc_count} ${strand_count}\n' + top;

    return Tuple2<String, String>(dat, top);
  }
}

const NM_TO_OX_UNITS = 1.0 / 0.8518;

// returns the origin, forward, and normal vectors of a helix
Tuple3<OxdnaVector, OxdnaVector, OxdnaVector> oxdna_get_helix_vectors(Design design, Helix helix) {
  /*
  TODO: document functions/methods with docstrings
  :param helix:
  :return: return tuple (origin, forward, normal)
      origin  -- the starting point of the center of a helix, assumed to be at offset 0
      forward -- the direction in which the helix propagates
      normal  -- a direction perpendicular to forward which represents the angle to the backbone at offset 0
          for the forward Domain on the Helix.
  */
  var group = design.groups[helix.group];
  var grid = group.grid;
  var geometry = design.geometry;

  // var forward = OxdnaVector(0, 0, 1);
  // var normal = OxdnaVector(0, -1, 0);
  //
  // forward = forward.rotate(design.yaw_of_helix(helix), normal);
  // forward = forward.rotate(-design.pitch_of_helix(helix), OxdnaVector(1, 0, 0));
  // normal = normal.rotate(-design.pitch_of_helix(helix), OxdnaVector(1, 0, 0));
  //
  // normal = normal.rotate(-helix.roll, forward);

  // principal axes for computing rotation
  // see https://en.wikipedia.org/wiki/Aircraft_principal_axes
  var yaw_axis = OxdnaVector(0, 1, 0);
  var pitch_axis = OxdnaVector(1, 0, 0);
  var roll_axis = OxdnaVector(0, 0, 1);

  // we apply rotations in the order yaw, pitch, and then roll
  // the _OxdnaVector.rotate function applies ccw rotation so angle needs to be negated

  // first the yaw rotation
  pitch_axis = pitch_axis.rotate(-design.yaw_of_helix(helix), yaw_axis);
  roll_axis = roll_axis.rotate(-design.yaw_of_helix(helix), yaw_axis);

  // then the pitch rotation
  yaw_axis = yaw_axis.rotate(design.pitch_of_helix(helix), pitch_axis);
  roll_axis = roll_axis.rotate(design.pitch_of_helix(helix), pitch_axis);

  // then the roll rotation
  yaw_axis = yaw_axis.rotate(-design.roll_of_helix(helix), roll_axis);

  // by chosen convention, forward is the same as the roll axis
  // and normal is the negated yaw axis
  var forward = roll_axis;
  var normal = -yaw_axis;

  var position = Position3D();
  if (grid == Grid.none) {
    // unnecessary since this check is done in the position getter, but this way the code exactly mirrors
    // the Python package equivalent
    if (helix.position != null) {
      position = helix.position;
    }
  } else {
    position = util.grid_position_to_position3d(helix.grid_position, grid, geometry);
  }

  position = position + group.position;

  var origin = OxdnaVector(position.x, position.y, position.z) * NM_TO_OX_UNITS;
  return Tuple3<OxdnaVector, OxdnaVector, OxdnaVector>(origin, forward, normal);
}

OxdnaSystem convert_design_to_oxdna_system(Design design, [List<Strand> strands_to_export = null]) {
  if (strands_to_export == null) {
    strands_to_export = design.strands.toList();
  }

  var system = OxdnaSystem();
  var geometry = design.geometry;
  var step_rot = -360 / geometry.bases_per_turn;

  // each entry is the number of insertions - deletions since the start of a given helix
  Map<int, List<int>> mod_map = {};
  for (int idx in design.helices.keys) {
    var helix = design.helices[idx];
    mod_map[idx] = List<int>.filled(helix.max_offset - helix.min_offset, 0);
  }

  // insert each insertion / deletion as a postive / negative number
  // TODO: report error if there is an insertion/deletion on one Domain and not the other
  for (var strand in strands_to_export) {
    for (var domain in strand.domains) {
      if (domain is Domain) {
        var helix = design.helices[domain.helix];
        for (var insertion in domain.insertions) {
          mod_map[domain.helix][insertion.offset - helix.min_offset] = insertion.length;
        }
        for (int deletion in domain.deletions) {
          mod_map[domain.helix][deletion - helix.min_offset] = -1;
        }
      }
    }
  }

  // propagate the modifier so it stays consistent across domains
  for (int idx in design.helices.keys) {
    var helix = design.helices[idx];
    for (int offset = helix.min_offset + 1; offset < helix.max_offset; offset++) {
      mod_map[idx][offset] += mod_map[idx][offset - 1];
    }
  }

  // for efficiency just calculate each helix's vector once
  var helix_vectors = {
    for (var idx_helix in design.helices.entries)
      idx_helix.key: oxdna_get_helix_vectors(design, idx_helix.value)
  };

  for (var strand in strands_to_export) {
    List<Tuple2<OxdnaStrand, bool>> dom_strands = [];
    for (var domain in strand.substrands) {
      var dom_strand = OxdnaStrand();
      String seq = domain.dna_sequence;
      if (seq == null) {
        seq = 'T' * domain.dna_length();
      }

      // handle normal domains
      if (domain is Domain) {
        var helix = design.helices[domain.helix];
        var origin_forward_normal = helix_vectors[helix.idx];
        var origin = origin_forward_normal.item1;
        var forward = origin_forward_normal.item2;
        var normal = origin_forward_normal.item3;

        if (!domain.forward) {
          normal = normal.rotate(-geometry.minor_groove_angle, forward);
          seq = seq.split('').reversed.join(''); // reverse DNA sequence
        }

        // oxDNA will rotate angles by +/- _GROOVE_GAMMA, so we first unrotate by that amount
        var groove_gamma_correction = domain.forward ? _GROOVE_GAMMA : -_GROOVE_GAMMA;
        normal = normal.rotate(groove_gamma_correction, forward);

        // dict / set for insertions / deletions to make lookup easier and cheaper when there are lots of them
        var deletions = Set<int>.from(domain.deletions);
        Map<int, int> insertions = {};
        for (var insertion in domain.insertions) {
          insertions[insertion.offset] = insertion.length;
        }

        // use Design.geometry field to figure out various distances
        // https://github.com/UC-Davis-molecular-computing/scadnano/blob/master/lib/src/state/geometry.dart

        // index is used for finding the base in our sequence
        int index = 0;
        for (int offset = domain.start; offset < domain.end; offset++) {
          if (!deletions.contains(offset)) {
            var mod = mod_map[domain.helix][offset - helix.min_offset];

            // we have to check insertions first because they affect the index
            if (insertions.containsKey(offset)) {
              int num = insertions[offset];
              for (int i = 0; i < num; i++) {
                var r = origin +
                    forward * (offset + mod - num + i) * geometry.rise_per_base_pair * NM_TO_OX_UNITS;
                var b = normal.rotate(step_rot * (offset + mod - num + i), forward);
                var n = domain.forward ? -forward : forward;
                var nuc = OxdnaNucleotide(r, b, n, seq[index]);
                dom_strand.nucleotides.add(nuc);
                index += 1;
              }
            }

            var r = origin + forward * (offset + mod) * geometry.rise_per_base_pair * NM_TO_OX_UNITS;
            var b = normal.rotate(step_rot * (offset + mod), forward);
            var n = domain.forward ? -forward : forward;
            var nuc = OxdnaNucleotide(r, b, n, seq[index]);
            dom_strand.nucleotides.add(nuc);
            index += 1;
          }
        }

        // strands are stored from 5' to 3' end
        if (!domain.forward) {
          dom_strand.nucleotides = List<OxdnaNucleotide>.from(dom_strand.nucleotides.reversed);
        }
        dom_strands.add(Tuple2<OxdnaStrand, bool>(dom_strand, false));
        // because we need to know the positions of nucleotides before and after the loopout
        // we temporarily store domain strands with a boolean that is true if it's a loopout
        // handle loopouts
      } else if (domain is Loopout) {
        // we place the loopout nucleotides at temporary nonsense positions and orientations
        // these will be updated later, for now we just need the base
        for (int i = 0; i < domain.dna_length(); i++) {
          String base = seq[i];
          var nuc = OxdnaNucleotide(OxdnaVector(0, 0, 0), OxdnaVector(0, -1, 0), OxdnaVector(0, 0, 1), base);
          dom_strand.nucleotides.add(nuc);
        }
        dom_strands.add(Tuple2<OxdnaStrand, bool>(dom_strand, true));
      } else {
        throw AssertionError('unreachable');
      }
    }

    var sstrand = OxdnaStrand();
    // process loopouts and join strands
    for (int i = 0; i < dom_strands.length; i++) {
      var dstrand_is_loopout = dom_strands[i];
      var dstrand = dstrand_is_loopout.item1;
      var is_loopout = dstrand_is_loopout.item2;
      if (is_loopout) {
        var prev_nuc = dom_strands[i - 1].item1.nucleotides.last;
        var next_nuc = dom_strands[i + 1].item1.nucleotides.first;

        int strand_length = dstrand.nucleotides.length;

        // now we position loopouts relative to the previous and next strand
        // for now we use a linear interpolation
        var forward = next_nuc.center - prev_nuc.center;
        var normal = (prev_nuc.forward + next_nuc.forward) * 0.5;

        for (int loopout_idx = 0; loopout_idx < strand_length; loopout_idx++) {
          OxdnaVector pos = prev_nuc.center + forward * ((loopout_idx + 1) / (strand_length + 1));
          var old_nuc = dstrand.nucleotides[loopout_idx];
          var new_nuc = OxdnaNucleotide(pos, normal, forward.normalize(), old_nuc.base);
          dstrand.nucleotides[loopout_idx] = new_nuc;
        }
      }
      sstrand = sstrand.join(dstrand);
    }
    system.strands.add(sstrand);
  }

  return system;
}
