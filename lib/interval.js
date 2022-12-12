
const Path = require('path');

const Note = require(Path.join(__dirname, 'note.js'));
const Helpers = require(Path.join(__dirname, 'helpers.js'));
const Base = require(Path.join(__dirname, 'base.js'));

// catches the quality and size of the interval separatly.
INTERVAL_NAME_MATCHER=/^([PmM\+\-]{1})(\d{1,2})$/


class Interval extends Base {

  constructor(bassStr, trebStr) {
    super();

    this.bass = new Note(bassStr);
    this.treble = new Note(trebStr);


    //console.log(bassStr, trebStr);
    //console.log(this.bass, this.treble);

  }

  get quality() {
    let intervals = Note.Intervals;

    let bassStr = this.bass.toString();
    let trebStr = this.treble.toString();

    let semitones = Interval.countSemitones(bassStr, trebStr);

    let name = intervals[semitones % (intervals.length - 1)][0];
    let parsed = Interval.parse(name);

    return parsed.quality;
  }

  get steps() {
    let intervals = Interval.Intervals;

    let bassStr = this.bass.toString();
    let trebStr = this.treble.toString();

    let semitones = Interval.countSemitones(bassStr, trebStr);

    let name = intervals[semitones % (intervals.length - 1)][0];

    let parsed = Interval.parse(name);

    return parsed.steps;
  }

  get semitones() {
    let bassStr = this.bass.toString();
    let trebStr = this.treble.toString();

    let semitones = Interval.countSemitones(bassStr, trebStr);

    return semitones;
  }

  set semitones(semitones) {
    let bassStr = this.bass.toString();

    let name = Note.getTrebleFromSemitones(bassStr, semitones);

    this.treble = name;
  }

  toString() {
    return this.quality + this.steps;
  }

  static parse(name) {
    let parsed = name.match(INTERVAL_NAME_MATCHER);

    return {
      quality: parsed[1],
      steps: parseInt(parsed[2]),
    };

  }

  static getTrebleFromSemitones(low, semitones) {
    let notes = Interval.Notes;
    let bass = new Note(low);

    let bassIdx = notes.findIndex((grp) => {
      let name = bass.name + bass.accidental;

      return grp.includes(name);
    });

    let trebIdx = bassIdx + semitones;

    return trebIdx
  }

  static countSemitones(low, high) {
    let notes = Interval.Notes;

    let bass = new Note(low);
    let treb = new Note(high);

    let bassOct = bass.octave;
    let trebOct = treb.octave;

    let bassIdx = notes.findIndex((grp) => {
      let name = bass.name + bass.accidental;

      return grp.includes(name);
    });

    let trebIdx = notes.findIndex((grp) => {
      let name = treb.name + treb.accidental;

      return grp.includes(name);
    });

    if ((trebIdx < bassIdx && trebOct == bassOct) || (trebOct < bassOct)) {
      let idxTmp = trebIdx;
      let octTmp = trebOct;

      trebIdx = bassIdx;
      bassIdx = idxTmp;

      trebOct = bassOct;
      bassOct = octTmp;
    }

    let octaveDiff = (trebOct - bassOct) * 12;
    let semitonesDiff = trebIdx - bassIdx;

    let diff = semitonesDiff + octaveDiff;

    return diff;
  }

}


module.exports = Interval;
