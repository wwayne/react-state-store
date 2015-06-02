'use strict';

const StateStore = {
  _states: {},
  set: function(obj, alias) {
    let id = alias ? alias : (+new Date()+Math.floor(Math.random()*999999)).toString(36);
    this._states[id] = obj;
    return id;
  },
  get: function(id) {
    return this._states[id];
  },
  getAll: function() {
    let states = {};
    let statesObj = this._states;
    for(let key in statesObj) {
      for(let subKey in statesObj[key]) {
        states[subKey] = statesObj[key][subKey];
      }
    }
    this._states = {};
    return states;
  },
  remove: function(id) {
    delete this._states[id];
  },
  removeAll: function() {
    this._states = {};
  }
};


export default StateStore;
