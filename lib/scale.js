
const Path = require('path');

const Helpers = require(Path.join(__dirname, 'helpers.js'));
const Base = require(Path.join(__dirname, 'base.js'));

const Interval = require(Path.join(__dirname, 'interval.js'));


class Scale extends Base {

  constructor(notes) {
    this.notes = notes;
  }

  static parse(notes) {

  }

}


module.exports = Scale
