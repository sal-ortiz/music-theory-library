
const Interval = require('../lib/interval');


describe('Interval', () => {

  describe('an instance of Interval', () => {

    describe('the quality setter', () => {

      test('it updates the given interval\'s quality component', () => {

        INTERVAL_SETTER_EXPECTATIONS.forEach((entry) => {
          let instance = new Interval(entry.name);

          instance.quality = entry.quality;

          expect(instance.quality).toEqual(entry.quality);
        });

      });

    });

    describe('the step setter', () => {

      test('it updates the given interval\'s steps component', () => {

        INTERVAL_SETTER_EXPECTATIONS.forEach((entry) => {
          let instance = new Interval(entry.name);

          instance.step = entry.step;

          expect(instance.step).toEqual(entry.step);
        });

      });

    });

    describe('the semitones setter', () => {

      test('it updates the given interval to reflect the new steps', () => {

        INTERVAL_SEMITONES_SETTER_EXPECTATIONS.forEach((entry) => {
          let instance = new Interval(entry.input.name);

          instance.semitones = entry.input.semitones;

          expect(instance.toString()).toEqual(entry.output.toString());
        });

      });

    });

    describe('the invert(...) function', () => {

      test('it inverts the interval', () => {

        INTERVAL_INVERT_EXPECTATIONS.forEach((entry) => {
          let instance = new Interval(entry.input);
          let expectation = entry.output;

          instance.invert();

          expect(instance.toString()).toEqual(expectation.toString());
        });

      });

    });

    describe('the fromRoot(...) function', () => {

      test('it returns the given treble from the given root', () => {

        INTERVAL_FROM_ROOT_EXPECTATIONS.forEach((entry) => {
          let instance = new Interval(entry.input.interval);
          let result = instance.fromRoot(entry.input.note);

          expect(result).toEqual(entry.output);
        });

      });

    });

  });

  describe('the fromSemitones(...) static function', () => {

    test('it returns the interval given the number of semitones', () => {

      INTERVAL_FROM_SEMITONES_EXPECTATIONS.forEach((entry) => {
        let result = Interval.fromSemitones(entry.input);

        expect(result).toEqual(entry.output);
      });

    });

  });

  describe('the parse(...) static function', () => {

    test('it parses the given interval string', () => {

      INTERVAL_PARSE_EXPECTATIONS.forEach((entry) => {
        let expectation = entry.output;
        let result = Interval.parse(entry.input);

        expect(result.quality).toEqual(expectation.quality);
        expect(result.step).toEqual(expectation.step);
        expect(result.semitones).toEqual(expectation.semitones);
      });

    });

  });

  describe('the countSemitones(...) static function', () => {

    test('it returns the number of semitones between the low and high notes', () => {

      COUNT_SEMITONES_EXPECTATIONS.forEach((entry) => {
        let input = entry.input;
        let result = Interval.countSemitones(input.bass, input.treble);

        expect(result).toEqual(entry.output);
      });

    });

  });

});
