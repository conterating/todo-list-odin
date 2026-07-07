import "./styles.css";

const taskDiv = document.querySelector(".tasks");
const taskAddButton = document.querySelector(".add-button");
const taskDialog = document.querySelector(".task-dialog");
const closeButton = document.querySelector("close-modal");

function addTaskScreen(task) {
  const taskButton = document.createElement("button");
  taskButton.textContent = task.title;
}

function showTaskModal() {
  taskDialog.showModal();
}

function closeModal() {
  taskDialog.close();
}

taskAddButton.addEventListener("click", showTaskModal);
closeButton.addEventListener("click", closeModal);
