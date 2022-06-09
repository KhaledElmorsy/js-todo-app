import makeEl from "../helper-modules/makeElement.js";
import drawCard from "./drawCard.js";
import populateTodo from "./populateTodo.js";

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
       populateTodo(activeProjects[0])
    }
}
