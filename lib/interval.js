
const Path = require('path');

const Note = require(Path.join(__dirname, 'note.js'));
const Helpers = require(Path.join(__dirname, 'helpers.js'));
const Base = require(Path.join(__dirname, 'base.js'));



class Interval extends Base {

  constructor(bass, treble) {
    super();

    this.note = bassStr;
    this.harmony = trebStr;
  }

  get quality() {


  }

  get interval() {

  }


  get low() {
    return this.low;
  }

  get high() {
    return this.high;
  }

  get semitones() {
    let count = (this.high.octave - this.low.octave) * 8;

    count += this.high.degree - this.low.degree;
  }


    return semitones;
  }

    return semitonesDiff + 1
  }

}


module.exports = Interval;
