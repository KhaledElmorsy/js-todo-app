import templates from "./templates"

const containers = {
    get Checklist() { return document.getElementById('checklist')},
    get Todo() { return document.body},
    get Project() { return document.querySelector('main')},
    get ProjectList() { return document.getElementById('projects')},
}


class PopulatorView {
    constructor(model, type) {
        this.model = model;
        this.container = containers[type];
        this.addFormTemplate = templates(type, 'add')
        this.standardTemplate = templates(type, 'standard');
        this.editFormTemplate = templates(type,'edit');
    }

    // Model objects aren't 'removed' but disabled, this function returns active models
    getActive(list) { return list.filter(model => model.visible) }

    // Default rendering method. AKA Populating
    render() {
        this.container.innerHTML = ''; // Clear container

        const list = this.model.list;
        
        this.getActive(list).forEach( childObj => {
            const standardElement = this.standardTemplate(childObj)
            this.container.appendChild(standardElement)
        })
        
        this.addForm = this.container.appendChild(this.addFormTemplate());  // Append 'Add "model"' element 
    }

    editMode(id) {
        const elementToEdit = this.container.querySelector(`[data-child-id="${id}"]`);
        this.editForm = this.editFormTemplate(this.model.list[id]);
        elementToEdit.replaceWith(this.editForm);
    }

    /**
     * Add or remove an HTML class to the element representing the child object.
     * It's also possible to set the class to the specific child exclusively by 
     * removing it from all other children.
     * @param {number} id - The ID of the child model object
     * @param {String} className- The class to be added/removed 
     * @param {Boolean} remove - True: Remove class. False: Add class. (Default: False) 
     * @param {Boolean} exclusive - True: Remove class from all other children. (Default: False)
     */
    setClass(id, className, remove = false, exclusive = false) {
        [...this.container.children].forEach(el => {
            const elementID = el.getAttribute('data-child-id')
            if (elementID == id) 
                el.classList[(remove? 'remove' : 'add')](className)
            else
                if (exclusive) el.classList.remove(className)
            })
    }
}

class TodoView {
    constructor(todo) {
        this.model = todo;
        this.container = containers['Todo'];
        this.standardTemplate = templates('Todo','standard')
    }

    render() {
        this.standardElement = this.standardTemplate(this.model) 
        this.container.appendChild(this.standardElement)
        this.form = this.standardElement.querySelector('form')
    }

    hide() {
        this.container.removeChild(this.standardElement)
    }

    setClass(className, remove = false) {
        this.form.classList[(remove? 'remove' : 'add')](className)
    }
}

class NewAppView {
    constructor(){
        this.emptyTemplate = templates('Project','empty');
        this.container = containers['Project'];
        this.render();
    }

    render() {
        this.container.innerHTML = '';
        this.element = this.emptyTemplate()
        this.container.appendChild(this.element)
    }
}

const views = {
    populator: PopulatorView,
    todo: TodoView,
    new: NewAppView,
}

export default views
