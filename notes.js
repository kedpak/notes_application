console.log('starting notes.js');

const fs = require('fs');

// Read contents from json file
// Returns parsed json object
let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
}

// Writes list of objects into json file
let saveNotes = (arrayNotes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(arrayNotes));
}

// Adds title and body of note
let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  let duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

// lists all saved notes
let getAll = () => {
  let notes = fetchNotes();
  notes.map((obj) => {
    console.log('---Note---');
    console.log(`Title: ${obj.title}  Body: ${obj.body}`);
  })
}

// reads note based on title
let readNote = (title) => {
  let notes = fetchNotes();
  let note = notes.filter((note) => note.title === title);

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].title === title) {
      console.log(`Title: ${note[0].title} Body: ${note[0].body}`);
      return;
    }
  }
  console.log('Note not found!');
}

// removes note based on title
let removeNote = (title) => {
  let notes = fetchNotes();
  let newNotes = notes.filter((note) => note.title !== title);

  if (notes.length > newNotes.length) {
    console.log(`Deleting ${title}`);
    saveNotes(newNotes);
  } else {
    console.log('Note does not exist!');
  }
}

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};
