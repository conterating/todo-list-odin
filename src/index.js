class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
  }
  //next step add getters starting with priority
  completeTask() {
    return !this.isComplete;
  }

  changePriority(newPriority) {
    this.priority = newPriority;
  }

  get dueDate() {
    return this.#dueDate;
  }

  set dueDate(value) {
    const datePattern =
      /\b(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/([12]\d{3})\b/;

    if (!datePattern.test(value)) {
      console.log("Not a valid date");
    } else {
      this.#dueDate = value;
    }
  }

  get priority() {
    return this.#priority;
  }

  set priority(value) {
    value = value.toLowerCase();

    if ((value != "low") | (value != "medium") | (value != "high")) {
      console.log("Not a valid priority level");
    } else {
      this.#priority = value;
    }
  }
}

class Project {
  constructor(name) {
    this.#name = name;
    this.#description = "";
    this.#projectTodos = [];
  }

  addTodo(todo) {
    this.projectTodos.push(todo);
  }

  removeTodo(todo) {
    const index = this.#projectTodos.indexOf(todo);

    if (index > -1) {
      this.projectTodos.splice(todo, 1);
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

firstTodo = new Todo("one", "two", "three", "four");
mainProject = newProject("most improtant stuff");

mainProject.addTodo(firstTodo);
