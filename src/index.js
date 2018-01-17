document.addEventListener('DOMContentLoaded', () => {
  console.log("The DOM content has loaded");
    fetch('http://localhost:3000/api/v1/notes')
    .then(res => res.json())
    .then(res => createNotes(res));

    // GRABS ALL NOTES FROM BACK END
    function createNotes(res) {
      res.forEach(function(n) {
        let note = new Note(n);
        displayNotes(note);
      })
    }

  function displayNotes(n) {
    let noteList = document.querySelector('.note-list');
    let li = document.createElement('li');
    li.innerHTML = n.title;
    noteList.appendChild(li);
    li.addEventListener('click', function(e) {
      spotlightNote(n);
    })
  }

  function spotlightNote(n) {
    let noteSpotlight = document.querySelector('.note-spotlight');
    noteSpotlight.innerHTML = n.render();
  }
});








// function renderNotes() {
//   let data = fetch('http://localhost:3000/api/v1/notes')
//   .then(res => res.json())
//   .then(json => { return json.forEach(function(element) {
//     let note = new Note(element["title"], element["body"], element["user"])
//     // note.addEventListener('click', displaySpotlight);
//     let newDiv = document.createElement('div')
//
//     newDiv.innerHTML = `<li>${note.title}: ${note.body}</li>`;
//     let noteIndex = document.querySelector('.note-index');
//     noteIndex.appendChild(newDiv);
//     newDiv.addEventListener('click', displaySpotlight)
//   })
// })
// }
// renderNotes();
//


// post request using fetch & headers
/*

class Task {
  constructor({id, listId, description, priority}) {
  this.id = id
  this.listId = listId
  this.description = description
  this.priority = priority
}
}


fetch('http://localhost:3000/tasks', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // what kind of data am i sending?
    'Accept': 'application/json' // what kind of data do i want back?
  },
  body: JSON.stringify({ //pass the data
    description: newTaskDescription,
    priority: newTaskPriority,
    listId: newTaskListId
  })
}).then(res => res.json())
  .then(taskData => {
  const task = new Task(taskData)

    //RENDER SOMETHING
    // add a new task to the chosen list
    document.getElementByID(newTaskListId)
      .querySelector('ul')

  })
*/
