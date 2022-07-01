/**
 * Functions to facilitate Template literal interpolation with model objects
 * @namespace Views.TemplateHelpers
 */

/**
 * Returns a string based on the model's status that can be added to a view element's class list
 * @memberof Views.TemplateHelpers
 * @param {Object} model - Model object being checked
 * @param {string} htmlClass - string to be returned if the model's status is 'true'
 * @returns {string} - HTML class name if Todo's status is true, blank ('') if false.
 */
function statusToClass(model, htmlClass) {
  return model.status ? htmlClass : '';
}
/** @typedef {import('../model.js').DataModel} DataModel */
/**
  * Filters child objects based on their visibility
  * @memberof Views.TemplateHelpers
  * @param {DataModel[]} list - Array of model objects
  * @returns {DataModel[]} - Filtered array of model objects
  */
function getVisible(list) { return list.filter((item) => item.visible); }

export { statusToClass, getVisible };
