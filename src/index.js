document.addEventListener('DOMContentLoaded', () => {
  console.log("The DOM content has loaded");


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

    function renderNotes() {
      let data = fetch('http://localhost:3000/api/v1/notes')
      .then(res => res.json())
      .then(json => { return json.forEach(function(element) {
        let note = new Note(element["title"], element["body"], element["user"])
        let newDiv = document.createElement('div')

        newDiv.innerHTML = `<li>${note.title}: ${note.body}</li>`;
        let noteIndex = document.querySelector('.note-index');
        noteIndex.appendChild(newDiv);
      })
    })
  }
  renderNotes();

});
