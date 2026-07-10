import { loadPage } from "./index.js";
import Project from "./project.js";

const projectContainer = document.querySelector(".projects");

projectContainer.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button) return;

  const tasksContainer = document.querySelector(".tasks");
  loadPage(button.textContent, tasksContainer);
});
