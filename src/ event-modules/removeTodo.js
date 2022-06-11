import DOM from "../dom-modules/domModules.js";
import projects from "../helper-modules/projectsInstance.js";
import activeObject from "../helper-modules/activeObject";

export default function removeTodo(todoID){
    let projectID = activeObject.projectID
    projects.getProject(projectID).getTodo(todoID).state.disable();
    DOM.populateTodo(projects.getProject(projectID))
}
