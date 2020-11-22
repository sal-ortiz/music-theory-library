
const Path = require('path');

const Note = require(Path.join(__dirname, 'note.js'));
const Helpers = require(Path.join(__dirname, 'helpers.js'));
const Base = require(Path.join(__dirname, 'base.js'));



class Interval extends Base {

  constructor(bassStr, trebStr) {
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


  static countSemitones(low, high) {
    let notes = this.Notes;

    let bass = new Note(low);
    let treb = new Note(high);

    let bassName = bass.name + bass.accidental;
    let trebName = treb.name + treb.accidental;

    let bassIdx = notes.findIndex((grp) => {
      return grp.includes(bassName);
    });

    let trebIdx = notes.findIndex((grp) => {
      return grp.includes(trebName);
    });

    let semitonesDiff = trebIdx - bassIdx;

    if (trebIdx < bassIdx) {
      semitonesDiff = notes.length - bassIdx;
    }

    return semitonesDiff + 1
  }

}


module.exports = Interval;
