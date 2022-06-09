import makeEl from "../helper-modules/makeElement.js";
import populateTodo from "./populateTodo.js";
import convertJSON from "../helper-modules/convertJSON.js";
import populateProjects from "./populateProjects.js";
import projects from "../helper-modules/projectsInstance.js";

export default function pageLoad() {
    populateProjects();
    
    let activeProjects = projects.getActive()
    populateTodo(activeProjects[0]);
    
    return projects;
}
