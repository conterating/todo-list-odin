import "./styles.css";
import Todo from "./todo.js";
import Project from "./project.js";
import eventListeners from "./eventlisteners.js";
import "./createdefault.js";
import { renderTask } from "./eventlisteners.js";
import ProjectScreenController from "./projectscreeen.js";
import "./pages.js";

const projectButtons = [...document.querySelector(".projects").children];

eventListeners();

function addTaskToProject(task, project) {
  project.addTodo(task);
}

export function getProjectPage(projects, projectName) {
  return (
    projects.find(
      (element) => element.name.toLowerCase() == projectName.toLowerCase(),
    ) || new Project(projectName)
  );
}

function renderProjectPage(container, tasks) {
  if (!container) return;

  container.innerHTML = "";

  for (const task of tasks) {
    renderTask(task);
  }
}

export function loadPage(projectName, container) {
  const page = getProjectPage(Project.allInstances, projectName);
  renderProjectPage(container, page.projectTodos);
}

function getTaskInfo() {
  return new Todo(
    document.querySelector("#title").value,
    document.querySelector("#description").value,
    document.querySelector("#due-date").value,
    document.querySelector('input[name="priority"]:checked').value,
  );
}

function getProjectName() {
  return document.querySelector("#task-project").value;
}

function createProject(title) {
  return new Project(title);
}

function findProjectButton(project, container) {
  const containerButtons = [...container.children];
  const projButton = containerButtons.find(
    (element) => element.textContent === project.name,
  );

  if (projButton) {
    return true;
  } else {
    return false;
  }
}

function renderProject(project) {
  ProjectScreenController.showProject(project);
}

function createProjectSidebar(buttonExists, project) {
  if (buttonExists) {
    return;
  } else {
    renderProject(project);
  }
}

const submitTask = document.querySelector(".submit-modal");

submitTask.addEventListener("click", (event) => {
  event.preventDefault();
  const taskForm = document.querySelector(".task-form");
  const taskDialog = document.querySelector(".task-dialog");

  const task = getTaskInfo();

  const project = getProjectPage(Project.allInstances, getProjectName());
  const projContainer = document.querySelector(".projects");

  const buttonExists = findProjectButton(project, projContainer);
  createProjectSidebar(buttonExists, project); //in case proj hasnt been created

  addTaskToProject(task, project);

  const tasksContainer = document.querySelector(".tasks");
  loadPage(project.name, tasksContainer);

  taskDialog.close();
  taskForm.reset();
});
