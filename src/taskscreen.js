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

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "complete";
    checkbox.name = "complete";
    checkbox.value = "complete";

    const taskContainer = document.createElement("div");

    taskTextDiv.append(taskTitle, taskDesc);
    otherTaskInfo.append(dueDate, priority);

    taskButton.append(taskTextDiv, otherTaskInfo);
    taskContainer.append(checkbox, taskButton);
    taskContainer.classList.add("task-checkbox-container");

    tasksDiv.append(taskContainer);
  }
}

export default TodoScreenController;
