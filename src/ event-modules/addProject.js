import populateProjects from "../dom-modules/populateProjects.js";
import saveProjects from "../helper-modules/storage-modules/saveProjects.js";
import projects from "../helper-modules/projectsInstance.js";
import selectProject from "./selectProject.js";

export default function addProject(name){
    let newProject = projects.addProject(name);
    populateProjects();
    selectProject(newProject.id);
    saveProjects();
} 
