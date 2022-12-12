
const Note = require('../lib/note');


describe('Note', () => {

  describe('the parse(...) static function', () => {

    test('it parses the given note string', () => {

      NOTE_PARSE_EXPECTATIONS.forEach((entry) => {
        let expectation = entry.output;
        let result = Note.parse(entry.input);

        expect(result.name).toEqual(expectation.name);
        expect(result.accidental).toEqual(expectation.accidental);
        expect(result.octave).toEqual(expectation.octave);
      });

    });

  });

  describe('the transpose(...) static function', () => {

    test('it transposes the given note upward by the given number of steps', () => {

      TRANSPOSE_UP_EXPECTATIONS.forEach((entry) => {
        let input = entry.input;
        let result = Note.transpose(input.note, input.semitones);

        expect(result).toEqual(entry.output);
      });

    });

    test('it transposes the given note downward by the given number of steps', () => {

      TRANSPOSE_DOWN_EXPECTATIONS.forEach((entry) => {
        let input = entry.input;
        let result = Note.transpose(input.note, input.semitones);

        expect(result).toEqual(entry.output);
      });

    });

  });

});
