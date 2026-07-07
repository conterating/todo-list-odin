import Project from "./project.js";

const projectsDiv = document.querySelector(".projects");

class ProjectScreenController {
  static showProject(project) {
    const projectButton = document.createElement("button");
    projectButton.textContent = project.name;
    projectButton.classList.add("sidebar-button");

    projectsDiv.append(projectButton);
  }
}

export default ProjectScreenController;
