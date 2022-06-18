/**
 * Returns a string based on the model's status that can be added to a view element's class list
 * @param {Object} model - Model object being checked
 * @param {string} htmlClass - string to be returned if the model's status is 'true'
 * @returns {string} - htmlClass parameter value if Todo's status is true, '' if false.
 */
function statusToClass(model, htmlClass) {
    return model.status ? htmlClass : '';
}
    
 // Checklist Item Functions
 /**
  * Filters child objects based on their visibility
  * @param {Array} list - Array of child objects in the parent model
  * @returns {Array} - Filtered array
  */
 function getActive(list) { return list.filter(item => item.visible)}

 export {statusToClass, getActive}
