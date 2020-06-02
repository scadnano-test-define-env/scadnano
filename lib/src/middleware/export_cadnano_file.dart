import 'dart:convert';
import 'dart:html';
import 'package:http/http.dart' as http;
import 'package:path/path.dart' as p;

import 'package:redux/redux.dart';

import '../json_serializable.dart';
import '../actions/actions.dart' as actions;
import '../state/app_state.dart';
import 'package:scadnano/src/constants.dart' as constants;
import '../util.dart' as util;

export_cadnano_file_middleware(Store<AppState> store, dynamic action, NextDispatcher next) {
  next(action);

  AppState state = store.state;
  if (action is actions.ExportCadnanoFile) {
    _save_file(state);
  }
}

_save_file(AppState state) async {
  var response = await http.post(
    constants.export_url,
    body: json_encode(state.dna_design),
    headers: {"Content-Type": "application/json"},
  );

  if (response.statusCode == 200) {
    String default_filename = state.ui_state.loaded_filename;
    default_filename = p.setExtension(default_filename, '.json');
    util.save_file(default_filename, response.body);
  } else {
    Map response_body_json = jsonDecode(response.body);
    window.alert('Error exporting file: ${response_body_json['error']}');
  }
}