import addProject from "./addProject.js"
import projectsDOM from "../dom-elements/projectsDOM.js"
import selectProject from "./selectProject.js"

export default function setProjectEvents(){
    const newProject = document.getElementById('new-project-field')
    newProject.addEventListener('keydown',(e)=>{
        if (e.key === 'Enter') addProject(e.target.value)
    })

    for (let element of projectsDOM.children){
        element.addEventListener('click',selectProject);
    }
    
}
