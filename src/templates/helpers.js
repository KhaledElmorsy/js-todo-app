/**
 * @namespace templateHelpers
 * @property {Function} statusToClass Return a string based on a model object's status flag
 * @property {Function} getActive Return
 */

/**
 * Returns a string based on the model's status that can be added to a view element's class list
 * @memberof templateHelpers
 * @param {Object} model - Model object being checked
 * @param {string} htmlClass - string to be returned if the model's status is 'true'
 * @returns {string} - HTML class name if Todo's status is true, blank ('') if false.
 */
function statusToClass(model, htmlClass) {
    return model.status ? htmlClass : '';
}
 /**@typedef {import('../model.js').DataModel} DataModel*/   
 /**
  * Filters child objects based on their visibility
  * @memberof templateHelpers
  * @param {Array} list - Array of child objects in the parent model
  * @returns {DataModel[]} - Array of data model subclass objects (Project, Todo, Checklist Item)
  */
 function getVisible(list) { return list.filter(item => item.visible)}

 export {statusToClass, getVisible}
