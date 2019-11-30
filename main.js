/*jshint esversion: 6 */

var screenfull = require('screenfull');
var gdfs = require('gdrive-fs');

const IconSheet = require('./lib/IconSheet.js');
const IconEdit = require('./lib/IconEdit.js');

// wrapper function
(function() {

class State
{
  constructor() {
    this.fg = [1,1,1,1];
    this.bg = [0,0,0,0];
  }
}

class Palette
{
}

const state = new State();
const edit = new IconEdit(state);
const icon = new Icon();

edit.setIcon(icon);

})();
