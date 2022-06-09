import makeEl from "../helper-modules/makeElement.js"
export default function populateProjects(projects) {
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
    return activeProjects;
}
