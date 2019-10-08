//part of '../components.dart';

import 'dart:html';
import 'dart:math';

import 'package:over_react/over_react.dart';
import 'package:scadnano/src/dispatcher/actions.dart';
import 'package:scadnano/src/model/mouseover_data.dart';
import 'package:tuple/tuple.dart';

import '../model/helix.dart';
import '../util.dart' as util;

part 'design_main_mouseover_rect_helix.over_react.g.dart';

const _ID_PREFIX = 'helix-mouseover';
const _CLASS = 'helix-mouseover';

const DEBUG_PRINT_MOUSEOVER = false;
//const DEBUG_PRINT_MOUSEOVER = true;

@Factory()
UiFactory<DesignMainMouseoverRectHelixProps> DesignMainMouseoverRectHelix = _$DesignMainMouseoverRectHelix;

@Props()
class _$DesignMainMouseoverRectHelixProps extends UiProps {
  Helix helix;
}

@Component()
class DesignMainMouseoverRectHelixComponent extends UiComponent<DesignMainMouseoverRectHelixProps> {
  @override
  Map getDefaultProps() => (newProps());

  @override
  render() {
    String id = '$_ID_PREFIX-${this.props.helix.idx()}';
    Helix helix = this.props.helix;
    var width = helix.svg_width();
    var height = helix.svg_height();
    return (Dom.rect()
      ..transform = this.props.helix.translate()
      ..x = '0'
      ..y = '0'
      ..width = '$width'
      ..height = '$height'
      ..onMouseLeave = ((_) => mouse_leave_update_mouseover())
      ..onMouseMove = ((event) => update_mouseover(event, this.props.helix))
      ..id = id
      ..className = _CLASS)();
  }
}

mouse_leave_update_mouseover() {
  Actions.remove_mouseover_data();
}

update_mouseover(SyntheticMouseEvent event_syn, Helix helix) {
  MouseEvent event = event_syn.nativeEvent;
  Point<num> pan = util.current_pan_main();
  num zoom = util.current_zoom_main();

  var svg_coord = util.transform(event.offset, pan, zoom);
  num svg_x = svg_coord.x;
  num svg_y = svg_coord.y;

  int helix_idx = helix.idx();
  int offset = helix.svg_x_to_offset(svg_x);
  bool forward = helix.svg_y_is_forward(svg_y);

  if (DEBUG_PRINT_MOUSEOVER) {
    print('mouse event: '
        'x = ${event.offset.x},   '
        'y = ${event.offset.y},   '
        'pan = (${pan.x.toStringAsFixed(2)}, ${pan.y.toStringAsFixed(2)}),   '
        'zoom = ${zoom.toStringAsFixed(2)},   '
        'svg_x = ${svg_x.toStringAsFixed(2)},   '
        'svg_y = ${svg_y.toStringAsFixed(2)},   '
        'helix = ${helix_idx},   '
        'offset = ${offset},   '
        'forward = ${forward}');
  }

  var params = MouseoverParameters([Tuple3(helix_idx, offset, forward)]);
  Actions.update_mouseover_data(params);
}