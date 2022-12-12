
const Chord = require('../lib/chord');


describe('Note', () => {

  describe('the parse(...) static function', () => {

    describe('an instance of', () => {

      test('it has an intervals property', () => {

        CHORD_INTERVALS_EXPECTATIONS.forEach((entry) => {
          let instance = new Chord(entry.input);

          expect(instance.intervals).toEqual(entry.output);
        });

      });



    });

  });

});
