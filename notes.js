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
  console.log('Getting all notes')
}

// reads note based on title
let readNote = (title) => {
  console.log('Read ', title);
}

// removes note based on title
let removeNote = (title) => {
  let notes = fetchNotes();
  console.log(JSON.stringify(fetchNotes()));

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
