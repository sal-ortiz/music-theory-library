
class MusicBase {

  static get semitoneRatio() {
    return 16.35160;  // half step, as a percentile.
  }

  static get baseFrequency() {
    return 16.35160;  // C0, in Hz.
  }

  static get Intervals() {
    // defaults to ascending intervals where applicable.

    return [
      ['P0', '-2'], ['m2', '+0'], ['M2', '-3'], ['m3', '+2'],
      ['M3', '-4'], ['P4', '+3'], ['+4', '-5'], ['P5','-6'],
      ['m6', '+5'], ['M6', '-7'], ['m7', '+6'], ['M7', '-8'],

      ['P8', '+7', '-9'], ['m9', '+8'], ['M9', '-10'], ['m10', '+9'],
      ['M10', '-11'], ['P11', '+10'], ['+11', '-12',], ['P12', '-13'],
      ['m13', '+12'], ['M13', '-14'], ['m14', '+13'], ['M14', '-15'],

      ['P15', '+14'], ['+15'],
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
