
NOTE_NAME_MATCHER = /^([A-G]{1})([#|b|+|-]*)([\d]*)$/;
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
      ['P0', '-2'], ['m2'], ['M2', '-3'], ['+2', 'm3'],
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
      ['E'], ['F', 'E#'], ['F#', 'Gb'], ['G'],
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

}


module.exports = MusicBase;
