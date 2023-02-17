
const Path = require('path');

const Helpers = require(Path.join(__dirname, 'helpers.js'));
const Base = require(Path.join(__dirname, 'base.js'));

const Interval = require(Path.join(__dirname, 'interval.js'));


class Chord extends Base {

  constructor(typeStr) {
    super();

    this.str = typeStr;
  }

  get type() {
    let parsed = Chord.parse(this.str);

    return parsed.type;
  }

  set type(val) {
    let parsed = Chord.parse(this.str);

    this.str = parsed.abbreviations[0];
  }

  get intervals() {
    let parsed = Chord.parse(this.str);

    return parsed.intervals;
  }

  set intervals(val) {
    let parsed = Chord.parse(this.str);

    let data = Chord.Chords.find((entry) => {
      let entryStr = JSON.stringify(entry.intervals.sort());
      let input = JSON.stringify(val.sort());

      return entryStr == input;
    });

    this.str = data.abbreviations[0];
  }

  toString() {
    let parsed = Chord.parse(this.str);

    return parsed.name;
  }

  //invert() {
  //  // TODO: Add support for chord inversions.
  //}

  fromRoot(noteStr) {
    let intervals = this.intervals;
    let notes = [noteStr];

    intervals.forEach((entry) => {
      let interval = new Interval(entry);
      let prevNote = notes.slice(-1)[0];
      let newNote = interval.fromRoot(prevNote);

      notes.push(newNote);
    });

    return notes;
  }

  static parse(type) {

    let data = Chord.Chords.find((entry) => {
      return entry.abbreviations.includes(type);
    });

    return {
      type: data.name,

      intervals: data.intervals,
      abbreviations: data.abbreviations,
    };

  }

}


module.exports = Chord;
