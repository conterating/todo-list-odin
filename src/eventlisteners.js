import ProjectScreenController from "./projectscreeen.js";
import TaskScreenController from "./taskscreen.js";
import Project from "./project.js";
import Todo from "./todo.js";

const taskDiv = document.querySelector(".tasks");
const taskAddButton = document.querySelector(".add-button");
const taskDialog = document.querySelector(".task-dialog");
const closeButton = document.querySelector(".close-modal");
const addProject = document.querySelector(".add-project-button");
const projectDialog = document.querySelector(".project-dialog");
const closeProject = document.querySelector(".close-project");
const submitProject = document.querySelector(".submit-project");
const projectForm = document.querySelector(".project-form");
const submitTask = document.querySelector(".submit-modal");
const taskForm = document.querySelector(".task-form");

function showTaskModal() {
  taskDialog.showModal();
}

function closeModal() {
  taskForm.reset();
  taskDialog.close();
}

function showProjectModal() {
  projectDialog.showModal();
}

function closeProjectModal() {
  projectDialog.close();
}

function getProjectInfo() {
  return document.querySelector("#project-title").value;
}

function createProject(title) {
  return new Project(title);
}

function renderProject(project) {
  ProjectScreenController.showProject(project);
}

function submitProjectController(event) {
  event.preventDefault();

  const projectInfo = getProjectInfo();

  if (!projectInfo) return;

  const newProject = createProject(projectInfo);
  renderProject(newProject);
  projectForm.reset();
  projectDialog.close();
}

function getTaskInfo() {
  return new Todo(
    document.querySelector("#title").value,
    document.querySelector("#description").value,
    document.querySelector("#due-date").value,
    document.querySelector('input[name="priority"]:checked').value,
  );
}

function renderTask(task) {
  TaskScreenController.showTodo(task);
}

function findProject() {
  const taskProject = document.querySelector("#task-project").value;

  const targetProj = Project.allInstances.find(
    (element) => element.name === taskProject,
  );

  return targetProj;
}

function addTaskToProject(task) {
  const taskProject = document.querySelector("#task-project").value;
  const targetProj = Project.allInstances.find(
    (element) => element.name === taskProject,
  );

  if (targetProj) {
    targetProj.addTodo(task);
  } else {
    const newProject = createProject(taskProject);
    newProject.addTodo(task);
    renderProject(newProject);
  }
}

function addTaskController(event) {
  event.preventDefault();

  const task = getTaskInfo();
  addTaskToProject(task);

  if (!task) return;

  console.log(task);
  renderTask(task);
  taskForm.reset();
  taskDialog.close();
}

function eventListeners() {
  taskAddButton.addEventListener("click", showTaskModal);
  closeButton.addEventListener("click", closeModal);
  submitTask.addEventListener("click", addTaskController);

  addProject.addEventListener("click", showProjectModal);
  closeProject.addEventListener("click", closeProjectModal);
  submitProject.addEventListener("click", submitProjectController);
}

export default eventListeners;
