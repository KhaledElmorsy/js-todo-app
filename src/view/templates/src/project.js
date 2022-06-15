const addProjectTemplate = () => {
    const elementHTML =
        `<input placeholder="New Project" id="new-project">`
    return elementHTML
}

const projectTemplate = (project) => {
    const projectStatus = project.state.status ? 'done' : '' ;

    const elementHTML =
        `<div class="project ${projectStatus}" data-project-id="${project.id}" data-active-project="false">
            <p class="name">${project.title}</p>
            <div class="delete">x</div>
        </div>`
    return elementHTML
}

const projectTemplates = {
    new: addProjectTemplate,
    standard: projectTemplate
}

export default projectTemplates
