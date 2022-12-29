

global.NOTE_SETTER_EXPECTATIONS = [
  { note: 'C0', name: 'D', accidental: 'b', octave: 1 },
  { note: 'D1', name: 'E', accidental: '#', octave: 2 }
];

global.NOTE_TRANSPOSE_UP_EXPECTATIONS = [
  { input: { note: 'C0',  semitones: 1  }, output: 'C#0' },
  { input: { note: 'D0',  semitones: 2  }, output: 'E0'  },
  { input: { note: 'F0',  semitones: 3  }, output: 'G#0' },
  { input: { note: 'A0',  semitones: 4  }, output: 'C#1' },
  { input: { note: 'D1',  semitones: 5  }, output: 'G1'  },
  { input: { note: 'A1',  semitones: 6  }, output: 'D#2' },
  { input: { note: 'E2',  semitones: 7  }, output: 'B2'  },
  { input: { note: 'C3',  semitones: 8  }, output: 'G#3' },
  { input: { note: 'A3',  semitones: 9  }, output: 'F#4' },
  { input: { note: 'G4',  semitones: 10 }, output: 'F5'  },
  { input: { note: 'G5',  semitones: 11 }, output: 'F#6' },
  { input: { note: 'G6',  semitones: 12 }, output:  'G7' },
];

global.NOTE_TRANSPOSE_DOWN_EXPECTATIONS = [
  { input: { note: 'C8', semitones: 1  }, output: 'B7'  },
  { input: { note: 'A8', semitones: 2  }, output: 'G8'  },
  { input: { note: 'F8', semitones: 3  }, output: 'D8'  },
  { input: { note: 'C8', semitones: 4  }, output: 'G#7' },
  { input: { note: 'G7', semitones: 5  }, output: 'D7'  },
  { input: { note: 'C7', semitones: 6  }, output: 'F#6' },
  { input: { note: 'F6', semitones: 7  }, output: 'A#5' },
  { input: { note: 'A5', semitones: 8  }, output: 'C#5' },
  { input: { note: 'C5', semitones: 9  }, output: 'D#4' },
  { input: { note: 'D4', semitones: 10 }, output: 'E3'  },
  { input: { note: 'D3', semitones: 11 }, output: 'D#2' },
  { input: { note: 'B2', semitones: 11 }, output: 'C2'  },
  { input: { note: 'B2', semitones: 12 }, output: 'B1'  },
];

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
