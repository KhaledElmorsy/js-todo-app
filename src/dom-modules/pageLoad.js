import makeEl from "../helper-modules/makeElement.js";
import populateTodo from "./populateTodo.js";
import convertJSON from "../helper-modules/convertJSON.js";
import populateProjects from "./populateProjects.js";

export default function pageLoad() {
    const projects = (!localStorage.projects) ? new projectList() : convertJSON(localStorage.projects);

    let activeProjects = populateProjects(projects);
    populateTodo(activeProjects[0]);
    
    return projects;
}
