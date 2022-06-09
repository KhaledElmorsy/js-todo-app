import projects from "./projectsInstance.js"

export default function saveProjects(){
    localStorage.projects = JSON.stringify(projects)
}
