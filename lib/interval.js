
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
    let intervals = this.constructor.Intervals;

    let bass = this.bass;
    let treb = this.treble;

    let semitones = this.constructor.countSemitones(bass, treb) - 1;

    let name = intervals[semitones][0];
    let parsed = this.constructor.parseInterval(name);

    return parsed.quality;
  }

  get steps() {
    let intervals = this.constructor.Intervals;

    let bass = this.bass;
    let treb = this.treble;

    let semitones = this.constructor.countSemitones(bass, treb) - 1;
    let name = intervals[semitones][0];

    let parsed = this.constructor.parseInterval(name);

    return parsed.steps;
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
