
const Chord = require('../lib/chord');


describe('Chord', () => {

  describe('the parse(...) static function', () => {

    describe('an instance of Chord', () => {

      describe('the type setter', () => {

        test('updates the given chord\' type component', () => {

          CHORD_SETTER_EXPECTATIONS.forEach((entry) => {
            let instance = new Chord(entry.input);
            let expectation = entry.output.type;

            instance.type = expectation;

            expect(instance.type).toEqual(expectation);
         });

        });

      });

      describe('the intervals setter', () => {

        test('updates the given chord\' intervals component', () => {

          CHORD_SETTER_EXPECTATIONS.forEach((entry) => {
            let instance = new Chord(entry.input);
            let expectation = entry.output.intervals;

            instance.intervals = expectation;

            expect(instance.intervals).toEqual(expectation);
          });

        });

      });

      describe('the fromRoot(...) function', () => {

        it('returns the given chord notes from the given root', () => {

          CHORD_FROM_ROOT_EXPECTATIONS.forEach((entry) => {
            let instance = new Chord(entry.input.name);
            let result = instance.fromRoot(entry.input.root);

            expect(result).toEqual(entry.output);
          });

        });

      });

    });

    describe('the parse(...) static function', () => {

      it('parses the given chord name', () => {

        CHORD_PARSE_EXPECTATIONS.forEach((entry) => {
          let expectation = entry.output;
          let result = Chord.parse(entry.input);

          expect(result.root).toEqual(expectation.root);
          expect(result.type).toEqual(expectation.type);
          expect(result.intervals).toEqual(expectation.intervals);
        });

      });

    });

  });

});
