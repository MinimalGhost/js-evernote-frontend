
class Note {
  constructor(json) {
    this.id = json.id;
    this.userId = userId
    this.title = json.title;
    this.body = json.body;
    Note.all.push(this);
  }
  render() {
    return `
      <h2>Title: ${this.title}</h2>
      <p>Body: ${this.body}</p>
      <button id="note-${this.id}" class="delete-note">Delete Note</button>
    `
  }
}

Note.all = []
