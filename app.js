//File is for calling functions from notes file

console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');

const argv = yargs.argv;
const command = process.argv[2];


console.log('Commmand: ', command);
console.log('Process: ', process.argv);
console.log('yargs Prcoess: ', argv)


if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (note !== undefined) {
    console.log(note);
  }
  else {
    console.log('This note is already in use');
  }
} else if (command === 'list'){
  notes.getAll();
} else if (command === 'read') {
  notes.readNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
}
else {
  console.log('Command does not exist');
}
