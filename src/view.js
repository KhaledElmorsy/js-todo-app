import templates from "./templates"

const containers = {
    get Checklist() {console.log('hey'); return document.getElementById('checklist')},
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
    render(activeObj = undefined) {
        this.container.innerHTML = ''; // Clear container

        const list = this.model.list;
        
        this.getActive(list).forEach( childObj => {
            const standardElement = this.standardTemplate(childObj)
            if (activeObj && (childObj === activeObj)){
                standardElement.classList.add('active')
            }

            this.container.append(standardElement)
            })

        this.addForm = this.container.appendChild(this.addFormTemplate());  // Append 'Add "model"' element 
    }

    editMode(id) {
        const elementToEdit = this.container.querySelector(`[data-child-id="${id}"]`);
        this.editForm = this.editFormTemplate(this.model.list[id]);
        elementToEdit.replaceWith(this.editForm);
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

}

const views = {
    populator: PopulatorView,
    todo: TodoView
}

export default views
