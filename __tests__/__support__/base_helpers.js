


global.NOTE_PARSE_EXPECTATIONS = [
  { input: 'Cb0', output: { name: 'C', accidental: 'b', octave: 0 } },
  { input: 'C0',  output: { name: 'C', accidental: '',  octave: 0 } },
  { input: 'C#0', output: { name: 'C', accidental: '#', octave: 0 } },

  { input: 'Db1', output: { name: 'D', accidental: 'b', octave: 1 } },
  { input: 'D1',  output: { name: 'D', accidental: '',  octave: 1 } },
  { input: 'D#1', output: { name: 'D', accidental: '#', octave: 1 } },

  { input: 'Eb2', output: { name: 'E', accidental: 'b', octave: 2 } },
  { input: 'E2',  output: { name: 'E', accidental: '',  octave: 2 } },
  { input: 'E#2', output: { name: 'E', accidental: '#', octave: 2 } },

  { input: 'Fb3', output: { name: 'F', accidental: 'b', octave: 3 } },
  { input: 'F3',  output: { name: 'F', accidental: '',  octave: 3 } },
  { input: 'F#3', output: { name: 'F', accidental: '#', octave: 3 } },

  { input: 'Gb4', output: { name: 'G', accidental: 'b', octave: 4 } },
  { input: 'G4',  output: { name: 'G', accidental: '',  octave: 4 } },
  { input: 'G#4', output: { name: 'G', accidental: '#', octave: 4 } },

  { input: 'Ab5', output: { name: 'A', accidental: 'b', octave: 5 } },
  { input: 'A5',  output: { name: 'A', accidental: '',  octave: 5 } },
  { input: 'A#5', output: { name: 'A', accidental: '#', octave: 5 } },

  { input: 'Bb6', output: { name: 'B', accidental: 'b', octave: 6 } },
  { input: 'B6',  output: { name: 'B', accidental: '',  octave: 6 } },
  { input: 'B#6', output: { name: 'B', accidental: '#', octave: 6 } },
];

global.INTERVAL_PARSE_EXPECTATIONS = [
  { input: 'P0', output: { quality: 'P', steps: 0 } },
  { input: '-2', output: { quality: '-', steps: 2 } },
  { input: 'm2', output: { quality: 'm', steps: 2 } },
  { input: 'M2', output: { quality: 'M', steps: 2 } },
  { input: '-3', output: { quality: '-', steps: 3 } },
  { input: 'm3', output: { quality: 'm', steps: 3 } },
  { input: '+2', output: { quality: '+', steps: 2 } },

  { input: 'M3', output: { quality: 'M', steps: 3 } },
  { input: '+3', output: { quality: '+', steps: 3 } },
  { input: '-4', output: { quality: '-', steps: 4 } },
  { input: 'P4', output: { quality: 'P', steps: 4 } },
  { input: '+4', output: { quality: '+', steps: 4 } },
  { input: '-5', output: { quality: '-', steps: 5 } },
  { input: 'P5', output: { quality: 'P', steps: 5 } },

  { input: '+5', output: { quality: '+', steps: 5 } },
  { input: '-6', output: { quality: '-', steps: 6 } },
  { input: 'm6', output: { quality: 'm', steps: 6 } },
  { input: 'M6', output: { quality: 'M', steps: 6 } },
  { input: '+6', output: { quality: '+', steps: 6 } },
  { input: 'm7', output: { quality: 'm', steps: 7 } },
  { input: 'M7', output: { quality: 'M', steps: 7 } },
  { input: 'P8', output: { quality: 'P', steps: 8 } },
];

global.TRANSPOSE_UP_EXPECTATIONS = [
  { input: { note: 'Cb0', semitones: 0 }, output: 'B0' },
  { input: { note: 'C0',  semitones: 2 }, output: 'D0'  },
  { input: { note: 'C#0', semitones: 4 }, output: 'F0' },

  { input: { note: 'Db1', semitones: 1 }, output: 'D1' },
  { input: { note: 'D1',  semitones: 3 }, output: 'F1'  },
  { input: { note: 'D#1', semitones: 5 }, output: 'G#1' },

  { input: { note: 'Eb2', semitones: 2 }, output: 'F2' },
  { input: { note: 'E2',  semitones: 4 }, output: 'G#2'  },
  { input: { note: 'E#2', semitones: 6 }, output: 'B2' },

  { input: { note: 'Fb3', semitones: 3 }, output: 'G3' },
  { input: { note: 'F3',  semitones: 5 }, output: 'A#3'  },
  { input: { note: 'F#3', semitones: 7 }, output: 'C#4' },

  { input: { note: 'Gb4', semitones: 4 }, output: 'A#4' },
  { input: { note: 'G4',  semitones: 6 }, output: 'C#5'  },
  { input: { note: 'G#4', semitones: 8 }, output: 'E5' },

  { input: { note: 'Ab5', semitones: 5 }, output: 'C#6' },
  { input: { note: 'A5',  semitones: 7 }, output: 'E6'  },
  { input: { note: 'A#5', semitones: 9 }, output: 'G6' },

  { input: { note: 'Bb6', semitones: 6 },  output: 'E7' },
  { input: { note: 'B6',  semitones: 8 },  output: 'G7'  },
  { input: { note: 'B#6', semitones: 10 }, output: 'A#6' },

  { input: { note: 'Cb7', semitones: 7 },  output: 'F#8' },
  { input: { note: 'C7',  semitones: 9 },  output: 'A7'  },
  { input: { note: 'C#7', semitones: 11 }, output: 'C8' },

  { input: { note: 'Db8', semitones: 8 },  output: 'A8' },
  { input: { note: 'D8',  semitones: 10 }, output: 'C9'  },
  { input: { note: 'D#8', semitones: 12 }, output: 'D#9' },
];

global.TRANSPOSE_DOWN_EXPECTATIONS = [
  { input: { note: 'Cb9', semitones: 0 },  output: 'B9' },
  { input: { note: 'C9',  semitones: -2 }, output: 'A#8'  },
  { input: { note: 'C#9', semitones: -4 }, output: 'A8' },

  { input: { note: 'Bb8', semitones: -2 }, output: 'G#8' },
  { input: { note: 'B8',  semitones: -4 }, output: 'G8'  },
  { input: { note: 'B#8', semitones: -6 }, output: 'F#7' },

  { input: { note: 'Ab7', semitones: -3 }, output: 'F7' },
  { input: { note: 'A7',  semitones: -5 }, output: 'E7'  },
  { input: { note: 'A#7', semitones: -7 }, output: 'D#7' },

  { input: { note: 'Gb6', semitones: -4 }, output: 'D6' },
  { input: { note: 'G6',  semitones: -6 }, output: 'C#6'  },
  { input: { note: 'G#6', semitones: -8 }, output: 'C6' },

  { input: { note: 'Fb5', semitones: -5 }, output: 'B4' },
  { input: { note: 'F5',  semitones: -7 }, output: 'A#4'  },
  { input: { note: 'F#5', semitones: -9 }, output: 'A4' },

  { input: { note: 'Eb4', semitones: -6 },  output: 'A3' },
  { input: { note: 'E4',  semitones: -8 },  output: 'G#3'  },
  { input: { note: 'E#4', semitones: -10 }, output: 'G3' },

  { input: { note: 'Db3', semitones: -7 },  output: 'F#2' },
  { input: { note: 'D3',  semitones: -9 },  output: 'F2'  },
  { input: { note: 'D#3', semitones: -11 }, output: 'E2' },

  { input: { note: 'Cb2', semitones: -8 },  output: 'D#2' },
  { input: { note: 'C2',  semitones: -10 }, output: 'D1'  },
  { input: { note: 'C#2', semitones: -12 }, output: 'C#1' },

  { input: { note: 'Bb1', semitones: -9 },  output: 'C#1' },
  { input: { note: 'B1',  semitones: -11 }, output: 'C1'  },
  { input: { note: 'C2',  semitones: -13 }, output: 'B0'  },
];

global.COUNT_SEMITONES_EXPECTATIONS = [
  { input: { low: 'C0', high: 'C0' }, output: 0 },
  { input: { low: 'C#0', high: 'D0' }, output: 1 },
  { input: { low: 'D0', high: 'E0' }, output: 2 },
  { input: { low: 'D#0', high: 'F#0' }, output: 3 },
  { input: { low: 'E0', high: 'G#0' }, output: 4 },
  { input: { low: 'F0', high: 'A#0' }, output: 5 },
  { input: { low: 'F#0', high: 'C1' }, output: 6 },
  { input: { low: 'G0', high: 'D1' }, output: 7 },
  { input: { low: 'G#0', high: 'E1' }, output: 8 },
  { input: { low: 'A0', high: 'F#1' }, output: 9 },
  { input: { low: 'A#0', high: 'G#1' }, output: 10 },
  { input: { low: 'B0', high: 'A#1' }, output: 11 },
  { input: { low: 'C1', high: 'C2' }, output: 12 },
  { input: { low: 'C#1', high: 'D2' }, output: 13 },
  { input: { low: 'D1', high: 'E2' }, output: 14 },
  { input: { low: 'D#1', high: 'F#2' }, output: 15 },
];
