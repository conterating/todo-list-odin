class Project {
  constructor(name) {
    this.name = name;
    this.description = "";
    this.projectTodos = [];
  }

  addTodo(todo) {
    this.projectTodos.push(todo);
  }

  removeTodo(todo) {
    const index = this.projectTodos.indexOf(todo);

    if (index > -1) {
      this.projectTodos.splice(index, 1);
    }
  }

  addDescription(desc) {
    this.description = desc;
  }
}

export default Project;
