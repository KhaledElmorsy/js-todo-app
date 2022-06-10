import populateTodo from "../dom-modules/populateTodo";
import projects from "../helper-modules/projectsInstance.js";

export default function removeTodo(todoID){
    
    projects.getProject(projectID).getTodo(todoID).state.disable();
    populateTodo(projects.getProject(projectID))
}
