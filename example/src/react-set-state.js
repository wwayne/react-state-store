'use strict';

const SetState = {
  _states: {},
  setState: function(obj, final=false) {
    let id = (+new Date()+Math.floor(Math.random()*999999)).toString(36);
    SetState._states[id] = obj;
    if(final) {
      this.getAllState(final);
    }
    return id;
  },
  getState: function(id) {
    return SetState._states[id];
  },
  getAllState: function(target) {
    let states = {};
    let statesObj = this._states;
    for(let key in statesObj) {
      for(let subKey in statesObj[key]) {
        states[subKey] = statesObj[key][subKey];
      }
    }
    target.setState(states);
    this._states = {};
  }
};


export default SetState;
