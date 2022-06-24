/**
 * Templates for the project list view, AKA the sidebar.
 *
 * The Project List uses a populator-type View which will iterate over its 
 * projects array and generate elements for each project.
 * 
 * There are also templates for adding new projects and editing existing projects. 
 * 
 * {@link projectListTemplates Visit Module}
 * @namespace viewTemplates.projectListTemplates
 * @property {Function} standard - Create HTML for standard project element {@link projectListTemplates.standard see here}
 * @property {Function} add - Create HTML for a form element for adding a new project {@link projectListTemplates.add see here}
 * @property {Function} edit - Create HTML for form element for editing an existing project {@link projectListTemplates.edit see here}
 */
const projectListTemplates = {

    /**
     * Project model object
     * @typedef {import('../model.js').Project} Project
     */

    /**
     * Generate HTML for the standard element that displays a project's information and contains relevant buttons and attributes
     * @memberof viewTemplates.projectListTemplates
     * @param {Project} project - Project model
     * @returns {string} Element Outer HTML
     */
    standard(project) {
        const elementHTML =
            `<div class="project"  data-child-id="${project.id}" >
            <p class="name">${project.title}</p>
            <div class="delete">x</div>
        </div>`
        return elementHTML
    },

    /**
     * Generate HTML for a form element for adding a new projects
     * @memberof viewTemplates.projectListTemplates
     * @returns {string} Element Outer HTML
     */
    add() {
        const elementHTML =
            `<form id="new-project"><input required placeholder="New Project" name="name"><form>`
        return elementHTML
    },

    /**
     * Generate HTML for a form element for editing an existing project
     * @memberof viewTemplates.projectListTemplates
     * @param {Project} projectObj Project model to pull data from and fill the form
     * @returns {string} Element Outer HTML
     */
    edit(projectObj) {
        const elementHTML =
            `<form class="edit-form"><input required value="${projectObj.title}" name="title"><form>`
        return elementHTML
    }
}

export default projectListTemplates
