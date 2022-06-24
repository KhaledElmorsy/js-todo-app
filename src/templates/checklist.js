import { statusToClass } from "./helpers"

/** Checklist Item Model 
 * @typedef {import("../model.js").ChecklistItem} ChecklistItem 
 */

/**
 * Generate HTML for an element that displays a checklist item
 * @param {ChecklistItem} item Checklist item model object
 * @returns {string} Element Outer HTML
 * {@link checklistItemTemplate View}
 */
 const checklistItemTemplate = (item) => {

    const elementHTML =
        `<div class="checklist-item ${statusToClass(item,'done')}" data-child-id="${item.id}">
            <input class="descr" value="${item.descr}">
            <div class="item-button-container">    
                <div class="item-button done-toggle">✓</div>
                <div class="item-button delete">x</div>
            </div>
        </div>`
    return elementHTML
}

/** 
 * Generate HTML for a form that lets users add checklsit items
 * @returns {string} Element Outer HTML
 * {@link addchecklistItem View}
 */
const addchecklistItem = () => {
    const elementHTML =
        `<form id="new-checklist-item"><input required placeholder="New task" name="descr"><form>`
    return elementHTML
}

/**
 * Each todo item has subtasks called checklist items which are stored in an array.
 * Rendering cheklist items is handled by a Populator-type View which iterates over 
 * the parent Todo model's array and generates separate elements for each checklist item.
 * 
 * Checklist items can be created by the user through an 'add chhecklist item' form element.
 * 
 * {@link checklistTemplates Visit Module}
 * @property {Function} add - Create 'Add Checklist' form element HTML {@link addchecklistItem see here}
 * @property {Function} standard - Create 'Standard Checklist Item' element HTML {@link checklistItemTemplate see here}
 */
const checklistTemplates = {
    /** Generate 'add checklist item' element HTML */
    add: addchecklistItem,

    /** Generate standard checklist item element HTML */
    standard: checklistItemTemplate,
}

export default checklistTemplates
