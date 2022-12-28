
const Path = require('path');

const Helpers = require(Path.join(__dirname, 'helpers.js'));
const Base = require(Path.join(__dirname, 'base.js'));

// catches the name, accidental, and octave separately.
NOTE_NAME_MATCHER = /^([A-G]{1})([#|b|+|-]*)([\d]*)$/;

BASE_NOTE = 'c';


class Note extends Base {

  constructor(noteStr) {
    super();

    this.str = noteStr;
  }

  get name() {
    let parsed = Note.parse(this.str);

    return parsed.name;
  }

  get accidental() {
    let parsed = Note.parse(this.str);

    return parsed.accidental;
  }

  set accidental(val) {
    let parsed = Note.parse(this.str);

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
    this.str = Note.transpose(this.str, semitones);
  }

  transposeDown(semitones) {
    this.str = Note.transpose(this.str, (semitones * -1));
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
