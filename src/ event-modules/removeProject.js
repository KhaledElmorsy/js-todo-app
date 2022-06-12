import DOM from "../dom-modules/domModules";
import populateProjects from "../dom-modules/populateProjects";
import activeObject from "../helper-modules/activeObject";
import projects from "../helper-modules/projectsInstance";
import saveProjects from "../helper-modules/storage-modules/saveProjects";

export default function removeProject(projectID){
    projects.getProject(projectID).state.disable();
    saveProjects();
    if (projectID === activeObject.projectID) DOM.pageLoad();
    else populateProjects()
}
