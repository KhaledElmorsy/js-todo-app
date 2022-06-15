import todoTemplates from "./todo.js";
import projectTemplates from "./project.js";

/***
 * Here, templates are functions that optionally receive model objects and 
 * use them to fill and return template literals (Strings of HTML).
 * Template files contain different templates concerning one view type.
 * Open a file in /src to check them out.
 */
const templateFuncs = {
    todo: todoTemplates,
    project: projectTemplates
}

/***
 * Converts template literals into element objects. 
 * This isn't straightforward because you can't edit an element objects outer 
 * HTML if it's not in the document, so we use a temporary wrapper element.
 */
const convertElement = elementHTML => {
    const tempWrapper = document.createElement('div');
    tempWrapper.innerHTML = elementHTML;

    // To keep ouputs consistently element object, NOT HTML Collections:
    if (tempWrapper.childElementCount === 1) // Check if template element is already wrapped
        return tempWrapper.firstChild        // Return it if true, otherwise return temp wrapper
    return tempWrapper                       // This is a failsafe, not a feature. 
}

export default function templates(view, type) {
    return function (model) {
        const templateHTML = templateFuncs[view][type](model)
        return convertElement(templateHTML)
    }
}
/***
 * Example: To make a standard todo element factory that takes a model, our view 
 * needs to call templates('todo','standard')
 * So if: const todoTemplate = templates('todo','standard')
 * then the rendered can do: todoElement = todoTemplate(todoObj)
 */
