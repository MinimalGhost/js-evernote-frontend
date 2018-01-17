class Note {
  constructor(json) {
    this.id = userId;
    this.title = json.title;
    this.body = json.body;
    Note.all.push(this);
  }
  render() {
    return `
      <h2>Title: ${this.title}</h2>
      <p>Body: ${this.body}</p>
    `
  }
}

Note.all = []
