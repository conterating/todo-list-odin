import ProjectScreenController from "./projectscreeen.js";
import Project from "./project.js";

const taskDiv = document.querySelector(".tasks");
const taskAddButton = document.querySelector(".add-button");
const taskDialog = document.querySelector(".task-dialog");
const closeButton = document.querySelector(".close-modal");
const addProject = document.querySelector(".sidebar-button");
const projectDialog = document.querySelector(".project-dialog");
const closeProject = document.querySelector(".close-project");
const submitProject = document.querySelector(".submit-project");
const projectForm = document.querySelector(".project-form");

function showTaskModal() {
  taskDialog.showModal();
}

function closeModal() {
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

function submitProjectController() {
  const projectInfo = getProjectInfo();

  if (!title) return;

  const newProject = createProject(projectInfo);
  renderProject(newProject);

  projectForm.reset();
}

function eventListeners() {
  taskAddButton.addEventListener("click", showTaskModal);
  closeButton.addEventListener("click", closeModal);

  addProject.addEventListener("click", showProjectModal);
  closeProject.addEventListener("click", closeProjectModal);
  submitProject.addEventListener("click", submitProjectController);
}

export default eventListeners;
