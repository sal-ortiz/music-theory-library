

global.INTERVAL_PARSE_EXPECTATIONS = [
  { input: 'P0', output: { quality: 'P', steps: 0 } },
  { input: '-2', output: { quality: '-', steps: 2 } },
  { input: 'm2', output: { quality: 'm', steps: 2 } },
  { input: 'M2', output: { quality: 'M', steps: 2 } },
  { input: '-3', output: { quality: '-', steps: 3 } },
  { input: '+2', output: { quality: '+', steps: 2 } },
  { input: 'm3', output: { quality: 'm', steps: 3 } },
  { input: 'M3', output: { quality: 'M', steps: 3 } },
  { input: '-4', output: { quality: '-', steps: 4 } },

  { input: '+3', output: { quality: '+', steps: 3 } },
  { input: 'P4', output: { quality: 'P', steps: 4 } },
  { input: '+4', output: { quality: '+', steps: 4 } },
  { input: '-5', output: { quality: '-', steps: 5 } },
  { input: 'P5', output: { quality: 'P', steps: 5 } },
  { input: '-6', output: { quality: '-', steps: 6 } },
  { input: '+5', output: { quality: '+', steps: 5 } },
  { input: 'm6', output: { quality: 'm', steps: 6 } },
  { input: 'M6', output: { quality: 'M', steps: 6 } },

  { input: '+6', output: { quality: '+', steps: 6 } },
  { input: 'm7', output: { quality: 'm', steps: 7 } },
  { input: 'M7', output: { quality: 'M', steps: 7 } },
  { input: '-8', output: { quality: '-', steps: 8 } },
  { input: 'P8', output: { quality: 'P', steps: 8 } },
  { input: '-9', output: { quality: '-', steps: 9 } },
  { input: 'm9', output: { quality: 'm', steps: 9 } },
  { input: 'M9', output: { quality: 'M', steps: 9 } },
  { input: '-10', output: { quality: '-', steps: 10 } },

  { input: '+9', output: { quality: '+', steps: 9 } },
  { input: 'm10', output: { quality: 'm', steps: 10 } },
  { input: 'M10', output: { quality: 'M', steps: 10 } },
  { input: '-11', output: { quality: '-', steps: 11 } },
  { input: 'P11', output: { quality: 'P', steps: 11 } },
  { input: '-12', output: { quality: '-', steps: 12 } },
  { input: '+11', output: { quality: '+', steps: 11 } },
  { input: 'P12', output: { quality: 'P', steps: 12 } },
];

global.COUNT_SEMITONES_EXPECTATIONS = [
  { input: { low: 'C0', high: 'C0' },   output: 0 },
  { input: { low: 'C#0', high: 'D0' },  output: 1 },
  { input: { low: 'D0', high: 'E0' },   output: 2 },
  { input: { low: 'D#0', high: 'F#0' }, output: 3 },

  { input: { low: 'E0', high: 'G#0' }, output: 4 },
  { input: { low: 'F0', high: 'A#0' }, output: 5 },
  { input: { low: 'F#0', high: 'C1' }, output: 6 },
  { input: { low: 'G0', high: 'D1' },  output: 7 },

  { input: { low: 'G#0', high: 'E1' },  output: 8 },
  { input: { low: 'A0', high: 'F#1' },  output: 9 },
  { input: { low: 'A#0', high: 'G#1' }, output: 10 },
  { input: { low: 'B0', high: 'A#1' },  output: 11 },

  { input: { low: 'C1', high: 'C2' },   output: 12 },
  { input: { low: 'C#1', high: 'D2' },  output: 13 },
  { input: { low: 'D1', high: 'E2' },   output: 14 },
  { input: { low: 'D#1', high: 'F#2' }, output: 15 },
];


global.INTERVAL_INVERT_EXPECTATIONS = [
//  { input: ['C0','C0' ], output: { quality: 'P', steps: 8 } },
  { input: ['C#0','D0' ], output: { quality: '+', steps: 7 } },
  { input: ['D0','E0' ], output: { quality: 'M', steps: 7 } },
  { input: ['D#0','F#0' ], output: { quality: 'm', steps: 7 } },
  { input: ['E0','G#0' ], output: { quality: '+', steps: 6 } },
  { input: ['F0','G#0' ], output: { quality: '-', steps: 7 } },
  { input: ['F#0','A0' ], output: { quality: 'M', steps: 6 } },
  { input: ['G0','B0' ], output: { quality: 'm', steps: 6 } },
  { input: ['G#0','C#0' ], output: { quality: '+', steps: 5 } },

  { input: ['A0','D#0' ], output: { quality: '-', steps: 6 } },
  { input: ['A#0','E#0' ], output: { quality: 'P', steps: 5 } },
  { input: ['B0','G0' ], output: { quality: '-', steps: 5 } },
  { input: ['C1','A0' ], output: { quality: '+', steps: 4 } },
  { input: ['C#1','B0' ], output: { quality: 'P', steps: 4 } },
  { input: ['D1','C#0' ], output: { quality: '+', steps: 3 } },
  { input: ['D#1','D#1' ], output: { quality: '-', steps: 4 } },
  { input: ['E1','E#1' ], output: { quality: 'M', steps: 3 } },
  { input: ['F1','G1' ], output: { quality: 'm', steps: 3 } },

  { input: ['F#1','A1' ], output: { quality: '-', steps: 3 } },
  { input: ['G1','B1' ], output: { quality: 'M', steps: 2 } },
  { input: ['G#1','C#1' ], output: { quality: 'M', steps: 2 } },
  { input: ['A1','D#1' ], output: { quality: '+', steps: 0 } },
  { input: ['A#1','E#2' ], output: { quality: 'P', steps: 0 } },
];

//global.INTERVAL_INVERT_EXPECTATIONS = [
//  { input: 'P0', output: 'P8' },
//  { input: '-2', output: '+7' },
//  { input: 'm2', output: 'M7' },
//  { input: 'M2', output: 'm7' },
//  { input: '-3', output: '+6' },
//  { input: '+2', output: '-7' },
//  { input: 'm3', output: 'M6' },
//  { input: 'M3', output: 'm6' },
//  { input: '-4', output: '+5' },
//
//  { input: '+3', output: '-6' },
//  { input: 'P4', output: 'P5' },
//  { input: '+4', output: '-5' },
//  { input: '-5', output: '+4' },
//  { input: 'P5', output: 'P4' },
//  { input: '-6', output: '+3' },
//  { input: '+5', output: '-4' },
//  { input: 'm6', output: 'M3' },
//  { input: 'M6', output: 'm3' },
//
//  { input: '+6', output: '-3' },
//  { input: 'm7', output: 'M2' },
//  { input: 'M7', output: 'm2' },
//  { input: '-8', output: '+0' },
//  { input: 'P8', output: 'P0' },
//  { input: '-9', output:
//  { input: 'm9', output:
//  { input: 'M9', output:
//  { input: '-10', output:
//
//  { input: '+9', output:
//  { input: 'm10', output:
//  { input: 'M10', output:
//  { input: '-11', output:
//  { input: 'P11', output:
//  { input: '-12', output:
//  { input: '+11', output:
//  { input: 'P12', output:
//];
