import templates from "./templates"

const containers = {
    Project: document.querySelector('main'),
    ProjectList: document.getElementById('projects')
}


class View {
    constructor(model) {
        if (this.constructor === View) throw new Error('Abstract Class');

        this.model = model;

        const viewType = this.constructor.name.replace('View', ''); // ProjectView -> Project
        this.container = containers[viewType];
        this.formTemplate = templates(viewType, 'add')
        this.standardTemplate = templates(viewType, 'standard');
        this.editForm = templates(viewType,'edit');
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
}


class ProjectView extends View {
    constructor(project) {
        super(project);
    }

    render() {
        super.render();
    }

    editMode(id) {
        const elementToEdit = this.container.querySelector(`[data-child-id="${id}"]`);
        const filledEditForm = this.editForm(this.model.list[id]);
        elementToEdit.replaceWith(filledEditForm);
    }
}


class ProjectListView extends View {
    constructor(projectList) {
        super(projectList);
    }

    render() {
        super.render();
    }
}


const views = {
    project: ProjectView,
    projectList: ProjectListView
}

export default views
