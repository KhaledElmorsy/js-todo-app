/***
 * Templates for the project list view, AKA the sidebar only need to display the 
 * project names. The Project List View will iterate over its projects and
 * populate the sidebar.
 */

// Generate HTML template literal using the project object
const projectTemplate = (project) => {
    const projectStatus = project.status ? 'done' : '' ;

    const elementHTML =
        `<div class="project ${projectStatus}" data-active-project="false">
            <p class="name" data-child-id="${project.id}">${project.title}</p>
            <div class="delete" data-child-id="${project.id}">x</div>
        </div>`
    return elementHTML
}

// Generate HTML for the 'New Project' input field
const addProjectTemplate = () => {
    const elementHTML =
        `<form id="new-project"><input required placeholder="New Project" name="name"><form>`
    return elementHTML
}

const editProjectForm = (projectObj) => {
    const elementHTML =
    `<form class="edit-form"><input required value="${projectObj.title}" name="title"><form>`
    return elementHTML
}

const projectListTemplates = {
    add: addProjectTemplate,
    standard: projectTemplate,
    edit: editProjectForm
}

export default projectListTemplates
