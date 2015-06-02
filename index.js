'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var StateStore = {
  _states: {},
  set: function set(obj, alias) {
    var id = alias ? alias : (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this._states[id] = obj;
    return id;
  },
  get: function get(id) {
    return this._states[id];
  },
  getAll: function getAll() {
    var states = {};
    var statesObj = this._states;
    for (var key in statesObj) {
      for (var subKey in statesObj[key]) {
        states[subKey] = statesObj[key][subKey];
      }
    }
    this._states = {};
    return states;
  },
  remove: function remove(id) {
    delete this._states[id];
  },
  removeAll: function removeAll() {
    this._states = {};
  }
};

exports['default'] = StateStore;
module.exports = exports['default'];
