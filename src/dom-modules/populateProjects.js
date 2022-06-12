import setProjectEvents from "../ event-modules/event-setters/setProjectEvents.js";
import makeEl from "../helper-modules/makeElement.js"
import projects from "../helper-modules/projectsInstance.js"
import elements from "../dom-elements/dom-elements.js";

const projectsContainer = elements.containers.projectsContainer

export default function populateProjects() {
    projectsContainer.innerHTML = "";

    // Populate list with active projects (Projects with visibility = true)
    let activeProjects = projects.getActive()
    if (activeProjects.length) {
        for (let project of activeProjects) {
            let deleteProj = makeEl('div','x',{class:'delete'})
            let projectName = makeEl('p', project.name, {class:'name'})
            let projectDiv = makeEl('div',null, {
                class: 'project',
                'data-project-id': project.id,
                'data-status': project.state.status
            })
            projectDiv.append(projectName, deleteProj)
           projectsContainer.appendChild(projectDiv)
        }
    }
    // Append New Project input in the end
    projectsContainer.appendChild(makeEl('input',null,{
        placeholder:'New Project',
        id: 'new-project-field'
    }))
    
    setProjectEvents() // Add listeners to the project names and input field
}
