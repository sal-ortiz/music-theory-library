
const Path = require('path');

const Note = require(Path.join(__dirname, 'note.js'));
const Helpers = require(Path.join(__dirname, 'helpers.js'));
const Base = require(Path.join(__dirname, 'base.js'));



class Interval extends Base {

  constructor(bass, treble) {
    super();

    this.bass = bass;
    this.treble = treble;
  }

  get quality() {
    let parsed = this.constructor.parseInterval(this.interval);

    return parsed.quality;
  }

  get interval() {
    let parsed = this.constructor.parseInterval(this.interval);

    return parsed.interval;
  }

  get semitones() {
    let bass = this.bass.toString();
    let treble = this.treble.toString();

    let semitones = this.constructor.countSemitones(bass, treble);

    return semitones;
  }

  toString() {
    return this.quality + this.interval;
  }

}


module.exports = Interval;
