import templates from "./templates"

const containers = {
    project: document.querySelector('main'),
    projectList: document.getElementById('projects')
}


class View {
    constructor(model) {
        if (this.constructor === View) throw new Error('Abstract Class');

        this.model = model;
        let modelType = model.constructor.name;
        this.container = containers[modelType];
        this.template = template( modelType, 'standard');
    }

    // Model objects aren't 'removed' but disabled, this function returns active models
    getActive(modelList) { return modelList.filter(model => model.state.visibility) }
    
    // Default rendering method. AKA Populating
    render(chidlren) {
        this._container.innerHTML = ''; // Clear container

        this.getActive(chidlren).forEach(childObj => 
            this._container.append(this._template(childObj)))
    }
}


class ProjectView extends View {
    constructor(project) {
        super(project);
        this.addForm = templates('project', 'add');
    }

    render() {
        super.render(this.model.todoList);
        this.container.append(this.addForm());
    }
}


class ProjectListView extends View {
    constructor(projectList) {
        super(projectList);
        this.addForm = templates('projectList', 'add');
    }

    render() {
       super.render(this.model.projectList);
       this._container.append(this.Form);
    }
}


const views = {
    todo: ProjectView,
    project: ProjectListView
}

export default views
