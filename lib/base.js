
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

}


module.exports = MusicBase;
