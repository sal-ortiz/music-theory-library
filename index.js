
const Path = require('path');

const libPath = Path.join(__dirname, 'lib');
const Note = require(Path.join(libPath, 'note.js'));
const Interval = require(Path.join(libPath, 'interval.js'));
const Helpers = require(Path.join(libPath, 'helpers.js'));


noteOne = new Note('F');
noteTwo = new Note('C#');

let interval = new Interval('F5', 'C#5');

//console.log(noteOne);
//console.log(noteTwo);
//console.log(interval);

//let semitones = Interval.countSemitones('F4', 'C5');   // 8 semitones
//let semitones = Interval.countSemitones('C#4', 'F4'); // 6 semitones

console.log('D#4:', Note.transpose('C#4', 2));    // D#4
console.log('E4:', Note.transpose('C#4', 3));     // E4
console.log('F4::', Note.transpose('C#4', 4));    // F4
console.log('F#4:', Note.transpose('C#4', 5));    // F#4
console.log('G4:', Note.transpose('C#4', 6));     // G4
console.log('G#4:', Note.transpose('C#4', 7));    // G#4

console.log('A4:', Note.transpose('C#4', 8));     // A4
console.log('A#4:', Note.transpose('C#4', 9));    // A#4
console.log('B4:', Note.transpose('C#4', 10));    // B4
console.log('C5:', Note.transpose('C#4', 11));    // C5
console.log('C#5:', Note.transpose('C#4', 12));   // C#5
console.log('D5:', Note.transpose('C#4', 13));    // D5
console.log('D#5:', Note.transpose('C#4', 14));   // D#5
console.log('E5:', Note.transpose('C#4', 15));    // E5




console.log("");


console.log('B3:', Note.transpose('C#4', -2));    // B3
console.log('A#3:', Note.transpose('C#4', -3));   // A#3
console.log('A3:', Note.transpose('C#4', -4));    // A3
console.log('G#3:', Note.transpose('C#4', -5));   // G#3
console.log('G3:', Note.transpose('C#4', -6));    // G3
console.log('F#3:', Note.transpose('C#4', -7));   // F#3

console.log('F3:', Note.transpose('C#4', -8));    // F3
console.log('E3:', Note.transpose('C#4', -9));    // E3
console.log('D#3:', Note.transpose('C#4', -10));  // D#3
console.log('D3:', Note.transpose('C#4', -11));   // D3
console.log('C#3:', Note.transpose('C#4', -12));  // C#3
console.log('C3:', Note.transpose('C#4', -13));   // C3
console.log('B2:', Note.transpose('C#4', -14));   // B2
console.log('A#2:', Note.transpose('C#4', -15));  // A#2

console.log("");

