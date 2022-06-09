import makeEl from "../helper-modules/makeElement.js"
import projects from "../helper-modules/projectsInstance.js"

export default function populateProjects() {
    const projectsDOM = document.getElementById('projects')

    let activeProjects = projects.getActive()
    if (activeProjects.length) {
        for (let project of activeProjects) {
            projectsDOM.appendChild(makeEl('p', project.name, {
                'data-project-id': project.id,
                'data-status': project.state.status
            }))
        }
    }
}
