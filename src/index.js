document.addEventListener('DOMContentLoaded', () => {
  console.log("The DOM content has loaded");
    fetch('http://localhost:3000/api/v1/notes')
    .then(res => res.json())
    .then(res => createNotes(res));

    let form = document.getElementById('postData')
    form.addEventListener('submit', newNote);

    // GRABS ALL NOTES FROM BACK END
    function createNotes(res) {
      res.forEach(function(n) {
        let note = new Note(n);
        displayNotes(note);
      })
    }

  function displayNotes(n) {
    let noteList = document.querySelector('.note-list');
    let p = document.createElement('p');
    p.innerHTML = n.title;
    noteList.appendChild(p);
    p.addEventListener('click', function(e) {
      spotlightNote(n);
    })
    form.reset();
  }

  function spotlightNote(n) {
    let noteSpotlight = document.querySelector('.note-spotlight');
    noteSpotlight.innerHTML = n.render();
    let deleteButton = document.getElementById(`${n.id}`)
    deleteButton.addEventListener("click", deleteNote.bind(n))
  }

  function newNote(event) {
    event.preventDefault();
    let newNoteTitle = document.getElementById('new-title').value;
    let newNoteBody = document.getElementById('new-body').value;

    fetch('http://localhost:3000/api/v1/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // what kind of data am i sending?
        'Accept': 'application/json' // what kind of data do i want back?
      },
      body: JSON.stringify({ //pass the data
        title: newNoteTitle,
        body: newNoteBody
      })
    }).then(res => res.json())
      .then(noteData => {
      const note = new Note(noteData)
        //RENDER SOMETHING
        // add a new task to the chosen list
        displayNotes(note);
        spotlightNote(note);
      })
  }



  function deleteNote(event) {
    event.preventDefault();

    fetch(`http://localhost:3000/api/v1/notes/${this.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json', // what kind of data am i sending?
        'Accept': 'application/json' // what kind of data do i want back?
      }
    })

  }
});
