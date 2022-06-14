import DOM from "../dom-modules/domModules.js";
import projects from "../helper-modules/projectsInstance.js";
import activeObject from "../helper-modules/activeObject";
import saveProjects from "../helper-modules/storage-modules/saveProjects.js";

const updateTodo = {
    update(todoID, action) {
        let methods = ['enable', 'disable', 'toggleStatus']
        if (methods.includes(action)) {
            let projectID = activeObject.projectID

            projects.getProject(projectID).getTodo(todoID).state[action]();
            DOM.populateTodo(projectID)
            saveProjects()
        }
    }
}
export default function removeTodo(todoID) {
    updateTodo.update(todoID, 'disable')
}
