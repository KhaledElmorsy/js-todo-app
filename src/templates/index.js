/* eslint-disable max-len */
import todoTemplates from './todo';
import projectTemplates from './project';
import checklistTemplates from './checklist';
import projectListTemplates from './projectList';
/** @typedef {import("../model.js").DataModel} DataModel */

/**
 * In this project, templates are functions that optionally receive model 
 * objects and use them to interpolate template literals and return strings of HTML.
 * Template modules contain templates related to a specific view.
 * Open one and check them out (project.js is intense)
 */

/**
 * Converts template literals into HTML element objects.
 * <br><br>
 *
 * Note: This isn't straightforward because you can't edit an element objects outer 
 * HTML if it's not in the document, so a temporary wrapper element is used.
 *
 * @memberof Views.Templates
 *
 * @param {string} elementHTML - The outer HTML of the element being created
 * @returns {Element} - Element object
 */
const convertElement = (elementHTML) => {
  const tempWrapper = document.createElement('div');
  tempWrapper.innerHTML = elementHTML;

  // Consistently keep the output as a single element object, NOT HTML Collections or nulls
  if (tempWrapper.childElementCount !== 1) {
    return tempWrapper; // Returning the wrapper is a failsafe, not a feature.
  }

  return tempWrapper.firstChild;
};

/**
 * Consilidate template modules into a dictionary to allow view constructors to reference them with the {@link templates command pattern} below.
 *
 * @namespace Views.Templates
 *
 * @property {Object} Todo - Todo View Templates {@link todoTemplates see here}
 * @property {Object} Project - Project View Templates {@link projectTemplates see here}
 * @property {Object} Checklist - Checklist View Templates {@link checklistTemplates see here}
 * @property {Object} ProjectList - Project List View Templates {@link projectListTemplates see here}
 */
const viewTemplates = {
  Todo: todoTemplates,
  Project: projectTemplates,
  Checklist: checklistTemplates,
  ProjectList: projectListTemplates,
};

/**
 * Takes the view and element types as inputs and returns a function that
 * accepts a model object and returns an HTML element.
 * <br><br>
 *
 * The returned function calls the appropriate template function by creating a
 * reference to members of nested objects, similar to a command pattern.
 * <br><br>
 *
 * {@link templates View}
 * @memberof Views.Templates
 * @default
 *
 * @param {string} view - View/Model type (Todo, Project, Project List)
 * @param {string} type - Template type (standard, add, edit)
 * @returns {Function} - Function that accepts a model and returns an Element object
 */
export default function templates(view, type) {
  /**
    * Creates and returns an HTML element using the template specificied when this function was created.
    * Optionally using a model object.
    * @param {DataModel} model - (Optional) Model object used to populate the element's HTML
    * @returns {Element} - HTML element
    */
  return function (model = null) {
    const templateHTML = viewTemplates[view][type](model);
    return convertElement(templateHTML);
  };
}
