import project from "./project.js"

export default class projectList {
    constructor() {
        this._projects = []
    }

    add(name, id = null) {
        id = (id)? id : this._projects.length;
        this._projects.push(new project(id, name))
    }

    getProject(id) { return this._projects[id] }
    get length() { return this._projects.length }
    
    getActive(){ return this._projects.filter(project=>project.state.visibility)}

    getSortedActive(){ 
        return this.getActive().sort((a,b)=>{
            return b.id - a.id
        })
    }
}
