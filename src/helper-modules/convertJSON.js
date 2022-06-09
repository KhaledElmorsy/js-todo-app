import projectList from "../storage-classes/projectList";

function importState(imported, object){
    if (!imported._state.visible) object.state.disable();
    if (imported._state.done) object.state.toggleStatus();
    object.state.priority = imported._state._priority;
}

export default function convertJSON(projectJSON) {
    const localSave = JSON.parse(projectJSON);
    const projects = new projectList();

    for (let project of localSave._projects) {
        projects.addProject(project._name, project._id);

        let currentProj = projects.getProject(project._id);
        importState(project, currentProj);

        if (project._todoList.length) {          
            for (let todo of project._todoList) {
                currentProj.addTodo(todo._name, todo._desc,todo._startDate, todo._endDate, todo._id);
                
                let currentTodo = currentProj.getTodo(todo._id);
                importState(todo, currentTodo);

                if (todo._checklist.list.length) {
                    for (let checklistItem of todo._checklist.list) {
                        currentTodo.checklist.addItem(checklistItem._desc, checklistItem._id);
                        importState(checklistItem, currentTodo.checklist.getItem(checklistItem._id));
                    }
                }
            }
        }
    }
    return projects
}
