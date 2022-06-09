import populateProjects from "../dom-modules/populateProjects.js";
import saveProjects from "../helper-modules/saveProjects.js";
import projects from "../helper-modules/projectsInstance.js";

export default function addProject(name){
    projects.addProject(name);
    populateProjects();
    saveProjects();
} 
