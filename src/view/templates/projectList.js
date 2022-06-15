/***
 * Templates for the project list view, AKA the sidebar only need to display the 
 * project names. The Project List View will iterate over its projects and
 * populate the sidebar.
 */

// Generate HTML template literal using the project object
const projectTemplate = (project) => {
    const projectStatus = project.state.status ? 'done' : '' ;

    const elementHTML =
        `<div class="project ${projectStatus}" data-project-id="${project.id}" data-active-project="false">
            <p class="name">${project.title}</p>
            <div class="delete">x</div>
        </div>`
    return elementHTML
}

// Generate HTML for the 'New Project' input field
const addProjectTemplate = () => {
    const elementHTML =
        `<input placeholder="New Project" id="new-project">`
    return elementHTML
}

const projectListTemplates = {
    new: addProjectTemplate,
    standard: projectTemplate
}

export default projectListTemplates
