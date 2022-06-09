import makeEl from "../helper-modules/makeElement.js";
import drawCard from "./drawCard.js";

export default function pageLoad(projects) {
    console.log(projects);
    const projectsDOM = document.getElementById('projects')

    let activeProjects = projects.getActive()
    if (activeProjects.length) {
        for (let project of activeProjects) {
            projectsDOM.appendChild(makeEl('p', project.name, {
                'data-project-id': project.id,
                'data-status': project.state.status
            }))
        }

        const todoDOM = document.getElementsByTagName('main')[0];

        const defaultProject = activeProjects[0];

        for (let todo of defaultProject.todoList) {
            console.log(todo.state)
            if (todo.state.visibility) {
                
                todoDOM.appendChild(drawCard(todo.id, todo.title, todo.desc,
                    todo.startDate, todo.endDate, todo.checklist,
                    todo.state.status))

            }
        }
    }
}
