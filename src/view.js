import templates from "./templates"

const containers = {
    Todo: document.body,
    Project: document.querySelector('main'),
    ProjectList: document.getElementById('projects')
}


class PopulatorView {
    constructor(model, type) {
        this.model = model;

        this.container = containers[type];
        this.formTemplate = templates(type, 'add')
        this.standardTemplate = templates(type, 'standard');
        this.editForm = templates(type,'edit');
    }

    // Model objects aren't 'removed' but disabled, this function returns active models
    getActive(list) { return list.filter(model => model.visible) }

    // Default rendering method. AKA Populating
    render() {
        this.container.innerHTML = ''; // Clear container

        const list = this.model.list;

        this.getActive(list).forEach(childObj =>
            this.container.append(this.standardTemplate(childObj)))  // Append Elements

        this.form = this.container.appendChild(this.formTemplate());  // Append 'Add "model"' element 
    }

    editMode(id) {
        const elementToEdit = this.container.querySelector(`[data-child-id="${id}"]`);
        const filledEditForm = this.editForm(this.model.list[id]);
        console.log(this.model.list[id])
        elementToEdit.replaceWith(filledEditForm);
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
        console.log(this.standardElement)
        this.container.removeChild(this.standardElement)
    }

    refresh() {
        // this.standardElement = this.standardTemplate(this.model) 
    }
}

const views = {
    populator: PopulatorView,
    todo: TodoView
}

export default views
