
const Path = require('path');

const Note = require(Path.join(__dirname, 'note.js'));
const Helpers = require(Path.join(__dirname, 'helpers.js'));
const Base = require(Path.join(__dirname, 'base.js'));

// catches the quality and size of the interval separatly.
const INTERVAL_NAME_MATCHER=/^([PmM\+\-]{1})(\d{1,2})$/


class Interval extends Base {

  constructor(intervalStr) {
    super();

    this.str = intervalStr;
  }

  get quality() {
    let parsed = Interval.parse(this.str);

    return parsed.quality;
  }

  set quality(val) {
    let parsed = Interval.parse(this.str);

    this.str = val + parsed.step;
  }

  get step() {
    let parsed = Interval.parse(this.str);

    return parsed.step;
  }

  set step(val) {
    let parsed = Interval.parse(this.str);

    this.str = parsed.quality + val;
  }

  get semitones() {
    let parsed = Interval.parse(this.str);

    return parsed.semitones;
  }

  set semitones(val) {
    let intervals = Interval.Intervals;
    let total = this.semitones + val;

    this.str = intervals[total][0];
  }

  toString() {
    return this.str;
  }

  invert() {
    let intervals = Interval.Intervals;
    let invertedSemitones;

    if (this.step <= 8) {
      invertedSemitones = 12 - this.semitones;
    } else {
      invertedSemitones = 12 - (this.semitones % 12);
    }

    this.str = intervals[invertedSemitones][0];
  }

  fromRoot(noteStr) {
    let note = new Note(noteStr);
    let notes = Note.Notes;
    let startIdx = 0;

    let startNote = note.name + note.accidental;

    while (!notes[startIdx].includes(startNote)) {
      startIdx++;
    }

    let octave = parseInt((startIdx + this.semitones) / 12) + note.octave;

    return notes[(startIdx + this.semitones) % notes.length][0] + octave;
  }

  static parse(name) {
    let intervals = this.Intervals;

    let parsed = name.match(INTERVAL_NAME_MATCHER);
    let semitones;

    for (semitones = 0; semitones < intervals.length; semitones++) {
      let entry = intervals[semitones];

      if (entry.includes(name)) {
        break;
      }

    }

    return {
      quality: parsed[1],
      step: parseInt(parsed[2]),

      semitones: semitones,
    };

  }

  static intervalFromSemitones(semitones) {
    let intervals = Interval.Intervals;

    return Interval.Intervals[semitones][0];
  }

  static semitonesFromInterval(name) {
    let intervals = Interval.Intervals;

    let semitones = intervals.findIndex((entry) => {
      return entry.includes(name);
    });

    return semitones;
  }

  static countSemitones(bassStr, trebStr) {
    let notes = Note.Notes;
    let bassNote = new Note(bassStr);
    let trebNote = new Note(trebStr);

    let bassIdx = notes.findIndex((entry) => {
      let noteStr = bassNote.name + bassNote.accidental;

      return entry.includes(noteStr);
    });

    let trebIdx = notes.findIndex((entry) => {
      let noteStr = trebNote.name + trebNote.accidental;

      return entry.includes(noteStr);
    });

    let trebSteps = trebIdx + (trebNote.octave * Note.Notes.length);
    let bassSteps = bassIdx + (bassNote.octave * Note.Notes.length);

    let semitones = trebSteps - bassSteps;

    return semitones;
  }




//  static getTrebleFromSemitones(low, semitones) {
//    let notes = Interval.Notes;
//    let bass = new Note(low);
//
//    let bassIdx = notes.findIndex((grp) => {
//      let name = bass.name + bass.accidental;
//
//      return grp.includes(name);
//    });
//
//    let trebIdx = bassIdx + semitones;
//
//    return trebIdx
//  }

}


module.exports = Interval;
