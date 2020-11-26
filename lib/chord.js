
const Path = require('path');

const Helpers = require(Path.join(__dirname, 'helpers.js'));
const Base = require(Path.join(__dirname, 'base.js'));

const Interval = require(Path.join(__dirname, 'interval.js'));


class Chord extends Base {

  constructor(/* ... */) {
    super();

    this.notes = Array.from(arguments);
  }

  get intervals() {
    let outp = [];
    let notes = this.notes;

    for (let idx = 1; idx < notes.length; idx++) {
      let bass = notes[idx - 1];
      let treble = notes[idx];

      let interval = new Interval(bass, treble);
      let intervalStr = interval.toString();

      outp.push(intervalStr);
    }

    return outp;
  }

  toString() {


  }

}


module.exports = Chord;
