console.log('starting notes.js');

// Adds title and body of note
let addNote = (title, body) => {
  console.log('Adding note', title, body);
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
  console.log('Remove ', title)
}

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};
