import { statusToClass } from './helpers';

/**
 * Template for the element that shows the Todo item in more detail.
 * Is rendered by the view when you click the todo item.
 *
 * {@link todoTemplates Visit Module}
 * @namespace TodoTemplates
 * @memberof Views.Templates
 *
 * @property {Function} standard - Create Outer HTML for the standard Todo View Element {@link todoTemplates.standard see here}
 */
const todoTemplates = {
  /**
   * Todo model object
   * @typedef {import ('../model.js').Todo} Todo
   */

  /**
   * Generate HTML for a modal element using a todo object model. The modal displays
   * properties of the Todo item in more detail.
   *
   * {@link todoTemplates.standard View}
   * @memberof Views.Templates.TodoTemplates
   *
   * @param {Todo} todoObj Todo object to fill modal values with
   * @returns {string} Element Outer HTML
   */
  standard(todoObj) {
    const elementHTML =
        `<div id="todo-background">
            <form id="todo-details" class="${statusToClass(todoObj,'done')}">
                <input required class="title" name="title" value="${todoObj.title}">
                <textarea class="descr" name="descr" placeholder="Description">${todoObj.descr}</textarea>
                <div class="checklist-container">
                    <h3>Tasks</h3>
                    <div id="checklist"></div>
                </div>
                <div class="dates">
                    <div class="date-container">
                        <p class="date-type">Start Date</p>
                        <input type="date" name="startDate" value="${todoObj.startDate || ''}">
                    </div>
                    <div class="date-container">
                        <p class="date-type">End Date</p>
                        <input type="date" name="endDate" value="${todoObj.endDate || ''}">
                    </div>
                </div>
                <div class="button-container">
                    <button class="save button" type="submit" name="save">Save</button>
                    <div class="done-toggle button">Done</div>
                    <div class="delete button">Delete</div>
                </div>
            </form>
        </div>`;
    return elementHTML;
  },
};

export default todoTemplates;
