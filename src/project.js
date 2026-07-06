class Project {
  #name;
  #description;
  #projectTodos;

  constructor(name) {
    this.#name = name;
    this.#description = "";
    this.#projectTodos = [];
  }

  addTodo(todo) {
    this.#projectTodos.push(todo);
  }

  removeTodo(todo) {
    const index = this.#projectTodos.indexOf(todo);

    if (index > -1) {
      this.#projectTodos.splice(index, 1);
    }
  }

  addDescription(desc) {
    this.#description = desc;
  }

  get name() {
    return this.#name;
  }

  get description() {
    return this.#description;
  }

  get projectTodos() {
    return this.#projectTodos;
  }
}
