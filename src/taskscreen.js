import Todo from "./todo.js";

const tasksDiv = document.querySelector(".tasks");

class TodoScreenController {
  static showTodo(todo) {
    const taskButton = document.createElement("button");
    taskButton.classList.add("task");

    const taskTextDiv = document.createElement("div");
    taskTextDiv.classList.add("task-text");

    const taskTitle = document.createElement("h3");
    taskTitle.textContent = todo.title;

    const taskDesc = document.createElement("h5");
    taskDesc.textContent = todo.description;
    taskDesc.classList.add("task-desc");

    const otherTaskInfo = document.createElement("div");
    otherTaskInfo.classList.add("other-task-info");

    const dueDate = document.createElement("p");
    dueDate.textContent = todo.dueDate;

    const priority = document.createElement("p");
    priority.textContent = todo.priority;

    taskTextDiv.append(taskTitle, taskDesc);
    otherTaskInfo.append(dueDate, priority);

    taskButton.append(taskTextDiv, otherTaskInfo);
    tasksDiv.append(taskButton);
  }
}

export default TodoScreenController;
