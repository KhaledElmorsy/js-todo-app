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
        this.addForm = templates(viewType, 'add')
        this.template = templates(viewType, 'standard');
    }

    // Model objects aren't 'removed' but disabled, this function returns active models
    getActive(list) { return list.filter(model => model.visible) }

    // Default rendering method. AKA Populating
    render(list) {
        this.container.innerHTML = ''; // Clear container

        this.getActive(list).forEach(childObj =>
            this.container.append(this.template(childObj)))  // Append Elements

        this.container.append(this.addForm());  // Append 'Add "model"' element 
    }
}


class ProjectView extends View {
    constructor(project) {
        super(project);
    }

    render() {
        super.render(this.model.list);
    }
}


class ProjectListView extends View {
    constructor(projectList) {
        super(projectList);
    }

    render() {
        super.render(this.model.list);
    }
}


const views = {
    project: ProjectView,
    projectList: ProjectListView
}

export default views
