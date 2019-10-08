import 'package:scadnano/src/dispatcher/actions.dart';
import 'package:w_flux/w_flux.dart';

import 'model_ui.dart';
import 'mouseover_data.dart';
import 'strand.dart';

////////////////////////////////////////////////
// Stores

//TODO: make composite store with this and Strand (changed to be a store) that StrandComponents can listen to via Flux
class StrandHoverStore extends Store {
  Strand _strand = null;

  Strand get strand => this._strand;

  StrandHoverStore() {
    triggerOnActionV2<Strand>(Actions.strand_hover_add, (strand) {
      this._strand = strand;
    });
    triggerOnActionV2<Null>(Actions.strand_hover_remove, (_) {
      this._strand = null;
    });
  }
}


// end Stores
////////////////////////////////////////////////

class MainViewUIModel {
  MainViewSelection selection = MainViewSelection();

  MouseoverDataStore mouse_over_store = MouseoverDataStore();
  ShowDNAStore show_dna_store = ShowDNAStore();
  ShowMismatchesStore show_mismatches_store = ShowMismatchesStore();
  ShowEditorStore show_editor_store = ShowEditorStore();

  bool get show_dna => this.show_dna_store.show_dna;
  bool get show_mismatches => this.show_mismatches_store.show_mismatches;
  //TODO: make editing "mode": if editor mode=manual, no code editor. If mode=script, cannot edit design manually.
  //  Then it's ubambiguous what Ctrl+Z should do
  bool get show_editor => this.show_editor_store.show_editor;
}

class MainViewSelection {
  List<BoundSubstrand> starts = [];
  List<BoundSubstrand> ends = [];
  List<Crossover> crossovers = [];
  List<Strand> strands = [];
  List<Loopout> loopouts = [];
  List<Deletion> deletions = [];
  List<Insertion> insertions = [];
}

class Crossover {
  BoundSubstrand prev_substrand;
  BoundSubstrand next_substrand;
}

class Deletion {
  BoundSubstrand substrand;
  int offset;
}

class Insertion {
  BoundSubstrand substrand;
  int offset;
  int num_insertions;
}
