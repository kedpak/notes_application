//File is for calling functions from notes file

console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes.js');

const command = process.argv[2];
console.log('Commmand: ', command);

if (command === 'add') {
  console.log('add the stuff');
} else if (command === 'list'){
  console.log('this is list');
} else if (command === 'read') {
  console.log('get note back');
} else if (command === 'remove') {
  console.log('removed note');
}
else {
  console.log('Command does not exist');
}
