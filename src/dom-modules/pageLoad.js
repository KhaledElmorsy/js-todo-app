import DOM from "./domModules.js";
import projects from "../helper-modules/projectsInstance.js";
import selectProject from "../ event-modules/selectProject.js";

export default function pageLoad() {
    DOM.populateProjects();
    
    let activeProjects = projects.getActive()
    if (activeProjects.length) selectProject(activeProjects[0].id)
}
