/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/** @typedef {import('./model').DataModel} DataModel */

/**
 * Controllers handle manipulating models, creating and controlling views, and handling events.
 * @namespace Controllers
 */

/** 
 * Main app instance
 * @type {ProjectList} 
 * @memberof Controllers
 */

var instance = new _model__WEBPACK_IMPORTED_MODULE_0__.ProjectList();
/**
 * Helper functions to facilitate some repetitive tasks:
 * @namespace Controllers.ControllerHelpers
 */

/**
 * Selects certain elements in a specific parent element and adds listeners to each.
 * @memberof Controllers.ControllerHelpers
 * @param {Object} context - Controller instance to bind callbacks to since they're class methods
 * @param {HTMLElement} parent - DOM node to select from
 * @param {string} selector - Selector of elements to add listeners to
 * @param {string} event - Event type to listen for i.e. 'click'
 * @param {function(event)} callback - Function to run when event is triggered
 */

function setListeners(context, parent, selector, event, callback) {
  var elements = parent.querySelectorAll(selector);
  if (!elements) return;

  var _iterator = _createForOfIteratorHelper(elements),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var el = _step.value;
      el.addEventListener(event, callback.bind(context));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
/**
 * Gets model object's ID from event target's data attribute for callbacks that
 * take ID as input.
 * @memberof Controllers.ControllerHelpers
 * @param {Event} event - Event object with target HTML element data 
 * @returns {number} - ID of model object linked to event target
 */


function getID(event) {
  var itemContainerEl = event.composedPath().find(function (el) {
    return el.hasAttribute('data-child-id');
  });
  return parseInt(itemContainerEl.getAttribute('data-child-id'));
}
/**
 * Parent abstract class for Controllers which update the model and re-render view.
 * They also assigns event listeners to relevant view elements.
 * Subclasses are hierarchical like models & views: Project List > Project > .
 * 
 * {@link Controller View}
 * @memberof Controllers~
 */


var Controller = /*#__PURE__*/function () {
  /**
   * @param {DataModel} model Source model to be editied
   */
  function Controller(model) {
    _classCallCheck(this, Controller);

    // Ensure class is abstract
    if (this.constructor === Controller) throw new Error('Abstract Class');
    /** 
     * @type {DataModel}
     */

    this.model = model;
  }
  /** Save overall app model to local storage */


  _createClass(Controller, [{
    key: "save",
    value: function save() {
      localStorage.projectList = JSON.stringify(instance.list);
    }
    /**
     * Update procedure after model manipulations that affect view elements.
     * 1. Save Project List instance in local storage 
     * 2. Re-render view elements 
     * 3. Set relevant event listeners
     */

  }, {
    key: "update",
    value: function update() {
      this.save();
      this.view.render();
      this.listeners();
    } // Abstract methods extepcted of each controller

    /** Edit model/child data */

  }, {
    key: "edit",
    value: function edit() {}
    /** Set event listeners to elements rendered by the view */

  }, {
    key: "listeners",
    value: function listeners() {}
    /** Remove relevant model by setting visibility to false */

  }, {
    key: "remove",
    value: function remove() {}
    /** Toggle the 'done' status of the source/child model and update the relevant DOM element classes*/

  }, {
    key: "toggle",
    value: function toggle() {}
  }]);

  return Controller;
}();
/** Parent controller for rendering and manipulating a list of child objects in parent models.
 * i.e. Rendering each Todo in an array of Todos in a parent Project model.
 * 
 * {@link ListController View}
 * @memberof Controllers~
 * @extends Controller
 * @extends Controllers~Controller
 */


var ListController = /*#__PURE__*/function (_Controller) {
  _inherits(ListController, _Controller);

  var _super = _createSuper(ListController);

  /**
   * 
   * @param {DataModel} parent Source parent model. Must contain an array called 'list' containing derived data model types
   * @param {string} type Type of parent model, i.e 'ProjectList', 'Project', 'Todo'. Values according to the keys {@link Views~containers here}
   */
  function ListController(parent, type) {
    var _this;

    _classCallCheck(this, ListController);

    _this = _super.call(this, parent);
    /**
     * List of child objects
     * @type {DataModel[]}
     */

    _this.list = _this.model.list;
    /**
     * A populator view created with the parent model
     * @type {PopulatorView}
     */

    _this.view = new _view__WEBPACK_IMPORTED_MODULE_1__.PopulatorView(_this.model, type);
    return _this;
  }
  /** Add child model */


  _createClass(ListController, [{
    key: "add",
    value: function add() {}
    /**
      * 'Deletes' child object by hiding it then runs update() above. View renderer 
      * ignores objects with visislbe = false. This design decision is explained 
      * at the Model class.
      * @param {number} id - child objects id, AKA it's index
      */

  }, {
    key: "remove",
    value: function remove(id) {
      this.list[id].visible = false;
      this.update();
    }
    /**
      * Toggle the status (done or not) of a model or child and add/remove a 
      * 'done' class to the relevant view element
      * @param {number} id ID/index of the model/child to toggle
      */

  }, {
    key: "toggle",
    value: function toggle(id) {
      // Edit Model
      this.list[id].status = !this.list[id].status; // Add/remove class in view depending on new status.

      var removeClass = this.list[id].status ? false : true; // Status: flase >> child isn't done >> Remove 'done' = true.

      this.view.setClass(id, 'done', removeClass);
    }
    /**
      * Filters list of child objects and only keep ones where visible = true.
      * @returns {Array} - Array of child objects
      */

  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.list.filter(function (child) {
        return child.visible;
      });
    }
  }]);

  return ListController;
}(Controller);
/**
 * Controller for checklists, which are an array in each Todo containing checklist items.
 * The parent Todo which contains the list, is the source model since rendering and data manipulation 
 * the whole list.
 * 
 * {@link ChecklistController View}
 * @memberof Controllers
 * @extends ListController
 * @extends Controllers~ListController
 */


var ChecklistController = /*#__PURE__*/function (_ListController) {
  _inherits(ChecklistController, _ListController);

  var _super2 = _createSuper(ChecklistController);

  /**
   * 
   * @param {Todo} todo Parent todo
   */
  function ChecklistController(todo) {
    var _thisSuper, _this2;

    _classCallCheck(this, ChecklistController);

    _this2 = _super2.call(this, todo, 'Checklist');

    _get((_thisSuper = _assertThisInitialized(_this2), _getPrototypeOf(ChecklistController.prototype)), "update", _thisSuper).call(_thisSuper);

    return _this2;
  }
  /**
   * Edit a checklist item live by updating the model with each input
   * @param {InputEvent} event User input in the field
   */


  _createClass(ChecklistController, [{
    key: "edit",
    value: function edit(event) {
      // Pass Event as input to cleanly get and use event target's value
      var itemID = getID(event); // Instead of using getID then edit(id) in the callback

      var inputValue = event.target.value;

      if (inputValue) {
        // If field isn't empty, update item's model
        this.list[itemID].descr = inputValue;

        _get(_getPrototypeOf(ChecklistController.prototype), "save", this).call(this);
      } else {
        // If field is empty, remove item, and update (save and re-render) 
        _get(_getPrototypeOf(ChecklistController.prototype), "remove", this).call(this, itemID);

        this.update();
        console.log(this.view.addForm);
        this.view.addForm['descr'].focus(); // Focus add form's input if user still wants to enter an item
      }
    }
    /** Add a new checklist item to the model when the user makes an input in the add form */

  }, {
    key: "add",
    value: function add() {
      var form = this.view.addForm;
      var id = this.list.length;
      this.list.push(new _model__WEBPACK_IMPORTED_MODULE_0__.ChecklistItem(id, form['descr'].value));
      this.update(); // Focus newly created input and put cursos at the end by resetting the value (kinda hacky)

      var checklistElement = this.view.container.querySelector("[data-child-id=\"".concat(id, "\"] input"));
      var tempDescr = checklistElement.value;
      checklistElement.focus();
      checklistElement.value = '';
      checklistElement.value = tempDescr;
    }
    /** Set relevant listeners to each checklist item */

  }, {
    key: "listeners",
    value: function listeners() {
      var _this3 = this;

      var container = this.view.container;
      setListeners(this, container, '.checklist-item', 'input', this.edit);
      setListeners(this, container, '#new-checklist-item', 'input', this.add);
      setListeners(this, container, '.delete', 'click', function (e) {
        return _this3.remove(getID(e));
      });
      setListeners(this, container, '.done-toggle', 'click', function (e) {
        return _get(_getPrototypeOf(ChecklistController.prototype), "toggle", _this3).call(_this3, getID(e));
      });
    }
  }]);

  return ChecklistController;
}(ListController);
/** 
 * Controller for the detailed Todo View modal. Automatically renders modal when instanced
 * 
 * {@link TodoController View}
 * @memberof Controllers
 * @extends Controller
 * @extends Controllers~Controller
 */


var TodoController = /*#__PURE__*/function (_Controller2) {
  _inherits(TodoController, _Controller2);

  var _super3 = _createSuper(TodoController);

  /**
   * @param {classes['Todo']} todo Source Todo model
   */
  function TodoController(todo) {
    var _this4;

    _classCallCheck(this, TodoController);

    _this4 = _super3.call(this, todo);
    /**
     * @type {TodoView}
     */

    _this4.view = new _view__WEBPACK_IMPORTED_MODULE_1__.TodoView(todo);

    _this4.update(); // Render and set listeners

    /**
     * The modal body. An form element with fields for each model property, pre-filled with 
     * their original values. User inputs updated the model {@link edit see here}
     * @type {HTMLFormElement}
     */


    _this4.form = _this4.view.form;
    /**
     * Checklist controller that handles rendering and updating the array of 
     * child checklist item objects
     * @type {ChecklistController}
     */

    _this4.checklist = new ChecklistController(todo);
    return _this4;
  }
  /** Hide the modal and re-render project view */


  _createClass(TodoController, [{
    key: "close",
    value: function close() {
      this.view.hide();
      this.projectController.update();
    }
    /** Close modal if the user clicks outside by submitting it, hence running {@link close} */

  }, {
    key: "clickOut",
    value: function clickOut(event) {
      if (event.target === event.currentTarget) this.view.form.elements['save'].click(); // submit() doesn't trigger listener
    }
    /** Edit the model live by updating it when a user makes in an input in field */

  }, {
    key: "edit",
    value: function edit(event) {
      var input = event.target;
      var modelProperty = input.name; // Field names match model property names

      this.model[modelProperty] = input.value;
      this.save(); // Save to local storage
    }
    /** Set Todo's visibility to false and close the modal element (refreshing the project view) */

  }, {
    key: "remove",
    value: function remove() {
      this.model.visible = false;
      this.close();
    }
    /** Toggle the status of the Todo element and toggle the 'done' class on the modal */

  }, {
    key: "toggle",
    value: function toggle() {
      this.model.status = !this.model.status;
      var removeClass = this.model.status ? false : true;
      this.view.setClass('done', removeClass);
    }
    /** Set relevant listeners to modal elements, the form, and the background */

  }, {
    key: "listeners",
    value: function listeners() {
      var _this5 = this;

      setListeners(this, this.view.form, 'input,textarea', 'input', this.edit);
      setListeners(this, this.view.container, '#todo-background', 'click', this.clickOut);
      setListeners(this, this.view.form, '.delete', 'click', this.remove);
      setListeners(this, this.view.form, '.done-toggle', 'click', this.toggle);
      this.view.form.addEventListener('submit', function (e) {
        e.preventDefault();

        _this5.close();
      });
    }
  }]);

  return TodoController;
}(Controller);
/**
 * Controller that manages Project models and views. Projects are essentially 
 * parent containers of Todo elements, so the controller handles the array of todos.
 * 
 * @extends ListController
 * @extends Controllers~ListController
 * @memberof Controllers
 */


var ProjectController = /*#__PURE__*/function (_ListController2) {
  _inherits(ProjectController, _ListController2);

  var _super4 = _createSuper(ProjectController);

  /**
   * @param {Project} project Source projet model
   */
  function ProjectController(project) {
    var _thisSuper2, _this6;

    _classCallCheck(this, ProjectController);

    _this6 = _super4.call(this, project, 'Project');

    _get((_thisSuper2 = _assertThisInitialized(_this6), _getPrototypeOf(ProjectController.prototype)), "update", _thisSuper2).call(_thisSuper2);

    return _this6;
  }
  /** Add todo element to project based on form input values */


  _createClass(ProjectController, [{
    key: "add",
    value: function add(event) {
      event.preventDefault();
      var inputs = event.target.elements; // HTMLCollection: [title, desc, checklist1, checklist2, checklist3]

      var inputValues = _toConsumableArray(inputs).map(function (element) {
        return element.value;
      }); // Convert to array of values


      var _inputValues = _toArray(inputValues),
          title = _inputValues[0],
          descr = _inputValues[1],
          checklist = _inputValues.slice(2);

      var list = checklist.filter(function (itemDescr) {
        return itemDescr;
      }).map(function (itemDescr, i) {
        return new _model__WEBPACK_IMPORTED_MODULE_0__.ChecklistItem(i, itemDescr);
      }); // id, descr

      var startDate = null,
          endDate = null;
      var id = this.list.length;
      var todo = new _model__WEBPACK_IMPORTED_MODULE_0__.Todo(id, title, descr, startDate, endDate, list);
      this.list.push(todo);

      _get(_getPrototypeOf(ProjectController.prototype), "update", this).call(this);
    }
    /** 
     * Replace the Todo card with a form containing the original values. 
     * Submitting the form then updates the model with the new values and updates the
     *  view/listeners and local storage
     */

  }, {
    key: "edit",
    value: function edit(id) {
      var _this7 = this;

      _get(_getPrototypeOf(ProjectController.prototype), "update", this).call(this); // Avoids multiple concurrent editing forms. Doesn't save changes.


      this.view.editMode(id);
      this.view.container.querySelector('.edit-form').addEventListener('submit', function (event) {
        event.preventDefault();

        var inputs = _toConsumableArray(event.target.elements).filter(function (el) {
          return el.tagName !== 'BUTTON';
        }); //Filter out buttons


        var inputValues = inputs.map(function (el) {
          return el.value;
        });

        var _inputValues2 = _toArray(inputValues),
            newTitle = _inputValues2[0],
            newDescr = _inputValues2[1],
            newList = _inputValues2.slice(2);

        var todoModel = _this7.model.list[id]; // Model instance being edited

        todoModel.title = newTitle;
        todoModel.descr = newDescr;
        var renderedList = todoModel.list.filter(function (item) {
          return item.visible;
        }); // Only compare to visible items

        newList.forEach(function (itemDescr, i) {
          if (!itemDescr && !renderedList[i]) return; // Skip if field is empty and nothing was rendered

          if (renderedList[i]) {
            // If an item was rendered:
            var itemID = renderedList[i].id; // Get the actual index of the item in the model list

            if (!itemDescr) {
              todoModel.list[itemID].visible = false; // If the relevant field is now empty, hide the item
            } else {
              todoModel.list[itemID].descr = itemDescr; // Otherwise change its value
            }
          } else {
            // If there's no rendered item, then add a new item
            var _id = todoModel.list.length;
            todoModel.list.push(new _model__WEBPACK_IMPORTED_MODULE_0__.ChecklistItem(_id, itemDescr));
          }
        });

        _get(_getPrototypeOf(ProjectController.prototype), "update", _this7).call(_this7);
      });
    }
    /** Select a Todo item and load it into a {@link TodoController} */

  }, {
    key: "select",
    value: function select(id) {
      this.todoController = new TodoController(this.list[id]);
      /**
       * Parent project controller
       * @type {ProjectController}
       */

      this.todoController.projectController = this; // Add parent controller property to call update() after closing the modal.
    }
    /** Set listeners for all Todo cards child elements in the project view container and the add form.  */

  }, {
    key: "listeners",
    value: function listeners() {
      var _this8 = this;

      var container = this.view.container;
      this.view.addForm.addEventListener('submit', this.add.bind(this));
      setListeners(this, container, '.delete', 'click', function (e) {
        return _this8.remove(getID(e));
      });
      setListeners(this, container, '.done-toggle', 'click', function (e) {
        return _get(_getPrototypeOf(ProjectController.prototype), "toggle", _this8).call(_this8, getID(e));
      });
      setListeners(this, container, '.card:not(#new-todo) :is(p,h2,h4,li)', 'dblclick', function (e) {
        return _this8.edit(getID(e));
      });
      setListeners(this, container, '.card:not(#new-todo, button)', 'click', function (e) {
        if (e.target === e.currentTarget) _this8.select(getID(e));
      });
    }
  }]);

  return ProjectController;
}(ListController);
/** Handles the overall app model instance, which is an array of project models */


var ProjectListController = /*#__PURE__*/function (_ListController3) {
  _inherits(ProjectListController, _ListController3);

  var _super5 = _createSuper(ProjectListController);

  function ProjectListController() {
    var _thisSuper3, _this9;

    _classCallCheck(this, ProjectListController);

    _this9 = _super5.call(this, instance, 'ProjectList');

    _get((_thisSuper3 = _assertThisInitialized(_this9), _getPrototypeOf(ProjectListController.prototype)), "update", _thisSuper3).call(_thisSuper3); // Get enabled projects and select the first one by default 


    _this9.selectDefault();

    return _this9;
  }
  /** Add project when 'add form' is submitted */


  _createClass(ProjectListController, [{
    key: "add",
    value: function add(event) {
      event.preventDefault();
      var id = this.list.length;
      var title = event.target.elements['name'].value;
      this.model.list.push(new _model__WEBPACK_IMPORTED_MODULE_0__.Project(id, title));

      _get(_getPrototypeOf(ProjectListController.prototype), "update", this).call(this);

      this.select(id); // Switch to new project
    }
    /** Select a child project from the array given its ID by creating a project controller instance*/

  }, {
    key: "select",
    value: function select(id) {
      var project = this.model.list[id];
      /**
       * Controller for the currently loaded project.
       * @type {ProjectController}
       */

      this.projectController = new ProjectController(project); // New controller instance updates/renders its view

      /**
       * @type {classes['Project']} 
       */

      this.previousProject = this.activetProject; // Record last selected project incase active project is removed

      /**
       * @type {classes['Project']}
       */

      this.activetProject = project;
      this.view.setClass(id, 'active', false, true); // Set relevant child view element to active
    }
    /** 
     * Default selection logic when loading the controller for the first time or when removing the current 
     * project and the previous proejct was already removed.
     */

  }, {
    key: "selectDefault",
    value: function selectDefault() {
      var visibleProjects = _get(_getPrototypeOf(ProjectListController.prototype), "getVisible", this).call(this);

      if (visibleProjects.length) {
        this.select(visibleProjects[0].id);
      } else {
        this.emptyView = new _view__WEBPACK_IMPORTED_MODULE_1__.NewAppView(); // Create a view in the Project View
        // container asking the user to create a new porject
      }
    }
    /** 
     * Remove a child project object. Since a project should always be selected, 
     * this handles the selection logic incase the active project is deleted.
     */

  }, {
    key: "remove",
    value: function remove(id) {
      _get(_getPrototypeOf(ProjectListController.prototype), "remove", this).call(this, id); // Remove project model from project list's array and update the sidebar.
      // Rendering the sidebar doesn't show the selected project, so we reselect it.
      // Also, we might have removed the currently selected project so we'd need
      // to select a different one.


      if (id === this.activetProject.id) {
        var _this$previousProject;

        // If we removed the active project
        if ((_this$previousProject = this.previousProject) !== null && _this$previousProject !== void 0 && _this$previousProject.visible) // Check if the previous project is visible
          this.select(this.previousProject.id); // And select it (feels better than just selecting the first project)
        else this.selectDefault(); // Or select the first visible project if it isn't visible
      } else {
        this.select(this.activetProject.id); // Reselect the active project if it wasn't the one removed
      }
    }
    /** 
     * Replace the project container with an pre-filled form that the user can edit.
     * The model value is updated with each input to make editing feel more seamless.
     */

  }, {
    key: "edit",
    value: function edit(id) {
      var _this10 = this;

      _get(_getPrototypeOf(ProjectListController.prototype), "update", this).call(this); // Avoids multiple concurrent editing forms. Doesn't save changes.


      this.view.editMode(id); // Replace field with pre-filled edit form using the model

      var titleInput = this.view.editForm['title'];
      titleInput.focus(); // Put cursor at the end

      var tempvalue = titleInput.value;
      titleInput.value = '';
      titleInput.value = tempvalue;
      var project = this.model.list[id];
      var originalTitle = project.title; // Save original incase view updates while form's empty

      titleInput.addEventListener('input', function () {
        var newTitle = titleInput.value;
        if (newTitle) project.title = newTitle;else project.title = originalTitle; // If field's empty, keep the original title in the model
      });
      /**
       * Callback to run when the user finishes editing by sumbitting the form or defocusing the input field. 
       * @param {SubmitEvent|FocusEvent} event Event that fires when the user finishes editing. 
       */

      var finishEdit = function finishEdit(event) {
        event.preventDefault(); // Incase it's a submit even

        _get(_getPrototypeOf(ProjectListController.prototype), "update", _this10).call(_this10); // Only save to local storage after finishing


        _this10.select(id); // Reselect the project being edited.

      };

      this.view.editForm.addEventListener('focusout', finishEdit);
      this.view.editForm.addEventListener('submit', finishEdit);
    }
    /** Set event listeners to relevant child project elements and the 'add project' form */

  }, {
    key: "listeners",
    value: function listeners() {
      var _this11 = this;

      var container = this.view.container;
      this.view.addForm.addEventListener('submit', this.add.bind(this));
      setListeners(this, container, '.name', 'click', function (e) {
        return _this11.select(getID(e));
      });
      setListeners(this, container, '.delete', 'click', function (e) {
        return _this11.remove(getID(e));
      });
      setListeners(this, container, '.project', 'dblclick', function (e) {
        return _this11.edit(getID(e));
      });
    }
  }]);

  return ProjectListController;
}(ListController);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectListController);

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChecklistItem": () => (/* binding */ ChecklistItem),
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "ProjectList": () => (/* binding */ ProjectList),
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Models define how the app's data is stored. For this app, models are structured 
 * as nested objects with each parent containing an array of child objects.
 * 
 * The object heirarchy is: Project List (App) -> Projects -> Todos -> Checlist Items
 * 
 * @namespace Models
 */

/**
 * @typedef {DataModel} DataModel 
 * @ignore 
 */

/**
 * Main parent class for basic data objects: Projects, Todos, and Checklist Items.
 * Each instance has an ID, status flag, and visible flag.
 * 
 * @memberof Models
 */
var DataModel = /*#__PURE__*/_createClass(
/**
 * Create a model object
 * @param {number} id ID to be assigned to the instance.
 */
function DataModel(id) {
  _classCallCheck(this, DataModel);

  /**
   * ID of the object. Used as index in parent object's array. 
   * @type {number}
   */
  this.id = id;
  /**
   * Indiciates if the object is 'done' or not. True = done.
   * 
   * Default: false
   * @type {Boolean}
   */

  this.status = false;
  /**
   * Indicates if the object should be rendered. True = render.
   * <br><br>
   * 
   * When a user removes an object, it's not deleted from the parent's array, 
   * instead its visibility is set to 'false'.
   * <br><br>
   * 
   * Default: true.
   * @type {Boolean}
   */

  this.visible = true;
});
/** 
 * Model for checklist items - subtasks for each Todo item
 * 
 * @memberof Models
 * @extends DataModel
 * @extends Models.DataModel
 */


var ChecklistItem = /*#__PURE__*/function (_DataModel) {
  _inherits(ChecklistItem, _DataModel);

  var _super = _createSuper(ChecklistItem);

  /**
   * Create a new checklist item
   * @param {number} id ID to be assigned to the checklist item
   * @param {string} descr Descirption to added to the item. 
   */
  function ChecklistItem(id, descr) {
    var _this;

    _classCallCheck(this, ChecklistItem);

    _this = _super.call(this, id);
    /**
     * Description of the task to be done
     * @type {string}
     */

    _this.descr = descr;
    return _this;
  }

  return _createClass(ChecklistItem);
}(DataModel);
/** 
 * Model for todo items 
 * 
 * @memberof Models
 * @extends DataModel
 * @extends Models.DataModel
 */


var Todo = /*#__PURE__*/function (_DataModel2) {
  _inherits(Todo, _DataModel2);

  var _super2 = _createSuper(Todo);

  /**
   * Create new Todo Item
   * @param {number} id ID to assign - Also acts as index in parent's array object
   * @param {string} title Main title of the Todo Item
   * @param {string} descr Description of the todo with more details. Optional - Defualt = null
   * @param {string} endDate End Date of the todo item. Optional - Default = null
   * @param {string} startDate Start date of the todo item. Optional - Default = null
   * @param {ChecklistItem[]} [list=[]]  Array of checklist items. Default = empty array.  
   */
  function Todo(id, title) {
    var _this2;

    var descr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var endDate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var startDate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var list = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

    _classCallCheck(this, Todo);

    _this2 = _super2.call(this, id);
    /**
     * Main title of the Todo Item
     * @type {string}
     */

    _this2.title = title;
    /**
     * Description of the todo with more details
     * @type {string}
     */

    _this2.descr = descr;
    /**
     * End Date of the todo item
     * @type {string}
     */

    _this2.endDate = endDate;
    /**
     * Start date of the todo item
     * @type {string}
     */

    _this2.startDate = startDate;
    /**
     * Array of checklist items
     * @type {ChecklistItem[]}
     */

    _this2.list = list;
    return _this2;
  }

  return _createClass(Todo);
}(DataModel);
/** 
 * Project Model that contains todo items 
 * 
 * @memberof Models
 * @extends DataModel
 * @extends Models.DataModel
 */


var Project = /*#__PURE__*/function (_DataModel3) {
  _inherits(Project, _DataModel3);

  var _super3 = _createSuper(Project);

  /**
   * 
   * @param {number} id ID to assign to project
   * @param {string} title Name of the project
   * @param {Todo[]} [list= []] Array of todo objects. Default: empty array.
   */
  function Project(id, title) {
    var _this3;

    var list = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, Project);

    _this3 = _super3.call(this, id);
    /**
     * Project title/name
     * @type {string}
     */

    _this3.title = title;
    /**
     * Array of todo objects
     * @type {Todo[]}
     */

    _this3.list = list;
    return _this3;
  }

  return _createClass(Project);
}(DataModel);
/** 
 * Main app object containing a list of projects 
 * @memberof Models
 */


var ProjectList = /*#__PURE__*/_createClass(
/** Create project list by loading from local storage if available or creating an empty list */
function ProjectList() {
  _classCallCheck(this, ProjectList);

  var storedData = localStorage.projectList;
  /**
   * Array of project objects. Loaded from local storage.
   * 
   * If local storage location is empty, defaults to empty array.
   * @type {Project[]}
   */

  this.list = storedData ? JSON.parse(storedData) : [];
});



/***/ }),

/***/ "./src/templates/checklist.js":
/*!************************************!*\
  !*** ./src/templates/checklist.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/templates/helpers.js");

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

var checklistTemplates = {
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
  add: function add() {
    var elementHTML = "<form id=\"new-checklist-item\"><input required placeholder=\"New task\" name=\"descr\"><form>";
    return elementHTML;
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
  standard: function standard(item) {
    var elementHTML = "<div class=\"checklist-item ".concat((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.statusToClass)(item, 'done'), "\" data-child-id=\"").concat(item.id, "\">\n                <input class=\"descr\" value=\"").concat(item.descr, "\">\n                <div class=\"item-button-container\">    \n                    <div class=\"item-button done-toggle\">\u2713</div>\n                    <div class=\"item-button delete\">x</div>\n                </div>\n            </div>");
    return elementHTML;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checklistTemplates);

/***/ }),

/***/ "./src/templates/helpers.js":
/*!**********************************!*\
  !*** ./src/templates/helpers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getVisible": () => (/* binding */ getVisible),
/* harmony export */   "statusToClass": () => (/* binding */ statusToClass)
/* harmony export */ });
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
/**@typedef {import('../model.js').DataModel} DataModel*/

/**
 * Filters child objects based on their visibility
 * @memberof Views.TemplateHelpers
 * @param {DataModel[]} list - Array of model objects
 * @returns {DataModel[]} - Filtered array of model objects
 */


function getVisible(list) {
  return list.filter(function (item) {
    return item.visible;
  });
}



/***/ }),

/***/ "./src/templates/index.js":
/*!********************************!*\
  !*** ./src/templates/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ templates)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/templates/todo.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/templates/project.js");
/* harmony import */ var _checklist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checklist.js */ "./src/templates/checklist.js");
/* harmony import */ var _projectList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectList.js */ "./src/templates/projectList.js");




/** @typedef {import("../model.js").DataModel} DataModel */

/***
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

var convertElement = function convertElement(elementHTML) {
  var tempWrapper = document.createElement('div');
  tempWrapper.innerHTML = elementHTML; // To consistently keep the output as a single element object, NOT HTML Collections:

  if (tempWrapper.childElementCount === 1) // Check if template element is already wrapped
    return tempWrapper.firstChild; // Return it if true, otherwise return temp wrapper

  return tempWrapper; // This is a failsafe, not a feature. 
};
/** 
 * Consilidate template modules into a dictionary to allow view constructors to reference them with the {@link templates command pattern} below.

 * @namespace Views.Templates
 * 
 * @property {Object} Todo - Todo View Templates {@link todoTemplates see here}
 * @property {Object} Project - Project View Templates {@link projectTemplates see here}
 * @property {Object} Checklist - Checklist View Templates {@link checklistTemplates see here}
 * @property {Object} ProjectList - Project List View Templates {@link projectListTemplates see here}
 */


var viewTemplates = {
  Todo: _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  Project: _project_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  Checklist: _checklist_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  ProjectList: _projectList_js__WEBPACK_IMPORTED_MODULE_3__["default"]
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

function templates(view, type) {
  /**
   * Creates and returns an HTML element using the template specificied when this function was created.
   * Optionally using a model object.
   * @param {DataModel} model - (Optional) Model object used to populate the element's HTML
   * @returns {Element} - HTML element
   */
  return function () {
    var model = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var templateHTML = viewTemplates[view][type](model);
    return convertElement(templateHTML);
  };
}

/***/ }),

/***/ "./src/templates/project.js":
/*!**********************************!*\
  !*** ./src/templates/project.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/templates/helpers.js");

/**
 * This module consolidates the tempaltes that are used to render the project view.
 * <br><br>
 * 
 * A project contains an array of todo objects. To render a project, a populator-type
 * view is used that iterates through the array and creates separate elements for 
 * each todo object.
 * <br><br>
 * 
 * There are other templates that can be rendered by the View for adding new Todos, editing Todos, and 
 * informing the user that they need to add a new project if the project list's empty.
 * 
 * {@link projectTemplates Visit Module}
 * @namespace ProjectTemplates
 * @memberof Views.Templates
 * 
 * @property {Function} add - Create 'Add Todo Form' element HTML {@link projectTemplates.add see here}
 * @property {Function} standard - Create 'Standard Todo' element HTML {@link projectTemplates.standard see here}
 * @property {Function} edit  - Create 'Edit Todo' element HTML {@link projectTemplates.edit see here}
 * @property {Function} empty - Create 'Empty Projects' element HTML {@link projectTemplates.empty see here}
 * 
 */

var projectTemplates = {
  /** Todo model object
   *  @typedef { import("../model.js").Todo} Todo
   */

  /**
   * Create an HTML string of the standard element displaying a Todo's information 
   * in the Project View.
   * 
   * {@link projectTemplates.standard View}
   * @memberof Views.Templates.ProjectTemplates
   * @param {Todo} todoObj Todo model object
   * @returns {string} Element's Outer HTML
   */
  standard: function standard(todoObj) {
    var elementHTML = "<div class=\"card ".concat((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.statusToClass)(todoObj, 'done'), "\" data-child-id=\"").concat(todoObj.id, "\">\n                <h2 class=\"title\">").concat(todoObj.title, "</h2>\n                <p class=\"descr\">").concat(todoObj.descr, "</p>\n                <h4 class=\"checklist-title\">Tasks</h4>\n                <div class=\"checklist-container\">").concat( // Item Array > Filter inactive > Map to template string > Slice First 3 > Remove commas
    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getVisible)(todoObj.list).map(function (item) {
      return "<li class=\"checklist-item ".concat((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.statusToClass)(item, 'done'), "\">").concat(item.descr, "</li>");
    }).slice(0, 3).join('') + ((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getVisible)(todoObj.list).length > 3 ? '<div class="more-items-inside"></div>' : ''), "</div>\n                <div class=\"button-container\">\n                    <div class=\"done-toggle button\">Done</div>\n                    <div class=\"delete button\">Delete</div>\n                </div>\n            </div>");
    return elementHTML;
  },

  /** 
   * Generate HTML for the element containing forms to create and append a new todo to the project
   * 
   * {@link projectTemplates.add View}
   * @memberof Views.Templates.ProjectTemplates
   * 
   * @returns {string} Element's Outer HTML
   */
  add: function add() {
    var elementHTML = "<form id=\"new-todo\" class=\"card\">\n                <input required class=\"title\" name=\"title\" placeholder=\"New Todo\">\n                <textarea class=\"descr\" name=\"descr\" placeholder=\"Description\"></textarea>\n                <h4 class=\"checklist-title\">Tasks</h4>\n                <div class=\"checklist-container\">\n                    <input name =\"checklist\" class=\"checklist-input\">\n                    <input name =\"checklist\" class=\"checklist-input\">\n                    <input name =\"checklist\" class=\"checklist-input\">\n                </div>\n                <div class=\"button-container\">\n                    <button type=\"submit\" id=\"add-todo\" class=\"button\">Add</button>\n                    <button type=\"reset\" id=\"reset-todo-inputs\" class=\"button\">Reset</div>\n                </div>\n            </form>";
    return elementHTML;
  },

  /**
   * Generate HTML for the element containing forms to create and append a new todo to the project
   * 
   * {@link projectTemplates.edit View}
   * @memberof Views.Templates.ProjectTemplates
   * 
   * @param {Todo} todoObj Todo model object
   * @returns {string} Element's Outer HTML
   */
  edit: function edit(todoObj) {
    var activeList = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getVisible)(todoObj.list);
    var elementHTML = "<form class=\"edit-form card\">\n                <input required class=\"title\" name=\"title\" value=\"".concat(todoObj.title, "\">\n                <textarea class=\"descr\" name=\"descr\">").concat(todoObj.descr, "</textarea>\n                <h4 class=\"checklist-title\">Tasks</h4>\n                <div class=\"checklist-container\">\n                        <input name =\"list\" class=\"checklist-input\" value=\"").concat(activeList[0] ? activeList[0].descr : "", "\">\n                        <input name =\"list\" class=\"checklist-input\" value=\"").concat(activeList[1] ? activeList[1].descr : "", "\">\n                        <input name =\"list\" class=\"checklist-input\" value=\"").concat(activeList[2] ? activeList[2].descr : "", "\">\n                </div>\n                <div class=\"button-container\">\n                    <button type=\"submit\" id=\"add-todo\" class=\"button\">Save</button>\n                    <div id=\"reset-todo-inputs\" class=\"button\">Delete</div>\n                </div>\n            </form>");
    return elementHTML;
  },

  /** 
   * Generate HTML for the element to add to the project view when there are no projects
   * 
   * {@link projectTemplates.empty View}
   * @memberof Views.Templates.ProjectTemplates
   * 
   * @returns {string} Element's Outer HTML
   */
  empty: function empty() {
    var elementHTML = "<div id=\"new-app\">\u2190 Add a new project</div>";
    return elementHTML;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectTemplates);

/***/ }),

/***/ "./src/templates/projectList.js":
/*!**************************************!*\
  !*** ./src/templates/projectList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Templates for the project list view, AKA the sidebar.
 *
 * The Project List uses a populator-type View which will iterate over its 
 * projects array and generate elements for each project.
 * 
 * There are also templates for adding new projects and editing existing projects. 
 * 
 * {@link projectListTemplates Visit Module}
 * @namespace ProjectListTemplates
 * @memberof Views.Templates
 * 
 * @property {Function} standard - Create HTML for standard project element {@link projectListTemplates.standard see here}
 * @property {Function} add - Create HTML for a form element for adding a new project {@link projectListTemplates.add see here}
 * @property {Function} edit - Create HTML for form element for editing an existing project {@link projectListTemplates.edit see here}
 */
var projectListTemplates = {
  /**
   * Project model object
   * @typedef {import('../model.js').Project} Project
   */

  /**
   * Generate HTML for the standard element that displays a project's information and contains relevant buttons and attributes
   * 
   * {@link projectListTemplates.standard View}
   * @memberof Views.Templates.ProjectListTemplates
   * 
   * @param {Project} project - Project model
   * @returns {string} Element Outer HTML
   */
  standard: function standard(project) {
    var elementHTML = "<div class=\"project\"  data-child-id=\"".concat(project.id, "\" >\n            <p class=\"name\">").concat(project.title, "</p>\n            <div class=\"delete\">x</div>\n        </div>");
    return elementHTML;
  },

  /**
   * Generate HTML for a form element for adding a new projects
   * @memberof Views.Templates.ProjectListTemplates
   * @returns {string} Element Outer HTML
   */
  add: function add() {
    var elementHTML = "<form id=\"new-project\"><input required placeholder=\"New Project\" name=\"name\"><form>";
    return elementHTML;
  },

  /**
   * Generate HTML for a form element for editing an existing project
   * 
   * {@link projectListTemplates.edit View}
   * @memberof Views.Templates.ProjectListTemplates
   * 
   * @param {Project} projectObj Project model to pull data from and fill the form
   * @returns {string} Element Outer HTML
   */
  edit: function edit(projectObj) {
    var elementHTML = "<form class=\"edit-form\"><input required value=\"".concat(projectObj.title, "\" name=\"title\"><form>");
    return elementHTML;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectListTemplates);

/***/ }),

/***/ "./src/templates/todo.js":
/*!*******************************!*\
  !*** ./src/templates/todo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/templates/helpers.js");

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

var todoTemplates = {
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
  standard: function standard(todoObj) {
    var elementHTML = "<div id=\"todo-background\">\n                <form id=\"todo-details\" class=\"".concat((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.statusToClass)(todoObj, 'done'), "\">\n                    <input required class=\"title\" name=\"title\" value=\"").concat(todoObj.title, "\">\n                    <textarea class=\"descr\" name=\"descr\">").concat(todoObj.descr, "</textarea>\n                    <div class=\"checklist-container\">\n                        <h3>Tasks</h3>\n                        <div id=\"checklist\"></div>\n                    </div>\n                    <div class=\"dates\">\n                        <div class=\"date-container\">\n                            <p class=\"date-type\">Start Date</p>\n                            <input type=\"date\" name=\"startDate\" value=\"").concat(todoObj.startDate || '', "\">\n                        </div>\n                        <div class=\"date-container\">\n                            <p class=\"date-type\">End Date</p>\n                            <input type=\"date\" name=\"endDate\" value=\"").concat(todoObj.endDate || '', "\">\n                        </div>\n                    </div>\n                    <div class=\"button-container\">\n                        <button class=\"save button\" type=\"submit\" name=\"save\">Save</button>\n                        <div class=\"done-toggle button\">Done</div>\n                        <div class=\"delete button\">Delete</div>\n                    </div>\n                </form>\n            </div>");
    return elementHTML;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoTemplates);

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewAppView": () => (/* binding */ NewAppView),
/* harmony export */   "PopulatorView": () => (/* binding */ PopulatorView),
/* harmony export */   "TodoView": () => (/* binding */ TodoView)
/* harmony export */ });
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ "./src/templates/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


/**
 * Import model types
 * @typedef {import("./model").DataModel}
 * @typedef {import("./model").Todo}
 */

/**
 * View classes used to draw different types of models to the DOM.
 * Also contains templates.
 * @namespace Views
 */

/**
 * Consolidates generic containers for use by views.
 * <br><br>
 * 
 * Built as a psuedo-dictionary using getters to select elements when called by a new view's constructor.
 * This circumvents containers that aren't in the DOM at page load (i.e. containers that are
 * elements in other yet-to-be-rendered views) 
 * 
 * {@link containers View}
 * @memberof Views~
 */

var containers = {
  get Checklist() {
    return document.getElementById('checklist');
  },

  get Todo() {
    return document.body;
  },

  get Project() {
    return document.querySelector('main');
  },

  get ProjectList() {
    return document.getElementById('projects');
  }

};
/** 
 * Parent abstract view class.
 * 
 * Views handle drawing elements to the DOM based on data stored in a source model. 
 * {@link View View}
 * @memberof Views~
 */

var View = /*#__PURE__*/function () {
  /**
   * @param {DataModel} model Object to render data from
   * @param {string} type View type i.e. Todo, Project, Project List
   */
  function View(model, type) {
    _classCallCheck(this, View);

    // Ensure class is abstract
    if (this.constructor === View) throw new Error('Abstract Class');
    /**
     * View object's source data model
     * @type {DataModel}
     */

    this.model = model;
    /**
     * DOM element to append view elements to 
     * @type {Element}
     */

    this.container = containers[type];
    /**
     * Generate a standard view element displaying a model object's data.
     * @type {Function}
     * @param {DataModel} model Model object
     * @returns {Element} HTML element
     */

    this.standardTemplate = (0,_templates__WEBPACK_IMPORTED_MODULE_0__["default"])(type, 'standard');
  }
  /** 
   * Create standard element(s) and append to the container 
   * Some views might need to clear their container, or append extra elements.
   */


  _createClass(View, [{
    key: "render",
    value: function render() {}
  }]);

  return View;
}();
/**
 * This View class handles rendering and manipulating models that contain an 
 * array of child models [Project List > Array of projects].
 * <br><br>
 * 
 * The view handler loops through the array of child models to generate elements
 * and populates a specified DOM container with said elements.
 * <br><br>
 * 
 * Each standard element can enter 'edit mode' if called by the controller, where 
 * it's replaced by an edit form that allows the user to quickly change model properties.
 * <br><br>
 * 
 * Populator views also have 'add' elements allowing the user to create a new child 
 * model (logic is handled by the controller).
 * <br><br>
 * 
 * {@link PopulatorView View}
 * @extends View
 * @extends Views~View
 * @memberof Views
 */


var PopulatorView = /*#__PURE__*/function (_View) {
  _inherits(PopulatorView, _View);

  var _super = _createSuper(PopulatorView);

  /**
   * @param {DataModel} model Object to render data from
   * @param {string} type View type i.e. Project, Project List
   */
  function PopulatorView(model, type) {
    var _this;

    _classCallCheck(this, PopulatorView);

    _this = _super.call(this, model, type);
    /**
     * Generate Element for the user to add new child object
     * @type {Function}
     * @returns {Element}
     */

    _this.addFormTemplate = (0,_templates__WEBPACK_IMPORTED_MODULE_0__["default"])(type, 'add');
    /**
     * Generate a form, initially filled with the object's data that allows the user to edit the object.
     * @type {Function}
     * @param {DataModel} model Model object
     * @returns {Element} HTML element
     */

    _this.editFormTemplate = (0,_templates__WEBPACK_IMPORTED_MODULE_0__["default"])(type, 'edit');
    return _this;
  }
  /**
   * Filters removed (visible=false) objects from an array of model objects
   * @param {DataModel[]} list Array of model objects
   * @returns {DataModel[]} Filtered copy of original array
   */


  _createClass(PopulatorView, [{
    key: "getActive",
    value: function getActive(list) {
      return list.filter(function (model) {
        return model.visible;
      });
    }
    /**
     * Default rendering function that clears the view container and populates it with 
     * standard elements for each child object and a form to add new children.
     * 
     * {@link render View}
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.container.innerHTML = ''; // Clear container

      var list = this.model.list;
      this.getActive(list).forEach(function (childObj) {
        var standardElement = _this2.standardTemplate(childObj);

        _this2.container.appendChild(standardElement);
      });
      /**
       * Reference to the DOM 'add child' form element
       * @type {HTMLFormElement}
       */

      this.addForm = this.container.appendChild(this.addFormTemplate()); // Append 'Add "model"' element 
    }
    /**
     * Switch the DOM element representing the child model with an 'edit form' that's  
     * pre-filled with the model's original properties and allows the user to edit those properties.
     * 
     * {@link editMode View}
     * 
     * @param {number} id - ID of the child model object being edited
     */

  }, {
    key: "editMode",
    value: function editMode(id) {
      var elementToEdit = this.container.querySelector("[data-child-id=\"".concat(id, "\"]"));
      /**
       * Reference to the DOM 'edit child' form element
       * @type {HTMLFormElement}
       */

      this.editForm = this.editFormTemplate(this.model.list[id]);
      elementToEdit.replaceWith(this.editForm);
    }
    /**
     * Add or remove an HTML class to the element representing the child object.
     * It's also possible to set the class to the specific child exclusively by 
     * removing it from all other children elements.
     * 
     * {@link setClass View}
     * 
     * @param {number} id - The ID of the child model object
     * @param {string} className- The class to be added/removed 
     * @param {boolean} remove - True: Remove class. False: Add class. (Default: False) 
     * @param {boolean} exclusive - True: Remove class from all other children. (Default: False)
     */

  }, {
    key: "setClass",
    value: function setClass(id, className) {
      var remove = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var exclusive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      _toConsumableArray(this.container.children).forEach(function (el) {
        var elementID = el.getAttribute('data-child-id');
        if (elementID == id) el.classList[remove ? 'remove' : 'add'](className);else if (exclusive) el.classList.remove(className);
      });
    }
  }]);

  return PopulatorView;
}(View);
/**
 * Handles the rendering and DOM manipulation for a modal element that displays the details 
 * for a specific Todo model. Can be generalized for other models that would benefit 
 * from being rendered as a single modal.
 * 
 * {@link TodoView View}
 * 
 * @extends View
 * @extends Views~View
 * @memberof Views
 */


var TodoView = /*#__PURE__*/function (_View2) {
  _inherits(TodoView, _View2);

  var _super2 = _createSuper(TodoView);

  /**
   * @param {Todo} todo  Source Todo model object
   */
  function TodoView(todo) {
    _classCallCheck(this, TodoView);

    return _super2.call(this, todo, 'Todo');
  }

  _createClass(TodoView, [{
    key: "render",
    value: function render() {
      // Generate and append element
      this.standardElement = this.standardTemplate(this.model);
      this.container.appendChild(this.standardElement);
      /**
       * The modal body is composed of a form that's pre-filled with the model data.
       * The controller handles how to update the model using user inputs into its fields.
       * @type {HTMLFormElement}
       */

      this.form = this.standardElement.querySelector('form');
    }
    /**
     * Remove modal element from the container
     */

  }, {
    key: "hide",
    value: function hide() {
      this.container.removeChild(this.standardElement);
    }
    /**
     * Add or Remove an HTML class to the modal.
     * @param {string} className - The class to be added to the modal's body
     * @param {Boolean} remove - True: Remove class. False: Add class. (Default: False)
     */

  }, {
    key: "setClass",
    value: function setClass(className) {
      var remove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.form.classList[remove ? 'remove' : 'add'](className);
    }
  }]);

  return TodoView;
}(View);
/**
 * When there are no projects in the proejct list, this renders a default element 
 * in the project container that normally holds Todo cards. This view is called by 
 * the project list controller. 
 * 
 * {@link NewAppView View}
 * @memberof Views.
 */


var NewAppView = /*#__PURE__*/function () {
  function NewAppView() {
    _classCallCheck(this, NewAppView);

    this.emptyTemplate = (0,_templates__WEBPACK_IMPORTED_MODULE_0__["default"])('Project', 'empty');
    this.container = containers['Project'];
    this.render();
  }

  _createClass(NewAppView, [{
    key: "render",
    value: function render() {
      this.container.innerHTML = '';
      this.element = this.emptyTemplate();
      this.container.appendChild(this.element);
    }
  }]);

  return NewAppView;
}();



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-family: 'Dosis', 'Helvetica Neue', sans-serif;\n    font-size: 20px;\n    font-weight: 300;\n    --light-blue: rgb(239, 242, 250);\n    --light-green: rgb(237, 248, 237);\n    --lighter-green: hsl(120, 44%, 98%);\n}\n\nform * {\n    font-family:'Dosis', 'Helvetica Neue', sans-serif; ;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    \n    display: grid;\n    grid-template-columns: 260px 1fr;\n    grid-template-rows: 100px 1fr;\n    grid-template-areas: \"header header\"\n    \"sidebar main\";\n}\n\nheader {\n    grid-area: header;\n    z-index: 2;\n    height: 100px;\n    padding: 0 20px;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    background-color: white;\n    box-shadow: 0 0 10px rgba(0,0,0,0.5);\n}\n\n#logo {\n    font-size: 2.5rem;\n    color: cornflowerblue;\n}\n\n#inspiration {\n    font-size: 1.5rem;\n}\n\n#sidebar {\n    overflow: auto;\n    grid-area: sidebar;\n    box-shadow: 0 0 8px rgba(0,0,0,0.5);\n}\n\n#projects {\n    display: flex;\n    flex-direction: column;\n}\n\n#projects .project{\n    box-sizing: border-box;\n    height: 60px;\n    padding: 5px 10px;\n    position: relative;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    color: rgb(100, 100, 100);\n    transition: all 300ms ease-out;\n    background-color: white;\n    box-shadow: inset 1px 0px 4px rgba(0,0,0,0.3);\n    outline: solid 0.5px rgb(213, 213, 213);\n    cursor: pointer;\n}\n\n#projects .project.active {\n    z-index: 1;\n    color: white;\n    position: relative;\n    padding-left: 9px;\n    box-shadow: inset 1px 0px 2px rgba(0,0,0,0.5);\n}\n\n#projects .project::after{\n    content: \"\";\n    width: 6px;\n    height:100%;\n    position: absolute;\n    right:0;\n    top:0;\n\n    transition: 300ms ease-out;\n    background-color: cornflowerblue; \n}\n\n#projects .project.active::after {\n    z-index: -1;\n    content: \"\";\n    width: 100%;\n    height:100%;\n    position: absolute;\n    right:0;\n    top:0;\n    background-color: cornflowerblue;\n}\n\n#projects .project:hover{\n    background-color: var(--light-blue);\n}\n\n#projects .project:not(.active):hover::after{\n    content: \"\";\n    width: 12px;\n    height:100%;\n    position: absolute;\n    right:0;\n    top:0;\n    background-color: cornflowerblue;\n}\n\n#projects .name{\n    line-height: 2rem;\n    flex: 1;\n}\n\n\n#projects .delete{\n    color: palevioletred;\n    cursor: pointer;\n    font-family: Arial, Helvetica, sans-serif;\n    \n    margin-right: 10px;\n    opacity: 0;\n    transition: 200ms, margin 400ms ease-out;\n}\n\n#projects .active .delete{\n    color: white;\n}\n\n#projects .project:hover .delete{\n    opacity: 0.6;\n}\n\n#projects .project:hover .delete:hover{\n    opacity: 1;\n}\n\n#projects .edit-form input{\n    color: white;\n    background-color: cornflowerblue;\n    font-style: italic;\n}\n\n#projects input {\n    padding: 5px 10px;\n    box-sizing: border-box;\n    appearance: none;\n    height: 60px;\n    width: 100%;\n\n    color: rgb(160, 160, 160);\n    box-shadow: inset 1px 0px 4px rgba(0,0,0,0.5);\n    font-size: 0.9rem;\n    outline: none;\n    border: none;\n}\n\n#projects input::placeholder {\n    font-style: italic;\n    color: rgb(196, 193, 193);\n  }\n\nmain {\n    overflow: auto;\n    padding: 30px 30px;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 350px);\n    grid-auto-rows: max-content;\n    gap: 30px;\n}\n\n.card {\n    position: relative;\n    box-sizing: border-box;\n    padding: 20px 30px;\n    height: 300px;\n    background-color: white;\n    box-shadow: 2px 2px 9px rgba(0,0,0,0.5);\n\n    display: flex;\n    flex-direction: column;\n\n    transition: 300ms;\n    cursor: pointer;\n}\n\n.card::after{\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    width:10px;\n    height: 100%;\n    background-color: cornflowerblue;\n}\n\n.card .title{\n    font-size: 1.3rem;\n    width: fit-content;\n    margin-bottom: 5px;\n    overflow: hidden;\n\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n\n    cursor: text;\n}\n\n.card .descr{\n    margin-bottom: 10px;\n    width: fit-content;\n\n    font-size: 1rem;\n    line-height: 1em;\n    height: 2em;\n\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n\n    cursor: text;\n}\n\n.card .descr:empty::after{\n    content: 'Description';\n    cursor: text;\n    font-style:italic;\n    color:rgb(160, 160, 160)\n}\n\n.card .checklist-title {\n    font-size: 0.9rem;\n    margin-bottom: 5px;\n    cursor: text;\n}\n\n.card .checklist-container{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    overflow-y: auto;\n}\n\n.card:not(#new-todo,.edit-form) .checklist-container{\n    pointer-events: none;\n}\n\n.card .checklist-item{\n    color: grey;\n    font-size: 0.9rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    list-style: square; \n    width: fit-content;\n    \n    cursor: text;\n    pointer-events: all;\n}\n\n.card .checklist-container:empty{\n    width: fit-content;\n}\n\n.card .checklist-container:empty::after {\n    margin-top: 10px;\n    content: \"Add Tasks\";\n    font-style: italic;\n    color:rgb(160, 160, 160);\n    font-size: 0.8rem;\n    cursor: text;\n}\n\n.card .button-container{\n    margin-top: auto;\n\n    display: flex;\n    justify-content: space-evenly;\n\n}\n\nbutton {\n    appearance: none;\n    border: none;\n}\n\n.button{\n    box-sizing: border-box;\n    padding: 5px;\n    font-size: 0.9rem;\n    width: 80px;\n    border-radius: 6px;\n    text-align: center;\n    color: white;\n    background-color: cornflowerblue;\n    transition: 300ms ease-in-out;\n    cursor: pointer;\n    user-select: none;\n}\n\n.button:hover{\n    background-color: rgb(90, 131, 207);\n}\n\n.button.done-toggle{\n    background-color: cornflowerblue;\n}\n\n.button.done-toggle:hover{\n    background-color: green;\n}\n\n.card.done .done-toggle{\n    background-color: green;\n}\n\n.button.delete{\n    background-color: crimson;\n}\n\n.button.delete:hover{\n    background-color: brown;\n}\n\n#reset-todo-inputs{\n    background-color: rgb(170, 170, 170);\n}\n\n#reset-todo-inputs:hover{\n    background-color: grey;\n}\n\n\n.card.done {\n    background-color: var(--light-green);\n}\n\n.card.done .title {\n    text-decoration: line-through;\n    color:rgb(80, 80, 80)\n}\n\n.card input,textarea {\n    resize: none;\n    padding: 4px 5px;\n    outline: none;\n    border: 0.3px rgb(208, 208, 208) solid;\n    border-radius: 5px;\n    \n    color: rgb(100, 100, 100);\n    font-style: italic;\n}\n\n.card input.title{\n    width: auto;\n}\n\n.card textarea.descr{\n    font-size: 0.8rem;\n    width: auto;\n}\n\n#todo-background{\n    z-index: 1;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(0,0,0,0.5);\n    position: absolute;\n}\n\n#todo-details{\n    padding: 30px 50px;\n    position: absolute;\n    top: 100px;\n    left: 200px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    background-color: white;\n    height: 60vh;\n    width: 70vw;\n\n    transition: 300ms;\n}\n\n#todo-details.done{\n    background-color: var(--lighter-green);\n}\n\n#todo-details :is(input,textarea){\n    transition-duration: 300ms;\n    background-color: white;\n}\n\n#todo-details.done :is(input,textarea){\n    background-color: var(--light-green);\n}\n\n#todo-details .title{\n    font-size: 2rem;\n    padding-left: 10px;\n}\n\n#todo-details textarea.descr{\n    padding-left: 10px;\n    font-style: normal;\n    font-size: 1.1rem;\n    height: 20%;\n    resize: none;\n}\n\n#todo-details input,textarea{\n    appearance: none;\n    color: rgb(100, 100, 100);\n    outline: none !important;\n    border-radius: 5px;\n    border: 0.5px rgb(180, 180, 180) solid;\n}\n\n#todo-details #more-details{\n    height: 50%;\n    display: flex;\n    flex:1;\n}\n\n#todo-details h3{\n    font-size: 1rem;\n}\n\n#todo-details .checklist-container{\n    font-size: 1.2rem;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#todo-details .checklist-container ul{\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n#todo-details .checklist-container input{\n    line-height: 30px;\n    padding-left: 10px;\n    font-size: 0.9rem;\n}\n\n#todo-details .dates{\n    flex:1;\n    display: flex;\n    gap: 60px;\n    align-items: center;\n    justify-content: center;\n}\n\n#todo-details .date-container{\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n#todo-details .date-container input{\n    font-size: 1rem;\n}\n\n#todo-details .date-type{\n    text-align: center;\n}\n\n#todo-details .button-container{\n    display: flex;\n    justify-content: center;\n    gap: 110px;\n    position: relative\n}\n\n#todo-details.done .done-toggle{\n    background-color: green;\n}\n\n#todo-details .button{\n    width: 110px;\n}\n\n#todo-details .save.button{\n    color: white;\n}\n\n#checklist {\n    overflow: auto;\n    height: 10rem;\n}\n\n#checklist .checklist-item {\n    display: flex;\n    align-items: center;\n}\n\n#checklist input {\n    box-sizing: border-box;\n    width:100%;\n    height: 40px;\n    margin-right: -50px;\n}\n\n#checklist .done input {\n    text-decoration: line-through;\n    background-color: var(--light-green);\n}\n\n#checklist .item-button-container {\n    display: flex;\n    gap: 5px;\n    user-select: none;\n}\n\n#checklist .item-button {\n    cursor: pointer;\n    transition: 200ms ease-out;\n}\n\n#todo-details #checklist .done-toggle {\n    font-weight: 600;\n    background-color: transparent;\n    color: grey;\n}\n\n#todo-details #checklist .done-toggle:hover {\n    color: green;\n}\n\n#todo-details #checklist .done .done-toggle {\n    background-color: transparent;\n    color: green;\n}\n\n#todo-details #checklist .delete{\n    color: crimson;\n}\n\n#todo-details #checklist .delete:hover{\n    color: brown;\n}\n\n#new-app {\n    color: cornflowerblue;\n    width: 500px;\n    font-size: 1.7rem;\n    margin-top: -14px;\n    font-style: italic;\n}\n", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAEA;IACI,kDAAkD;IAClD,eAAe;IACf,gBAAgB;IAChB,gCAAgC;IAChC,iCAAiC;IACjC,mCAAmC;AACvC;;AAEA;IACI,iDAAiD;AACrD;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,YAAY;;IAEZ,aAAa;IACb,gCAAgC;IAChC,6BAA6B;IAC7B;kBACc;AAClB;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,aAAa;IACb,eAAe;;IAEf,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;;IAEnB,uBAAuB;IACvB,oCAAoC;AACxC;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;;IAElB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;;IAE9B,yBAAyB;IACzB,8BAA8B;IAC9B,uBAAuB;IACvB,6CAA6C;IAC7C,uCAAuC;IACvC,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,6CAA6C;AACjD;;AAEA;IACI,WAAW;IACX,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,OAAO;IACP,KAAK;;IAEL,0BAA0B;IAC1B,gCAAgC;AACpC;;AAEA;IACI,WAAW;IACX,WAAW;IACX,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,OAAO;IACP,KAAK;IACL,gCAAgC;AACpC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,WAAW;IACX,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,OAAO;IACP,KAAK;IACL,gCAAgC;AACpC;;AAEA;IACI,iBAAiB;IACjB,OAAO;AACX;;;AAGA;IACI,oBAAoB;IACpB,eAAe;IACf,yCAAyC;;IAEzC,kBAAkB;IAClB,UAAU;IACV,wCAAwC;AAC5C;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;IACtB,gBAAgB;IAChB,YAAY;IACZ,WAAW;;IAEX,yBAAyB;IACzB,6CAA6C;IAC7C,iBAAiB;IACjB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;EAC3B;;AAEF;IACI,cAAc;IACd,kBAAkB;IAClB,aAAa;IACb,8CAA8C;IAC9C,2BAA2B;IAC3B,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,uCAAuC;;IAEvC,aAAa;IACb,sBAAsB;;IAEtB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,UAAU;IACV,YAAY;IACZ,gCAAgC;AACpC;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;;IAEhB,oBAAoB;IACpB,qBAAqB;IACrB,4BAA4B;IAC5B,gBAAgB;IAChB,uBAAuB;;IAEvB,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;;IAElB,eAAe;IACf,gBAAgB;IAChB,WAAW;;IAEX,oBAAoB;IACpB,qBAAqB;IACrB,4BAA4B;IAC5B,gBAAgB;IAChB,uBAAuB;;IAEvB,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,iBAAiB;IACjB;AACJ;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;;IAElB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,kBAAkB;IAClB,wBAAwB;IACxB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,gBAAgB;;IAEhB,aAAa;IACb,6BAA6B;;AAEjC;;AAEA;IACI,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,iBAAiB;IACjB,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,gCAAgC;IAChC,6BAA6B;IAC7B,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,sBAAsB;AAC1B;;;AAGA;IACI,oCAAoC;AACxC;;AAEA;IACI,6BAA6B;IAC7B;AACJ;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,sCAAsC;IACtC,kBAAkB;;IAElB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,UAAU;IACV,aAAa;IACb,YAAY;IACZ,iCAAiC;IACjC,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,uBAAuB;IACvB,YAAY;IACZ,WAAW;;IAEX,iBAAiB;AACrB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,0BAA0B;IAC1B,uBAAuB;AAC3B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,wBAAwB;IACxB,kBAAkB;IAClB,sCAAsC;AAC1C;;AAEA;IACI,WAAW;IACX,aAAa;IACb,MAAM;AACV;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,MAAM;IACN,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,UAAU;IACV;AACJ;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,UAAU;IACV,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,6BAA6B;IAC7B,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,gBAAgB;IAChB,6BAA6B;IAC7B,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;AACtB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600&display=swap');\n\n:root {\n    font-family: 'Dosis', 'Helvetica Neue', sans-serif;\n    font-size: 20px;\n    font-weight: 300;\n    --light-blue: rgb(239, 242, 250);\n    --light-green: rgb(237, 248, 237);\n    --lighter-green: hsl(120, 44%, 98%);\n}\n\nform * {\n    font-family:'Dosis', 'Helvetica Neue', sans-serif; ;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    \n    display: grid;\n    grid-template-columns: 260px 1fr;\n    grid-template-rows: 100px 1fr;\n    grid-template-areas: \"header header\"\n    \"sidebar main\";\n}\n\nheader {\n    grid-area: header;\n    z-index: 2;\n    height: 100px;\n    padding: 0 20px;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    background-color: white;\n    box-shadow: 0 0 10px rgba(0,0,0,0.5);\n}\n\n#logo {\n    font-size: 2.5rem;\n    color: cornflowerblue;\n}\n\n#inspiration {\n    font-size: 1.5rem;\n}\n\n#sidebar {\n    overflow: auto;\n    grid-area: sidebar;\n    box-shadow: 0 0 8px rgba(0,0,0,0.5);\n}\n\n#projects {\n    display: flex;\n    flex-direction: column;\n}\n\n#projects .project{\n    box-sizing: border-box;\n    height: 60px;\n    padding: 5px 10px;\n    position: relative;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    color: rgb(100, 100, 100);\n    transition: all 300ms ease-out;\n    background-color: white;\n    box-shadow: inset 1px 0px 4px rgba(0,0,0,0.3);\n    outline: solid 0.5px rgb(213, 213, 213);\n    cursor: pointer;\n}\n\n#projects .project.active {\n    z-index: 1;\n    color: white;\n    position: relative;\n    padding-left: 9px;\n    box-shadow: inset 1px 0px 2px rgba(0,0,0,0.5);\n}\n\n#projects .project::after{\n    content: \"\";\n    width: 6px;\n    height:100%;\n    position: absolute;\n    right:0;\n    top:0;\n\n    transition: 300ms ease-out;\n    background-color: cornflowerblue; \n}\n\n#projects .project.active::after {\n    z-index: -1;\n    content: \"\";\n    width: 100%;\n    height:100%;\n    position: absolute;\n    right:0;\n    top:0;\n    background-color: cornflowerblue;\n}\n\n#projects .project:hover{\n    background-color: var(--light-blue);\n}\n\n#projects .project:not(.active):hover::after{\n    content: \"\";\n    width: 12px;\n    height:100%;\n    position: absolute;\n    right:0;\n    top:0;\n    background-color: cornflowerblue;\n}\n\n#projects .name{\n    line-height: 2rem;\n    flex: 1;\n}\n\n\n#projects .delete{\n    color: palevioletred;\n    cursor: pointer;\n    font-family: Arial, Helvetica, sans-serif;\n    \n    margin-right: 10px;\n    opacity: 0;\n    transition: 200ms, margin 400ms ease-out;\n}\n\n#projects .active .delete{\n    color: white;\n}\n\n#projects .project:hover .delete{\n    opacity: 0.6;\n}\n\n#projects .project:hover .delete:hover{\n    opacity: 1;\n}\n\n#projects .edit-form input{\n    color: white;\n    background-color: cornflowerblue;\n    font-style: italic;\n}\n\n#projects input {\n    padding: 5px 10px;\n    box-sizing: border-box;\n    appearance: none;\n    height: 60px;\n    width: 100%;\n\n    color: rgb(160, 160, 160);\n    box-shadow: inset 1px 0px 4px rgba(0,0,0,0.5);\n    font-size: 0.9rem;\n    outline: none;\n    border: none;\n}\n\n#projects input::placeholder {\n    font-style: italic;\n    color: rgb(196, 193, 193);\n  }\n\nmain {\n    overflow: auto;\n    padding: 30px 30px;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 350px);\n    grid-auto-rows: max-content;\n    gap: 30px;\n}\n\n.card {\n    position: relative;\n    box-sizing: border-box;\n    padding: 20px 30px;\n    height: 300px;\n    background-color: white;\n    box-shadow: 2px 2px 9px rgba(0,0,0,0.5);\n\n    display: flex;\n    flex-direction: column;\n\n    transition: 300ms;\n    cursor: pointer;\n}\n\n.card::after{\n    content: \"\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    width:10px;\n    height: 100%;\n    background-color: cornflowerblue;\n}\n\n.card .title{\n    font-size: 1.3rem;\n    width: fit-content;\n    margin-bottom: 5px;\n    overflow: hidden;\n\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n\n    cursor: text;\n}\n\n.card .descr{\n    margin-bottom: 10px;\n    width: fit-content;\n\n    font-size: 1rem;\n    line-height: 1em;\n    height: 2em;\n\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n\n    cursor: text;\n}\n\n.card .descr:empty::after{\n    content: 'Description';\n    cursor: text;\n    font-style:italic;\n    color:rgb(160, 160, 160)\n}\n\n.card .checklist-title {\n    font-size: 0.9rem;\n    margin-bottom: 5px;\n    cursor: text;\n}\n\n.card .checklist-container{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    overflow-y: auto;\n}\n\n.card:not(#new-todo,.edit-form) .checklist-container{\n    pointer-events: none;\n}\n\n.card .checklist-item{\n    color: grey;\n    font-size: 0.9rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    list-style: square; \n    width: fit-content;\n    \n    cursor: text;\n    pointer-events: all;\n}\n\n.card .checklist-container:empty{\n    width: fit-content;\n}\n\n.card .checklist-container:empty::after {\n    margin-top: 10px;\n    content: \"Add Tasks\";\n    font-style: italic;\n    color:rgb(160, 160, 160);\n    font-size: 0.8rem;\n    cursor: text;\n}\n\n.card .button-container{\n    margin-top: auto;\n\n    display: flex;\n    justify-content: space-evenly;\n\n}\n\nbutton {\n    appearance: none;\n    border: none;\n}\n\n.button{\n    box-sizing: border-box;\n    padding: 5px;\n    font-size: 0.9rem;\n    width: 80px;\n    border-radius: 6px;\n    text-align: center;\n    color: white;\n    background-color: cornflowerblue;\n    transition: 300ms ease-in-out;\n    cursor: pointer;\n    user-select: none;\n}\n\n.button:hover{\n    background-color: rgb(90, 131, 207);\n}\n\n.button.done-toggle{\n    background-color: cornflowerblue;\n}\n\n.button.done-toggle:hover{\n    background-color: green;\n}\n\n.card.done .done-toggle{\n    background-color: green;\n}\n\n.button.delete{\n    background-color: crimson;\n}\n\n.button.delete:hover{\n    background-color: brown;\n}\n\n#reset-todo-inputs{\n    background-color: rgb(170, 170, 170);\n}\n\n#reset-todo-inputs:hover{\n    background-color: grey;\n}\n\n\n.card.done {\n    background-color: var(--light-green);\n}\n\n.card.done .title {\n    text-decoration: line-through;\n    color:rgb(80, 80, 80)\n}\n\n.card input,textarea {\n    resize: none;\n    padding: 4px 5px;\n    outline: none;\n    border: 0.3px rgb(208, 208, 208) solid;\n    border-radius: 5px;\n    \n    color: rgb(100, 100, 100);\n    font-style: italic;\n}\n\n.card input.title{\n    width: auto;\n}\n\n.card textarea.descr{\n    font-size: 0.8rem;\n    width: auto;\n}\n\n#todo-background{\n    z-index: 1;\n    height: 100vh;\n    width: 100vw;\n    background-color: rgba(0,0,0,0.5);\n    position: absolute;\n}\n\n#todo-details{\n    padding: 30px 50px;\n    position: absolute;\n    top: 100px;\n    left: 200px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    background-color: white;\n    height: 60vh;\n    width: 70vw;\n\n    transition: 300ms;\n}\n\n#todo-details.done{\n    background-color: var(--lighter-green);\n}\n\n#todo-details :is(input,textarea){\n    transition-duration: 300ms;\n    background-color: white;\n}\n\n#todo-details.done :is(input,textarea){\n    background-color: var(--light-green);\n}\n\n#todo-details .title{\n    font-size: 2rem;\n    padding-left: 10px;\n}\n\n#todo-details textarea.descr{\n    padding-left: 10px;\n    font-style: normal;\n    font-size: 1.1rem;\n    height: 20%;\n    resize: none;\n}\n\n#todo-details input,textarea{\n    appearance: none;\n    color: rgb(100, 100, 100);\n    outline: none !important;\n    border-radius: 5px;\n    border: 0.5px rgb(180, 180, 180) solid;\n}\n\n#todo-details #more-details{\n    height: 50%;\n    display: flex;\n    flex:1;\n}\n\n#todo-details h3{\n    font-size: 1rem;\n}\n\n#todo-details .checklist-container{\n    font-size: 1.2rem;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#todo-details .checklist-container ul{\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n#todo-details .checklist-container input{\n    line-height: 30px;\n    padding-left: 10px;\n    font-size: 0.9rem;\n}\n\n#todo-details .dates{\n    flex:1;\n    display: flex;\n    gap: 60px;\n    align-items: center;\n    justify-content: center;\n}\n\n#todo-details .date-container{\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n#todo-details .date-container input{\n    font-size: 1rem;\n}\n\n#todo-details .date-type{\n    text-align: center;\n}\n\n#todo-details .button-container{\n    display: flex;\n    justify-content: center;\n    gap: 110px;\n    position: relative\n}\n\n#todo-details.done .done-toggle{\n    background-color: green;\n}\n\n#todo-details .button{\n    width: 110px;\n}\n\n#todo-details .save.button{\n    color: white;\n}\n\n#checklist {\n    overflow: auto;\n    height: 10rem;\n}\n\n#checklist .checklist-item {\n    display: flex;\n    align-items: center;\n}\n\n#checklist input {\n    box-sizing: border-box;\n    width:100%;\n    height: 40px;\n    margin-right: -50px;\n}\n\n#checklist .done input {\n    text-decoration: line-through;\n    background-color: var(--light-green);\n}\n\n#checklist .item-button-container {\n    display: flex;\n    gap: 5px;\n    user-select: none;\n}\n\n#checklist .item-button {\n    cursor: pointer;\n    transition: 200ms ease-out;\n}\n\n#todo-details #checklist .done-toggle {\n    font-weight: 600;\n    background-color: transparent;\n    color: grey;\n}\n\n#todo-details #checklist .done-toggle:hover {\n    color: green;\n}\n\n#todo-details #checklist .done .done-toggle {\n    background-color: transparent;\n    color: green;\n}\n\n#todo-details #checklist .delete{\n    color: crimson;\n}\n\n#todo-details #checklist .delete:hover{\n    color: brown;\n}\n\n#new-app {\n    color: cornflowerblue;\n    width: 500px;\n    font-size: 1.7rem;\n    margin-top: -14px;\n    font-style: italic;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/controller.js");
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/style.css */ "./src/assets/style.css");


var App = new _controller__WEBPACK_IMPORTED_MODULE_0__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map