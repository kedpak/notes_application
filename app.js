console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

let user = os.userInfo();

let result = notes.addNote;
console.log(result());

/*
fs.appendFile('greeting.txt', `Hello ${user.username}! You are ${notes.age} years old!`, function(err) {
        if (err) {
            console.log('cannot write file');
        }
});
*/
