
const Interval = require('../lib/interval');


describe('Interval', () => {

  describe('an instance of', () => {
    let instance;

    describe('the invert(...) function', () => {

      test('it inverts the interval', () => {

        INTERVAL_INVERT_EXPECTATIONS.forEach((entry) => {
          let instance = new Interval(...entry.input);
          let expectation = entry.output;

          instance.invert();

          expect(instance.quality).toEqual(expectation.quality);
          expect(instance.steps).toEqual(expectation.steps);

        });






      });

    });

  });

  describe('the parse(...) static function', () => {

    test('it parses the given interval string', () => {

      INTERVAL_PARSE_EXPECTATIONS.forEach((entry) => {
        let expectation = entry.output;
        let result = Interval.parse(entry.input);

        expect(result.quality).toEqual(expectation.quality);
        expect(result.steps).toEqual(expectation.steps);
      });

    });

  });

  describe('the countSemitones(...) static function', () => {

    test('it returns the number of semitones between the low and high notes', () => {

      COUNT_SEMITONES_EXPECTATIONS.forEach((entry) => {
        let input = entry.input;
        let result = Interval.countSemitones(input.low, input.high);

        expect(result).toEqual(entry.output);
      });

    });

  });

});
