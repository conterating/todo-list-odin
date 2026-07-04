class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isComplete = false;
  }

  completeTask() {
    return !todo.isComplete;
  }

  changePriority(newPriority) {
    task.priority = newPriority;
  }
}

class Project {
  constructor(name) {
    this.name = name;
    this.description = "";
    this.todos = [];
  }

  addTodo(project, todo) {
    project.todos.push(todo);
  }
}
