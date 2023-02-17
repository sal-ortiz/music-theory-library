
const Scale = require('../lib/scale');


describe('Scale', () => {

  describe('the parse(...) static function', () => {

    describe('an instance of Scale', () => {

      describe('the type setter', () => {

        test('updates the given scale\' type component', () => {

          CHORD_SETTER_EXPECTATIONS.forEach((entry) => {
            let instance = new Scale(entry.input);
            let expectation = entry.output.type;

            instance.type = expectation;

            expect(instance.type).toEqual(expectation);
         });

        });

      });

      describe('the intervals setter', () => {

        test('updates the given scale\' intervals component', () => {

          CHORD_SETTER_EXPECTATIONS.forEach((entry) => {
            let instance = new Scale(entry.input);
            let expectation = entry.output.intervals;

            instance.intervals = expectation;

            expect(instance.intervals).toEqual(expectation);
          });

        });

      });

      describe('the fromRoot(...) function', () => {

        it('returns the given scale notes from the given root', () => {

          CHORD_FROM_ROOT_EXPECTATIONS.forEach((entry) => {
            let instance = new Scale(entry.input.name);
            let result = instance.fromRoot(entry.input.root);

            expect(result).toEqual(entry.output);
          });

        });

      });

    });

    describe('the parse(...) static function', () => {

      it('parses the given scale name', () => {

        CHORD_PARSE_EXPECTATIONS.forEach((entry) => {
          let expectation = entry.output;
          let result = Scale.parse(entry.input);

          expect(result.root).toEqual(expectation.root);
          expect(result.type).toEqual(expectation.type);
          expect(result.intervals).toEqual(expectation.intervals);
        });

      });

    });

  });

});
