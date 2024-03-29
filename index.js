
const Path = require('path');

const libPath = Path.join(__dirname, 'lib');
//const Note = require(Path.join(libPath, 'note.js'));
//const Interval = require(Path.join(libPath, 'interval.js'));
//const Helpers = require(Path.join(libPath, 'helpers.js'));

module.exports = {
  Chord: require(Path.join(libPath, 'chord.js')),
  Note: require(Path.join(libPath, 'note.js')),
  Interval: require(Path.join(libPath, 'interval.js')),
  Scale: require(Path.join(libPath, 'scale.js')),
  //Helpers: require(Path.join(libPath, 'helpers.js')),
};
