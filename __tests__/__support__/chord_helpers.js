

global.CHORD_SETTER_EXPECTATIONS = [
  { input: 'maj', output: { type: 'major', intervals: ['M3', 'm3'] } },
  { input: 'min', output: { type: 'minor', intervals: ['m3', 'M3'] } },

];

global.CHORD_FROM_ROOT_EXPECTATIONS = [
  { input: { name: 'maj', root: 'C0'}, output: ['C0', 'E0', 'G0'] },

];



global.CHORD_PARSE_EXPECTATIONS = [
  { input: 'maj', output: { type: 'major', intervals: ['M3', 'm3'] } },


  { input: 'min', output: { type: 'minor', intervals: ['m3', 'M3'] } },


//
//      { name: 'major',     abbreviation: ['M', 'maj'],
//      { name: 'major 6th', abbreviation: ['M6', 'maj6'],
//      { name: 'major 6/9', abbreviation: ['6/9', 'M6/9', 'maj6/9'],
//      { name: 'major 7th', abbreviation: ['M7', 'maj7'],
//      { name: 'major 9th', abbreviation: ['M9', 'maj9'],
//      { name: 'major 11th', abbreviation: ['M11', 'maj11'],
//      { name: 'major 13th', abbreviation: ['M13', 'maj13'],
//
//      // minor
//      { name: 'minor', abbreviation: ['m', 'min'],
//      { name: 'minor 6th', abbreviation: ['m6', 'min6'],
//      { name: 'minor 7th', abbreviation: ['m7', 'min7'],
//      { name: 'minor 9th', abbreviation: ['m9', 'min9'],
//      { name: 'minor 11th', abbreviation: ['m11', 'min11'],
//      { name: 'minor 13th', abbreviation: ['m13', 'min13'],
//      { name: 'minor major 13th', abbreviation: ['mM7', 'min maj7th', 'm maj7th']
//
//      // dominant
//      { name: 'dominant 7th', abbreviation: ['7', 'dom7'],
//      { name: 'dominant 9th', abbreviation: ['9', 'dom9'],
//      { name: 'dominant 11th', abbreviation: ['11', 'dom11'],
//      { name: 'dominant 13th', abbreviation: ['13', 'dom13'],


];
