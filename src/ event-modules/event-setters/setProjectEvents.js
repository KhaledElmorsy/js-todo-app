import addProject from "../addProject.js"
import elements from "../../dom-elements/dom-elements.js"
import selectProject from "../selectProject.js"

const projectsContainer = elements.containers.projectsContainer

export default function setProjectEvents(){
    const newProject = document.getElementById('new-project-field')

    newProject.addEventListener('keydown',(e)=>{
        if (e.key === 'Enter') addProject(e.target.value)
    })

    for (let element of projectsContainer.children){
        if(element.tagName==='P') element.addEventListener('click',selectProject);
    }
    
}
