
const Path = require('path');

const Note = require(Path.join(__dirname, 'note.js'));
const Helpers = require(Path.join(__dirname, 'helpers.js'));
const Base = require(Path.join(__dirname, 'base.js'));

// catches the quality and size of the interval separatly.
INTERVAL_NAME_MATCHER=/^([PmM\+\-]{1})(\d{1})$/


class Interval extends Base {

  constructor(bass, treble) {
    super();

    this.bass = bass;
    this.treble = treble;
  }

  get quality() {
    let intervals = Note.Intervals;

    let bass = this.bass;
    let treb = this.treble;

    let semitones = Interval.countSemitones(bass, treb);

    let name = intervals[semitones][0];
    let parsed = Note.parseInterval(name);

    return parsed.quality;
  }

  get steps() {
    let intervals = Note.Intervals;

    let bass = this.bass;
    let treb = this.treble;

    let semitones = Interval.countSemitones(bass, treb);
    let name = intervals[semitones][0];

    let parsed = Note.parseInterval(name);

    return parsed.steps;
  }

  get semitones() {
    let bass = this.bass;
    let treb = this.treble;

    let semitones = Interval.countSemitones(bass, treb);

    return semitones;
  }

  set semitones(semitones) {
    let bass = this.bass;

    let name = Note.getTrebleFromSemitones(bass, semitones);

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
    let bass = Note.parse(low);

    let bassIdx = notes.findIndex((grp) => {
      let name = bass.name + bass.accidental;

      return grp.includes(name);
    });

    let trebIdx = bassIdx + semitones;

    return trebIdx
  }

  static countSemitones(low, high) {
    let notes = Interval.Notes;

    let bass = Note.parse(low);
    let treb = Note.parse(high);

    let bassName = bass.name + bass.accidental;
    let trebName = treb.name + treb.accidental;

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

    let diff = (semitonesDiff + octaveDiff) + 1;

    return diff - 1;
  }

}


module.exports = Interval;
