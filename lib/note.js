
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

  transposeUp(semitones) {
    let trasp = this.constructor.transpose(this.note, semitones);

    this.note = tranp;
  }

  transposeDown(interval) {

  }


  static transpose(noteStr, semitones) {
    let notes = this.Notes;
    let note = this.parseNote(noteStr)

    let currIdx = notes.findIndex((grp) => {
      return grp.includes(note.name + note.accidental);
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
