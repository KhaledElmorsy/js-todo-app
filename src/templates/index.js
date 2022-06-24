import todoTemplates from "./todo.js";
import projectTemplates from "./project.js";
import checklistTemplates from "./checklist.js";
import projectListTemplates from "./projectList.js";

/***
 * In this project, templates are functions that optionally receive model 
 * objects and use them to fill and return template literals (Strings of HTML).
 * Template files contain different templates relaated to a single view.
 * Open one and check them out (project.js is more intense)
 */


/**
 * Converts template literals into HTML element objects.
 * 
 * Note: This isn't straightforward because you can't edit an element objects outer 
 * HTML if it's not in the document, so a temporary wrapper element is used.
 * @param {string} elementHTML - The outer HTML of the element being created
 * @returns {Element} - Element object 
 */
const convertElement = elementHTML => {
    const tempWrapper = document.createElement('div');
    tempWrapper.innerHTML = elementHTML;
    // To consistently keep the output as a single element object, NOT HTML Collections:
    if (tempWrapper.childElementCount === 1) // Check if template element is already wrapped
        return tempWrapper.firstChild        // Return it if true, otherwise return temp wrapper
    return tempWrapper                       // This is a failsafe, not a feature. 
}

/** 
 * @callback
 * 
 */

/** 
 * Consilidate template functions in an object to enable the command pattern below 
 */
const viewTemplateModules = {
    Todo: todoTemplates,
    Project: projectTemplates,
    Checklist: checklistTemplates,
    ProjectList: projectListTemplates
}

/**
 * Takes the view and view-element types as inputs and returns a factory function that 
 * accepts a model object and returns an HTML elements. 
 * 
 * The returned function calls the appropriate template function by creating a 
 * reference to members of nested objects, similar to a command pattern.
 * @param {string} view - The template module relevant to the View object making the call
 * @param {string} type - Each module contains mulitple functions that can generate different
 * template literals (i.e. standard view element, add form, edit form). This input specifices
 * which function to call (i.e. standard, edit, add)
 * @returns {Function} - Function that accepts a model and returns an Element object
 */
export default function templates(view, type) {
    /**
     * Creates and returns an HTML element using the template specificied when this function was created.
     * Optionally using a model object.
     * @param {Object} model - (Optional) Model object used to populate the element's HTML
     * @returns {Element} - HTML element
     */
    return function (model = null) {
        const templateHTML = viewTemplateModules[view][type](model)
        return convertElement(templateHTML)
    }
}
