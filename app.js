console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

let user = os.userInfo();

fs.appendFile('greeting.txt', `Hello ${user.username}!`, function(err) {
        if (err) {
            console.log('cannot write file');
        }
});
