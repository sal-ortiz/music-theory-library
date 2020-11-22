
const Path = require('path');

const Helpers = require(Path.join(__dirname, 'helpers.js'));
const Base = require(Path.join(__dirname, 'base.js'));

NOTE_NAME_MATCHER = /^([A-G]{1})([#|b|+|-]*)([\d]*)/;
BASE_NOTE = 'c';


class Note extends Base {

  constructor(noteStr) {
    super();

    this.note = noteStr;
  }

  get name() {
    let parsed = this.constructor.parseNote(this.note);

    return parsed.name;
  }

  get accidental() {
    let parsed = this.constructor.parseNote(this.note);

    return parsed.accidental;
  }

  get octave() {
    let parsed = this.constructor.parseNote(this.note);

    return parseInt(parsed.octave);
  }

  get degree() {
    let degrees = this.constructor.Degrees;
    let name = this.name;

    let idx = degrees.findIndex((names) => {
      return names.includes(name);
    });

    return idx;
  }

  toString() {
    return this.name + this.accidental + this.octave;

  }

  transposeUp(semitones) {
    this.note = this.constructor.transposeNote(this.note, semitones);
  }

  transposeDown(semitones) {
    this.note = this.constructor.transposeNote(this.note, (semitones * -1));
  }

}


module.exports = Note;
