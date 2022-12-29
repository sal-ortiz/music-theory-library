
const Note = require('../lib/note');


describe('Note', () => {

  describe('an instance of Note', () => {

    describe('the name setter', () => {

      it('updates the given note\'s name component', () => {

        NOTE_SETTER_EXPECTATIONS.forEach((entry) => {
          let instance = new Note(entry.note);

          expect(instance.name).not.toEqual(entry.name);

          instance.name = entry.name;

          expect(instance.name).toEqual(entry.name);
        });

      });

    });

    describe('the accidental setter', () => {

      it('updates the given note\'s accidental component', () => {

        NOTE_SETTER_EXPECTATIONS.forEach((entry) => {
          let instance = new Note(entry.note);

          expect(instance.accidental).not.toEqual(entry.accidental);

          instance.accidental = entry.accidental;

          expect(instance.accidental).toEqual(entry.accidental);
        });

      });

    });

    describe('the octave setter', () => {

      it('updates the given note\'s octave component', () => {

        NOTE_SETTER_EXPECTATIONS.forEach((entry) => {
          let instance = new Note(entry.note);

          expect(instance.octave).not.toEqual(entry.octave);

          instance.octave = entry.octave;

          expect(instance.octave).toEqual(entry.octave);
        });

      });

    });

    describe('the transposeUp function', () => {

      it('transposes the note upward by the given semotones', () => {

        NOTE_TRANSPOSE_UP_EXPECTATIONS.forEach((entry) => {
          let instance = new Note(entry.input.note);

          instance.transposeUp(entry.input.semitones);

          expect(instance.toString()).toEqual(entry.output);
        });

      });

    });

    describe('the transposeDown function', () => {

      it('transposes the note downward by the given semotones', () => {

        NOTE_TRANSPOSE_DOWN_EXPECTATIONS.forEach((entry) => {
          let instance = new Note(entry.input.note);

          instance.transposeDown(entry.input.semitones);

          expect(instance.toString()).toEqual(entry.output);
        });

      });

    });

  });

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
