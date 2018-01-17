let userId = 0;
class User {
  constructor(name) {
    this.id = ++userId;
    this.name = name;
  }
}
