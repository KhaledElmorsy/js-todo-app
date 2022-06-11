import populateTodo from "../dom-modules/populateTodo";
import projects from "../helper-modules/projectsInstance.js";
import activeObject from "../helper-modules/activeObject";

export default function removeTodo(todoID){
    let projectID = activeObject.projectID
    console.log(projectID)
    projects.getProject(projectID).getTodo(todoID).state.disable();
    populateTodo(projects.getProject(projectID))
}
