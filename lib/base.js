
// catches the name, accidental, and octave separately.
NOTE_NAME_MATCHER = /^([A-G]{1})([#|b|+|-]*)([\d]*)$/;

// catches the quality and size of the interval separatly.
INTERVAL_NAME_MATCHER=/^([PmM\+\-]{1})(\d{1})$/

class MusicBase {


  static get semitoneRatio() {
    return 16.35160;  // half step, as a percentile.
  }

  static get baseFrequency() {
    return 16.35160;  // C0, in Hz.
  }

  static get Intervals() {

    return [
      ['P0', '-2'], ['m2'], ['M2', '-3'], ['m3', '+2'],
      ['M3'], ['+3', '-4'], ['P4'], ['+4', '-5'],
      ['P5'], ['+5', '-6'], ['m6'], ['M6'], ['+6', 'm7'],
      ['M7'], ['P8'],
    ];

  }

  static get Degrees() {
    return ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  }

  static get Notes() {

    return [
      ['C', 'B#'], ['C#', 'Db'], ['D'], ['D#', 'Eb'],
      ['E', 'Fb'], ['F', 'E#'], ['F#', 'Gb'], ['G'],
      ['G#', 'Ab'], ['A'], ['A#', 'Bb'], ['B', 'Cb']
    ];

  }


  static parseNote(name) {
    let parsed = name.match(NOTE_NAME_MATCHER);

    return {
      name: parsed[1],
      accidental: parsed[2],
      octave: parseInt(parsed[3]),
    };

  }

  static parseInterval(name) {
    let parsed = name.match(INTERVAL_NAME_MATCHER);

    return {
      quality: parsed[1],
      steps: parseInt(parsed[2]),
    };

  }

  static transpose(noteStr, semitones) {
    let notes = this.Notes;
    let note = this.parseNote(noteStr)

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

  static countSemitones(low, high) {
    let notes = this.Notes;

    let bass = this.parseNote(low);
    let treb = this.parseNote(high);

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

    return diff;
  }

}


module.exports = MusicBase;
