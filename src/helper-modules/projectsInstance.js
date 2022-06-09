import projectList from "../storage-classes/projectList.js";
import convertJSON from "./convertJSON.js";

const projects = (!localStorage.projects) ? new projectList() : convertJSON(localStorage.projects);

export default projects
