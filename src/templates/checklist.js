import { statusToClass } from "./helpers"
/**
 * Each todo item has a checklist that can be populated with items that
 * have their own properties and states. Checklists are rendered similar to the 
 * project list where strings are appended one after the other with an empty
 * input in the end. The only functional difference is that each element is also
 * an input to give a sense of live editing
 * 
 */

 const checklistItemTemplate = (item) => {

    const elementHTML =
        `<div class="checklist-item ${statusToClass(item,'done')}" data-child-id="${item.id}">
            <input class="descr" value="${item.descr}">
            <div class="done-toggle">✓</div>
            <div class="delete">x</div>
        </div>`
    return elementHTML
}

// Generate HTML for the 'New Project' input field
const addchecklistItem = () => {
    const elementHTML =
        `<form id="new-checklist-item"><input required placeholder="New task" name="descr"><form>`
    return elementHTML
}


const checklistTemplates = {
    add: addchecklistItem,
    standard: checklistItemTemplate,
}

export default checklistTemplates
