
const Base = require('../lib/base');


describe('Base', () => {
  // test stuff

  describe('the parseNote(...) static function', () => {

    test('it parses the given note string', () => {

      NOTE_PARSE_EXPECTATIONS.forEach((entry) => {
        let expectation = entry.output;
        let result = Base.parseNote(entry.input);

        expect(result.name).toEqual(expectation.name);
        expect(result.accidental).toEqual(expectation.accidental);
        expect(result.octave).toEqual(expectation.octave);
      });

    });

  });

  describe('the parseInterval(...) static function', () => {

    test('it parses the given interval string', () => {

      INTERVAL_PARSE_EXPECTATIONS.forEach((entry) => {
        let expectation = entry.output;
        let result = Base.parseInterval(entry.input);

        expect(result.quality).toEqual(expectation.quality);
        expect(result.steps).toEqual(expectation.steps);
      });

    });

  });

  describe('the transpose(...) static function', () => {

    test('it transposes the given note upward by the given number of steps', () => {

      TRANSPOSE_UP_EXPECTATIONS.forEach((entry) => {
        let input = entry.input;
        let result = Base.transpose(input.note, input.semitones);

        expect(result).toEqual(entry.output);
      });

    });

    test('it transposes the given note downward by the given number of steps', () => {

      TRANSPOSE_DOWN_EXPECTATIONS.forEach((entry) => {
        let input = entry.input;
        let result = Base.transpose(input.note, input.semitones);

        expect(result).toEqual(entry.output);
      });

    });

  });

  describe('the countSemitones(...) static function', () => {

    test('it returns the number of semitones between the low and high notes', () => {

      COUNT_SEMITONES_EXPECTATIONS.forEach((entry) => {
        let input = entry.input;
        let result = Base.countSemitones(input.low, input.high);

        expect(result).toEqual(entry.output);
      });

    });

  });

});
