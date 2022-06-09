import projectList from "./storage-classes/projectList.js"
import convertJSON from "./helper-modules/convertJSON.js";
import DOM from "./dom-modules/domModules.js";
import makeEl from "./helper-modules/makeElement.js";

import './assets/style.css'


const projects = (!localStorage.projects) ? new projectList() : convertJSON(localStorage.projects);

if (!projects._projects.length){
    projects.addProject('Project 1')
    projects.getProject(0).addTodo('Todo1','Todo1 Desc')
    projects.getProject(0).state.toggleStatus();
    projects.getProject(0).state.priority = 5;
    projects.getProject(0).getTodo(0).checklist.addItem('Checklist Item1')
    // projects.getProject(0).getTodo(0).state.disable()
    projects.getProject(0).getTodo(0).checklist.getItem(0).state.toggleStatus()

    projects.addProject('Project 2')
    projects.getProject(1).state.disable();
    projects.addProject('Project 3')
    projects.addProject('Project 4')
    localStorage.projects = JSON.stringify(projects)
}

DOM.pageLoad(projects)
