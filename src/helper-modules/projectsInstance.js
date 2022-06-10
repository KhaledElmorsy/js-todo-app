import projectList from "../storage-classes/projectList.js";
import convertJSON from "./storage-modules/convertJSON.js";

/** 
  *  Singleton instance of project list used throughout different modules
  *  Checks local storage and imports if avaiable, otherwise create new project list obj
  */
const projects = (!localStorage.projects) ? new projectList() : convertJSON(localStorage.projects);

// Same instance can be imported in relevant modules. Really useful!
export default projects
