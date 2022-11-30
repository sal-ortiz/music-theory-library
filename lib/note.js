
const Path = require('path');

const Helpers = require(Path.join(__dirname, 'helpers.js'));
const Base = require(Path.join(__dirname, 'base.js'));

// catches the name, accidental, and octave separately.
NOTE_NAME_MATCHER = /^([A-G]{1})([#|b|+|-]*)([\d]*)$/;

BASE_NOTE = 'c';


class Note extends Base {

  constructor(noteStr) {
    super();

    this.note = noteStr;
  }

  get name() {
    let parsed = this.constructor.parse(this.note);

    return parsed.name;
  }

  get accidental() {
    let parsed = this.constructor.parse(this.note);

    return parsed.accidental;
  }

  get octave() {
    let parsed = this.constructor.parse(this.note);

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

  static parse(name) {
    let parsed = name.match(NOTE_NAME_MATCHER);

    return {
      name: parsed[1],
      accidental: parsed[2],
      octave: parseInt(parsed[3]),
    };

  }

  static transpose(noteStr, semitones) {
    let notes = Note.Notes;
    let note = Note.parse(noteStr)

    let currIdx = notes.findIndex((grp) => {
      let name = note.name + note.accidental;

      return grp.includes(name);
    });

    let degModifier = (currIdx + semitones) % notes.length;
    let octModifier = parseInt((currIdx + semitones) / notes.length);

    if (degModifier < 0) {
      degModifier = notes.length + degModifier;

      octModifier = octModifier - 1;
    }

    return notes[degModifier][0] + (note.octave + octModifier).toString();
  }

}


module.exports = Note;
