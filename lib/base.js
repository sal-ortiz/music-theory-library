
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
    // defaults to ascending accidentals where applicable.

    return [
      ['C', 'B#'], ['C#', 'Db'], ['D'], ['D#', 'Eb'],
      ['E', 'Fb'], ['F', 'E#'], ['F#', 'Gb'], ['G'],
      ['G#', 'Ab'], ['A'], ['A#', 'Bb'], ['B', 'Cb']
    ];

  }

  static get Chords() {

    return [
      // power chord
      { name: 'fifth',     abbreviations: ['5'], intervals: ['P5'], inversions: ['P4'] },

      // major
      { name: 'major',     abbreviations: ['M', 'maj', ''], intervals: ['M3', 'm3'], inversions: [['m3', 'P4'], ['P4', 'M3']] },
      { name: 'major 6th', abbreviations: ['M6', 'maj6'], intervals: ['M3', 'm3', 'M2'], inversions: [['m3', 'M2', 'm3'], ['M2', 'm3', 'M3'], ['m3', 'M3', 'm3', ]] },
      { name: 'major 6/9', abbreviations: ['6/9', 'M6/9', 'maj6/9'], intervals: ['M3', 'm3', 'M2', 'P4'], inversions: [['m3', 'M2', 'P4', 'm7'], ['M2', 'P4', 'm7', 'M3'], ['P4', 'm7', 'M3', 'm3'], ['m7', 'M3', 'm3', 'M2'] ] },
      { name: 'major 7th', abbreviations: ['M7', 'maj7'], intervals: ['M3', 'm3', 'M3'], inversions: [['m3', 'M3', 'm2'], ['M3', 'm2', 'M3'], ['m2', 'M3', 'm3']] },
      { name: 'major 9th', abbreviations: ['M9', 'maj9'], intervals: ['M3', 'm3', 'M3', 'm3'], inversions: [['m3', 'M3', 'm3', 'm7'], ['M3', 'm3', 'm7', 'M3'], ['m3', 'm7', 'M3', 'm3'], ['m7', 'M3', 'm3', 'M3']] },
      { name: 'major 11th', abbreviations: ['M11', 'maj11'], intervals: ['M3', 'm3', 'M3', 'm3', 'm3'], inversions: [['m3', 'M3', 'm3', 'm3', 'P5'], ['M3', 'm3', 'm3', 'P5', 'M3'], ['m3', 'm3', 'P5', 'M3', 'm3'], ['m3', 'P5', 'M3', 'm3', 'M3'], ['P5', 'M3', 'm3', 'M3', 'm3']] },
      { name: 'major 13th', abbreviations: ['M13', 'maj13'], intervals: ['M3', 'm3', 'M3', 'm3', 'm3', 'M3'], inversions: [['m3', 'M3', 'm3', 'm3', 'M3', 'm3'], ['M3', 'm3', 'm3', 'M3', 'm3', 'M3'], ['m3', 'm3', 'M3', 'm3', 'M3', 'm3'], ['m3', 'M3', 'm3', 'M3', 'm3', 'M3'], ['M3', 'm3', 'M3', 'm3', 'M3', 'm3'], ['m3', 'M3', 'm3', 'M3', 'm3', 'm3']] },

      // minor
      { name: 'minor', abbreviations: ['m', 'min'], intervals: ['m3', 'M3'], inversions: [['m3', 'P4'], ['P4', 'M3']] },
      { name: 'minor 6th', abbreviations: ['m6', 'min6'], intervals: ['m3', 'M3', 'M2'], inversions: [['M3', 'M2', 'm3'], ['M2', 'm3', 'm3'], ['m3', 'm3', 'M3']] },
      { name: 'minor 7th', abbreviations: ['m7', 'min7'], intervals: ['m3', 'M3', 'm3'], inversions: [['M3', 'm3', 'M2'], ['m3', 'M2', 'm3'], ['M2', 'm3', 'M2']] },
      { name: 'minor 9th', abbreviations: ['m9', 'min9'], intervals: ['m3', 'M3', 'm3', 'M3'], inversions: [['M3', 'm3', 'M3', 'm7'], ['m3', 'M3', 'm7', 'm3'], ['M3', 'm7', 'm3', 'M3'], ['m7', 'm3', 'M3', 'm3']] },
      { name: 'minor 11th', abbreviations: ['m11', 'min11'], intervals: ['m3', 'M3', 'm3', 'M3', 'm3'], inversions: [['M3', 'm3', 'M3', 'm3', 'P5'], ['m3', 'M3', 'm3', 'P5', 'm3'], ['M3', 'm3', 'P5', 'm3', 'M3'], ['m3', 'P5', 'm3', 'M3', 'm3'], ['P5', 'm3', 'M3', 'm3', 'M3']] },
      { name: 'minor 13th', abbreviations: ['m13', 'min13'], intervals: ['m3', 'M3', 'm3', 'M3', 'm3', 'M3'], inversions: [['M3', 'm3', 'M3', 'm3', 'M3', 'm3'], ['m3', 'M3', 'm3', 'M3', 'm3', 'm3'], ['M3', 'm3', 'M3', 'm3', 'm3', 'P5'], ['m3', 'M3', 'm3', 'm3', 'P5', 'm3'], ['M3', 'm3', 'm3', 'P5', 'm3', 'M3'], ['m3', 'm3', 'P5', 'm3', 'M3', 'm3']] },
      { name: 'minor major 7th', abbreviations: ['mM7', 'min maj7th', 'm maj7th'], intervals: ['m3', 'M3', 'M3'], inversions: [['M3', 'M3', 'm2'], ['M3', 'm2', 'm3'], ['m2', 'm3', 'M3']] },

      // dominant
      { name: 'dominant 7th', abbreviations: ['7', 'dom7'], intervals: ['M3', 'm3', 'm3'], inversions: [['m3', 'm3', 'M2'], ['m3', 'M2', 'M3'], ['M2', 'M3', 'm2']] },
      { name: 'dominant 9th', abbreviations: ['9', 'dom9'], intervals: ['M3', 'm3', 'm3', 'M3'], inversions: [['m3', 'm3', 'M3', 'm7'], ['m3', 'M3', 'm7', 'M3'], ['M3', 'm7', 'M3', 'm3'], ['m7', 'M3', 'm3', 'm3']] },
      { name: 'dominant 11th', abbreviations: ['11', 'dom11'], intervals: ['M3', 'm3', 'm3', 'M3', 'm3'], inversions: [['m3', 'm3', 'M3', 'm3', 'P5'], ['m3', 'M3', 'm3', 'P5', 'M3'], ['M3', 'm3', 'P5', 'M3', 'm3'], ['m3', 'P5', 'M3', 'm3', 'm3'], ['P5', 'M3', 'm3', 'm3', 'M3']] },
      { name: 'dominant 13th', abbreviations: ['13', 'dom13'], intervals: ['M3', 'm3', 'm3', 'M3', 'm3', 'M3'], inversions: [['m3', 'm3', 'M3', 'm3', 'M3', 'm3'], ['m3', 'M3', 'm3', 'M3', 'm3', 'M3'], ['M3', 'm3', 'M3', 'm3', 'M3', 'm3'], ['m3', 'M3', 'm3', 'M3', 'm3', 'm3'], ['M3', 'm3', 'M3', 'm3', 'm3', 'M3'], ['m3', 'M3', 'm3', 'm3', 'M3', 'm3']] },

      // diminished
      { name: 'diminished', abbreviations: ['dim', '-'], intervals: ['m3', 'm3'], inversions: [['M3', '-5'], ['-5', 'm3']] },
      { name: 'diminished 7th', abbreviations: ['dim7', '-7'], intervals: ['m3', 'm3', 'M3'], inversions: [['m3', 'M3', 'M2'],['M3', 'M2', 'm3'],['M2', 'm3', 'm3']] },
      { name: 'half diminished', abbreviations: ['min7b5'], intervals: ['m3', 'm3', 'M3'], inversions: [['m3', 'M3', 'M2'], ['M3', 'M2', 'm3'], ['M2', 'm3', 'm3']] },

      // augmented
      { name: 'augmented',  abbreviations: ['aug', '+'], intervals: ['M3', 'M3'], inversions: [['M3', '+4'], ['+4', 'M3']] },
      { name: 'augmented 7th',  abbreviations: ['aug7', '+7'], intervals: ['M3', 'M3', 'M2'], inversions: [['M3', 'M2', 'M2'], ['M2', 'M2', 'M3'], ['M2', 'M3', 'M3']] },

      // suspended
      { name: 'suspended 2nd',  abbreviations: ['sus2'], intervals: ['M2', 'P4'], inversions: [['P4', 'P4'], ['P4', 'M2']] },
      { name: 'suspended 4th',  abbreviations: ['sus4'], intervals: ['P4', 'M2'], inversions: [['M2', 'P4'], ['P4', 'P4']] },
      { name: '7 suspended 4th',  abbreviations: ['7sus4'], intervals: ['P4', 'M2', 'P5'], inversions: [['M2', 'P5', 'm7'], ['P5', 'm7', 'P4'], ['m7', 'P4', 'M2']] },
      { name: 'major add 9', abbreviations: ['add9'], intervals: ['M3', 'm3', 'P5'], inversions: [['m3', 'P5', 'm7'], ['P5', 'm7', 'M3'], ['m7', 'M3', 'm3']] },
      { name: 'major add 11', abbreviations: ['add11'], intervals: ['M3', 'm3', 'm7'], inversions: [['m3', 'm7', 'P5'], ['m7', 'P5', 'M3'], ['P5', 'M3', 'm3']] },

    ];

  }




}


module.exports = MusicBase;
