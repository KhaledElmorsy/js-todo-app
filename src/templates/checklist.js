import { statusToClass } from "./helpers"

/**
* Each todo item has subtasks called checklist items which are stored in an array.
* Rendering cheklist items is handled by a Populator-type View which iterates over 
* the parent Todo model's checklist array and generates separate elements for each checklist item.
* <br><br>
*
* Checklist items can be created by the user through an 'Add Checklist Item' form element.
* 
* {@link checklistTemplates Visit Module}
* @namespace ChecklistTemplates
* @memberof Views.Templates

* @property {Function} standard - Create 'Standard Checklist Item' element HTML {@link checklistTemplates.standard see here}
* @property {Function} add - Create 'Add Checklist Item' form element HTML {@link checklistTemplates.add see here}
*/
const checklistTemplates = {

    /** Checklist Item Model 
     * @typedef {import("../model.js").ChecklistItem} ChecklistItem 
     */

    /** 
     * Generate HTML for a form that lets users add checklsit items
     * 
     * {@link checklistTemplates.add View}
     * @memberof Views.Templates.ChecklistTemplates
     * 
     * @returns {string} Element Outer HTML
     */
    add() {
        const elementHTML =
            `<form id="new-checklist-item"><input required placeholder="New task" name="descr"><form>`
        return elementHTML
    },

    /**
   * Generate HTML for the standard view element that displays a checklist item
   * 
   * {@link checklistTemplates.standard  View } 
   * @memberof Views.Templates.ChecklistTemplates
   * 
   * @param {ChecklistItem} item Checklist item model object
   * @returns {string} Element Outer HTML
   */
    standard(item) {
        const elementHTML =
            `<div class="checklist-item ${statusToClass(item, 'done')}" data-child-id="${item.id}">
                <input class="descr" value="${item.descr}">
                <div class="item-button-container">    
                    <div class="item-button done-toggle">✓</div>
                    <div class="item-button delete">x</div>
                </div>
            </div>`
        return elementHTML
    }
}

export default checklistTemplates
