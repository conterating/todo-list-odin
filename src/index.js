import "./styles.css";
import Todo from "./todo.js";
import Project from "./project.js";
import eventListeners from "./eventlisteners.js";
import "./createdefault.js";
import { renderTask } from "./eventlisteners.js";
import ProjectScreenController from "./projectscreeen.js";
import "./pages.js";

const projectButtons = [...document.querySelector(".projects").children];
let editing = false;

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
    if (task.isComplete == false) {
      renderTask(task);
    }
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

function removeTask(project, task) {
  project.removeTodo(task);
}

function findProjectFromTask(projects, taskName) {
  const project = projects.find((project) => {
    return project.projectTodos.some((todo) => {
      return todo.title === taskName;
    });
  });
  return project;
}

function getTask(project, taskName) {
  return project.projectTodos.find((element) => {
    return element.title === taskName;
  });
}

function isEditing() {
  editing = true;
  return editing;
}

const taskContainer = document.querySelector(".tasks");
const taskDialog = document.querySelector(".task-dialog");

taskContainer.addEventListener("click", (event) => {
  if (event.target.matches("#complete")) {
    const taskName = event.target.dataset.taskId;

    const project = findProjectFromTask(Project.allInstances, taskName);
    console.log(project);
    const task = getTask(project, taskName);
    task.completeTask();
    console.log(task);

    loadPage(project.name, taskContainer);
  } else if (event.target.matches(".task")) {
    const taskName = event.target.dataset.taskIdentifier;
    const project = findProjectFromTask(Project.allInstances, taskName);
    const task = getTask(project, taskName);

    isEditing();
    taskDialog.showModal();

    document.querySelector("#title").value = task.title;
    document.querySelector("#description").value = task.description;

    let date = new Date(task.dueDate);
    date = date.toISOString().split("T")[0];
    document.querySelector("#due-date").value = date;

    // The entire line uses backticks ``, and the value uses standard ""
    const radioButton = document.querySelector(
      `input[name="priority"][value="${task.priority}"]`,
    );

    if (radioButton) {
      radioButton.checked = true;
    }

    //open modal and store current task values ot the form
  }
});

const submitTask = document.querySelector(".submit-modal");

submitTask.addEventListener("click", (event) => {
  event.preventDefault();
  /*
  if (editing == true) {
    //get current information
    const title = document.querySelector("#task-title").value;
    const project = findProjectFromTask(Project.allInstances, title);

    //open the modal
    //store the current values as the values
    //store new values
    //use editTask
    //update DOM
  }
  */
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
