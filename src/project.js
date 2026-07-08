class Project {
  static allInstances = [];

  constructor(name) {
    this.name = name;
    this.description = "";
    this.projectTodos = [];

    Project.allInstances.push(this);
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
