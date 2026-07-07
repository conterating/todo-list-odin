import ProjectScreenController from "./projectscreeen.js";
import Project from "./project.js";

function createDefault() {
  const defaultProject = new Project("Default");
  ProjectScreenController.showProject(defaultProject);
}

createDefault();
