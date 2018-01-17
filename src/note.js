let noteId = 0
class Note {
  constructor(json) {
    this.id = ++noteId;
    this.userId = userId
    this.title = json.title;
    this.body = json.body;
    Note.all.push(this);
  }
  render() {
    return `
      <h2>Title: ${this.title}</h2>
      <p>Body: ${this.body}</p>
      <button id="${this.id}" class="delete-note">Delete Note</button>
    `
  }
}

Note.all = []
