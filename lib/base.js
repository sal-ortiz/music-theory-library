
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
      ['C', 'B#', 'Dbb'], ['C#', 'Db'], ['D', 'C##', 'Ebb'], ['D#', 'Eb'],
      ['E', 'Fb', 'D##'], ['F', 'E#', 'Gbb'], ['F#', 'Gb'], ['G', 'F##'],
      ['G#', 'Ab'], ['A', 'G##', 'Bbb'], ['A#', 'Bb'], ['B', 'Cb', 'A##']
    ];

  }

  static get Chords() {

    return [
      // power chord
      { name: 'fifth',     abbreviations: ['5'], intervals: ['P5'] },

      // major
      { name: 'major',     abbreviations: ['maj', 'M', ''], intervals: ['M3', 'm3'] },
      { name: 'major 6th', abbreviations: ['maj6', 'M6'], intervals: ['M3', 'm3', 'M2'] },
      { name: 'major 6/9', abbreviations: ['maj6/9', '6/9', 'M6/9'], intervals: ['M3', 'm3', 'M2', 'P4'] },
      { name: 'major 7th', abbreviations: ['maj7', 'M7'], intervals: ['M3', 'm3', 'M3'] },
      { name: 'major 9th', abbreviations: ['maj9', 'M9'], intervals: ['M3', 'm3', 'M3', 'm3'] },
      { name: 'major 11th', abbreviations: ['maj11', 'M11'], intervals: ['M3', 'm3', 'M3', 'm3', 'm3'] },
      { name: 'major 13th', abbreviations: ['maj13', 'M13'], intervals: ['M3', 'm3', 'M3', 'm3', 'm3', 'M3'] },

      // minor
      { name: 'minor', abbreviations: ['min', 'm'], intervals: ['m3', 'M3']  },
      { name: 'minor 6th', abbreviations: ['min6', 'm6'], intervals: ['m3', 'M3', 'M2'] },
      { name: 'minor 7th', abbreviations: ['min7', 'm7'], intervals: ['m3', 'M3', 'm3'] },
      { name: 'minor 9th', abbreviations: ['min9', 'm9'], intervals: ['m3', 'M3', 'm3', 'M3'] },
      { name: 'minor 11th', abbreviations: ['min11', 'm11'], intervals: ['m3', 'M3', 'm3', 'M3', 'm3'] },
      { name: 'minor 13th', abbreviations: ['min13', 'm13'], intervals: ['m3', 'M3', 'm3', 'M3', 'm3', 'M3'] },
      { name: 'minor major 7th', abbreviations: ['min maj7', 'mM7'], intervals: ['m3', 'M3', 'M3'] },

      // dominant
      { name: 'dominant 7th', abbreviations: ['7', 'dom7'], intervals: ['M3', 'm3', 'm3'] },
      { name: 'dominant 9th', abbreviations: ['9', 'dom9'], intervals: ['M3', 'm3', 'm3', 'M3'] },
      { name: 'dominant 11th', abbreviations: ['11', 'dom11'], intervals: ['M3', 'm3', 'm3', 'M3', 'm3'] },
      { name: 'dominant 13th', abbreviations: ['13', 'dom13'], intervals: ['M3', 'm3', 'm3', 'M3', 'm3', 'M3'] },

      // diminished
      { name: 'diminished', abbreviations: ['dim', '-'], intervals: ['m3', 'm3'] },
      { name: 'diminished 7th', abbreviations: ['dim7', '-7'], intervals: ['m3', 'm3', 'M3'] },
      { name: 'half diminished', abbreviations: ['min7b5'], intervals: ['m3', 'm3', 'M3'] },

      // augmented
      { name: 'augmented',  abbreviations: ['aug', '+'], intervals: ['M3', 'M3'] },
      { name: 'augmented 7th',  abbreviations: ['aug7', '+7'], intervals: ['M3', 'M3', 'M2'] },

      // suspended
      { name: 'suspended 2nd',  abbreviations: ['sus2'], intervals: ['M2', 'P4'] },
      { name: 'suspended 4th',  abbreviations: ['sus4'], intervals: ['P4', 'M2'] },
      { name: '7 suspended 4th',  abbreviations: ['7sus4'], intervals: ['P4', 'M2', 'P5'] },
      { name: 'major add 9', abbreviations: ['add9'], intervals: ['M3', 'm3', 'P5'] },
      { name: 'major add 11', abbreviations: ['add11'], intervals: ['M3', 'm3', 'm7'] },

    ];

  }

  static get Scales() {
    return [
      { name: 'pentatonic minor', abbreviations: ['pentatonic minor'], intervals: ['m3', 'M2', 'M2', 'm3', 'M2'] },
      { name: 'pentatonic major', abbreviations: ['pentatonic major'], intervals: ['M2', 'M2', 'm3', 'M2', 'm3'] },
      { name: 'pentatonic neutral', abbreviations: ['pentatonic neutral'], intervals: ['M2', 'm3', 'M2', 'm3', 'M2'] },
      { name: 'pentatonic dominant', abbreviations: ['pentatonic dom'], intervals: ['M2', 'M2', 'm3', 'm3', 'M2'] },
      { name: 'blues', abbreviations: ['blues'], intervals: ['m3', 'M2', 'm2', 'm2', 'm3', 'M2'] },

      { name: 'major', abbreviations: ['maj', 'M'], intervals: ['M2', 'M2', 'm2', 'M2', 'M2', 'M2', 'm2'] },
      { name: 'minor', abbreviations: ['min', 'm'], intervals: ['M2', 'm2', 'M2', 'M2', 'm2', 'M2', 'M2'] },
      { name: 'augmented', abbreviations: ['aug'], intervals: ['M2', 'M2', 'M2', 'M2', 'M2', 'M2', 'M2'] },
      { name: 'dominant-diminished', abbreviations: ['dom-dim'], intervals: ['m2', 'M2', 'm2', 'M2', 'm2', 'M2', 'm2'] },
      { name: 'dominant 7th', abbreviations: ['dom7th'], intervals: ['M2', 'M2', 'm2', 'M2', 'M2', 'm2', 'M2'] },

      { name: 'diminished', abbreviations: ['dim'], intervals: ['M2', 'm2', 'M2', 'm2', 'M2', 'm2', 'M2'] },
      { name: 'half diminished', abbreviations: ['half dim'], intervals: ['m2', 'M2', 'M2', 'm2', 'M2', 'M2', 'M2'] },
      { name: 'augmented', abbreviations: ['aug'], intervals: ['m3', 'm2', 'M2', 'M2', 'm3', 'm2'] },

      { name: 'diatonic', abbreviations: ['diatonic'], intervals: ['M2', 'M2', 'm3', 'M2', 'm3'] },

      { name: 'whole-tone', abbreviations: ['whole-tone'], intervals: ['M2', 'M2', 'M2', 'M2', 'M2', 'M2'] },
      { name: 'leading whole-tone', abbreviations: ['leading whole-tone'], intervals: ['M2', 'M2', 'M2', 'M2', 'M2', 'm2', 'm2'] },
      { name: 'half-whole-tone', abbreviations: ['half-whole-tone'], intervals: ['m2', 'M2', 'm2', 'M2', 'm2', 'M2', 'm2', 'M2'] },
      { name: 'whole-half-tone', abbreviations: ['whole-half-tone'], intervals: ['M2', 'm2', 'M2', 'm2', 'M2', 'm2', 'M2', 'm2'] },
      { name: 'harmonic minor', abbreviations: ['harmonic minor', 'min+7', 'm+7'], intervals: ['M2', 'm2', 'M2', 'M2', 'm2', 'm3', 'm2'] },
      { name: 'melodic minor', abbreviations: ['melodic minor', 'min+6+7', 'm+6+7'], intervals: ['M2', 'm2', 'M2', 'M2', 'M2', 'M2', 'm2'] },
      { name: 'double harmonic minor', abbreviations: ['double harmonic minor'], intervals: ['m2', 'm3', 'm2', 'M2', 'm2', 'm3', 'm2'] },
      { name: 'enigmatic', abbreviations: ['enigmatic'], intervals: ['m2', 'm3', 'M2', 'M2', 'M2', 'm2', 'm2'] },
      { name: 'nine tone', abbreviations: ['nine tone'], intervals: ['M2', 'm2', 'm2', 'M2', 'm2', 'm2', 'm2', 'M2', 'm2'] },
      { name: 'overtone dominant', abbreviations: ['overtone dom'], intervals: ['M2', 'M2', 'M2', 'm2', 'M2', 'm2', 'M2'] },
      { name: 'six tone symmetrical', abbreviations: ['six tone symmetrical'], intervals: ['m2', 'm3', 'm2', 'm3', 'm2', 'm3'] },
      { name: 'altered', abbreviations: ['altered'], intervals: ['m2', 'M2', 'm2', 'M2', 'm2', 'm2', 'M3', 'm2'] },

      { name: 'bebop major', abbreviations: ['bebop major'], intervals: ['M2', 'M2', 'm2', 'M2', 'm2', 'm2', 'M2', 'm2'] },
      { name: 'bebop minor', abbreviations: ['bebop minor'], intervals: ['M2', 'm2', 'm2', 'm2', 'M2', 'M2', 'm2', 'M2'] },
      { name: 'bebop dominant', abbreviations: ['bebop dom'], intervals: ['M2', 'M2', 'm2', 'M2', 'M2', 'm2', 'm2', 'm2'] },
      { name: 'bebop half diminished', abbreviations: ['bebop half dim'], intervals: ['m2', 'M2', 'M2', 'm2', 'm2', 'm2', 'm3', 'm2'] },

      { name: 'ionian', abbreviations: ['ionian'], intervals: ['M2', 'M2', 'm2', 'M2', 'M2', 'M2', 'm2'] },
      { name: 'dorian', abbreviations: ['dorian'], intervals: ['M2', 'm2', 'M2', 'M2', 'M2', 'm2', 'M2'] },
      { name: 'phrygian', abbreviations: ['phrygian'], intervals: ['m2', 'M2', 'M2', 'M2', 'm2', 'M2', 'M2'] },
      { name: 'lydian', abbreviations: ['lydian'], intervals: ['M2', 'M2', 'M2', 'm2', 'M2', 'M2', 'm2'] },
      { name: 'mixolydian', abbreviations: ['mixolydian'], intervals: ['M2', 'M2', 'm2', 'M2', 'M2', 'm2', 'M2'] },
      { name: 'aeolian', abbreviations: ['aeolian'], intervals: ['M2', 'm2', 'M2', 'M2', 'm2', 'M2', 'M2'] },
      { name: 'locrian', abbreviations: ['locrian'], intervals: ['m2', 'M2', 'M2', 'm2', 'M2', 'M2', 'M2'] },
      { name: 'major locrian', abbreviations: ['major locrian'], intervals: ['M2', 'M2', 'm2', 'm2', 'M2', 'M2', 'M2'] },
      { name: 'lydian augmented', abbreviations: ['lydian augmented'], intervals: ['M2', 'M2', 'M2', 'M2', 'm2', 'M2', 'm2'] },
      { name: 'lydian minor', abbreviations: ['lydian minor'], intervals: ['M2', 'M2', 'M2', 'm2', 'm2', 'M2', 'M2'] },
      { name: 'lydian diminished', abbreviations: ['lydian diminished'], intervals: ['M2', 'm2', 'm3', 'm2', 'M2', 'M2', 'm2'] },
      { name: 'phrygian major', abbreviations: ['phrygian major'], intervals: ['m2', 'm3', 'm2', 'M2', 'm2', 'M2', 'M2'] },
      { name: 'ultralocrian', abbreviations: ['ultralocrian'], intervals: ['m2', 'M2', 'm2', 'M2', 'M2', 'm2', 'm3', 'm2'] },
      { name: 'mixoblues', abbreviations: ['mixoblues'], intervals: ['m3', 'm2', 'm2', 'm2', 'm2', 'm3', 'M2'] },

      { name: 'chromatic', abbreviations: ['chromatic'], intervals: ['m2', 'm2', 'm2', 'm2', 'm2', 'm2', 'm2', 'm2', 'm2', 'm2', 'm2', 'm2'] },

      { name: 'algerian', abbreviations: ['algerian'], intervals: ['M2', 'm2', 'M2', 'm2', 'm2', 'm2', 'm3', 'm2'] },
      { name: 'arabian', abbreviations: ['arabian'], intervals: ['M2', 'M2', 'm2', 'm2', 'M2', 'M2', 'M2'] },
      { name: 'balinese', abbreviations: ['balinese'], intervals: ['m2', 'M2', 'M3', 'm2', 'M3', 'm2'] },
      { name: 'byzantine', abbreviations: ['byzantine'], intervals: ['m2', 'm3', 'm2', 'M2', 'm2', 'm3', 'm2'] },
      { name: 'chinese #1', abbreviations: ['chinese #1'], intervals: ['m2', 'M3', 'M2', 'm2', 'M3', 'm2'] },
      { name: 'chinese #2', abbreviations: ['chinese #2'], intervals: ['M2', 'm3', 'M2', 'M2', 'm3'] },
      { name: 'chinese mongolian', abbreviations: ['chinese mongolian'], intervals: ['M2', 'M2', 'm3', 'M2', 'm3'] },
      { name: 'egyptian', abbreviations: ['egyptian'], intervals: ['M2', 'm3', 'M2', 'm3', 'M2'] },
      { name: 'eight tone spanish', abbreviations: ['eight tone spanish'], intervals: ['m2', 'M2', 'm2', 'm2', 'm2', 'M2', 'M2', 'M2', 'm2'] },
      { name: 'hawaiian', abbreviations: ['hawaiian'], intervals: ['M2','m2', 'M2', 'M2', 'M2', 'M2', 'm2'] },
      { name: 'hindu', abbreviations: ['hindu'], intervals: ['M2', 'M2', 'm2', 'M2', 'm2', 'M2', 'M2'] },
      { name: 'hirajoshi #1', abbreviations: ['Hirajoshi'], intervals: ['M2', 'm2', 'M3', 'm2', 'M3'] },
      { name: 'hirajoshi #2', abbreviations: ['Hirajoshi #2'], intervals: ['M3', 'm2', 'M3', 'M2', 'm2'] },
      { name: 'hungarian major', abbreviations: ['hungarian major'], intervals: ['m3', 'm2', 'M2', 'm2', 'M2', 'm2', 'M2'] },
      { name: 'hungarian gypsy', abbreviations: ['hungarian gypsy'], intervals: ['M2', 'm2', 'm3', 'm2', 'm2', 'm3', 'm2'] },
      { name: 'hungarian gypsy persian', abbreviations: ['hungarian gypsy persian'], intervals: ['m2', 'm3', 'm2', 'M2', 'm2', 'm3', 'm2'] },
      { name: 'hungarian minor', abbreviations: ['hungarian minor'], intervals: ['M2', 'm2', 'm3', 'm2', 'm2', 'm3', 'm2'] },
      { name: 'japanese #1', abbreviations: ['japanese #1'], intervals: ['m2', 'M3', 'M2', 'm2', 'M3'] },
      { name: 'japanese #2', abbreviations: ['japanese #2'], intervals: ['M2', 'm3', 'M2', 'm2', 'M3'] },
      { name: 'ichikosucho', abbreviations: ['ichikosucho'], intervals: ['M2', 'M2', 'm2', 'm2', 'm2', 'M2', 'M2'] },
      { name: 'taishikicho', abbreviations: ['taishikicho'], intervals: ['M2', 'M2', 'm2', 'm2', 'm2', 'M2', 'm2', 'm2', 'm2'] },
      { name: 'javanese', abbreviations: ['japanese'], intervals: ['m2', 'M2', 'M2', 'M2', 'M2', 'm2', 'M2'] },
      { name: 'adonai malakh', abbreviations: ['adonai malakh'], intervals: ['m2', 'm2', 'm2', 'M2', 'M2', 'M2', 'm2', 'M2'] },
      { name: 'ahaba rabba', abbreviations: ['ahaba rabba'], intervals: ['m2', 'm3', 'm2', 'M2', 'm2', 'M2', 'M2'] },
      { name: 'magen abot', abbreviations: ['magen abot'], intervals: ['m2', 'M2', 'm2', 'M2', 'M2', 'M2', 'm2'] },
      { name: 'kumoi', abbreviations: ['kumoi'], intervals: ['M2', 'm2', 'M3', 'M2', 'm3'] },
      { name: 'kumoi #2', abbreviations: ['kumoi #2'], intervals: ['m2', 'M3', 'M2', 'm2', 'M3'] },
      { name: 'mohammedan', abbreviations: ['mohammedan'], intervals: ['M2', 'm2', 'M2', 'M2', 'm2', 'm3', 'm2'] },
      { name: 'neopolitan', abbreviations: ['neopolitan'], intervals: ['m2', 'M2', 'M2', 'M2', 'm2', 'm3', 'm2'] },
      { name: 'neopolitan major', abbreviations: ['neopolitan major'], intervals: ['m2', 'M2', 'M2', 'M2', 'M2', 'M2', 'm2'] },
      { name: 'neopolitan minor', abbreviations: ['neopolitan minor'], intervals: ['m2', 'M2', 'M2', 'M2', 'm2', 'M2', 'M2'] },
      { name: 'oriental #1', abbreviations: ['oriental #1'], intervals: ['m2', 'm3', 'm2', 'm2', 'M2', 'M2', 'M2'] },
      { name: 'oriental #2', abbreviations: ['oriental #2'], intervals: ['m2', 'm3', 'm2', 'm2', 'm3', 'm2', 'M2'] },
      { name: 'pelog', abbreviations: ['pelog'], intervals: ['m2', 'M2', 'M3', 'm2', 'M3'] },
      { name: 'pelog #2', abbreviations: ['pelog #2'], intervals: ['m2', 'M2', 'M3', 'm3', 'M2'] },
      { name: 'persian', abbreviations: ['persian'], intervals: ['m2', 'm3', 'm2', 'm2', 'M2', 'm3', 'm2'] },
      { name: 'prometheus', abbreviations: ['prometheus'], intervals: ['M2', 'M2', 'M2', 'm3', 'm2', 'M2'] },
      { name: 'prometheus neopolitan', abbreviations: ['prometheus neopolitan'], intervals: ['m2', 'm3', 'M2', 'm3', 'm2', 'M2'] },
      { name: 'romanian minor', abbreviations: ['romanian minor'], intervals: ['M2', 'm2', 'm3', 'm2', 'M2', 'm2', 'M2'] },
      { name: 'spanish gypsy', abbreviations: ['spanish gypsy'], intervals: ['m2', 'm3', 'm2', 'M2', 'm2', 'M2', 'M2'] },
      { name: 'super locrian', abbreviations: ['super locrian'], intervals: ['m2', 'M2', 'm2', 'M2', 'M2', 'M2', 'M2'] },
      { name: 'iwato', abbreviations: ['iwato'], intervals: ['m2', 'M3', 'm2', 'M3', 'M2'] },
      //{ name: 'japanese (in sen)', abbreviations: ['japanese (in sen)'], intervals: ['m2', 'M3', 'M2', 'm3', 'M2'] },
      { name: 'moorish phrygian', abbreviations: ['moorish phrygian'], intervals: ['m2', 'M2', 'm2', 'm2', 'M2', 'm2', 'M2', 'm2', 'm2'] },
    ];

  }


}


module.exports = MusicBase;
