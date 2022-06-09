import DOM from "./domModules.js";
import projects from "../helper-modules/projectsInstance.js";

export default function pageLoad() {
    DOM.populateProjects();
    
    let activeProjects = projects.getActive()
    DOM.populateTodo(activeProjects[0]);
    
    return projects;
}
