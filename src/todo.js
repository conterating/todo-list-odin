class Todo {
  #dueDate;
  #priority;
  #isComplete;

  constructor(title = "New Task", description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#isComplete = false;
  }
  //next step add getters starting with priority
  completeTask() {
    this.#isComplete = this.#isComplete ? false : true;
    console.log(this.#isComplete);
    return this.#isComplete;
  }

  changePriority(newPriority) {
    this.#priority = newPriority;
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

    if (value != "low" || value != "medium" || value != "high") {
      console.log("Not a valid priority level");
    } else {
      this.#priority = value;
    }
  }

  get isComplete() {
    return this.#isComplete;
  }
}

export default Todo;
