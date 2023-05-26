import { Injectable } from '@angular/core';
import { Functionality } from 'src/models/functionality.model';
import { Project } from 'src/models/project.model';
import { GetFunctionalitiesService } from './get-functionalities.service';

@Injectable({
  providedIn: 'root'
})
export class GetProjectsService {

  constructor(private getFunctionalitiesService: GetFunctionalitiesService) { }

  // returns array of all projects
  getProjects(){
    if(localStorage.length == 0){
      return [];
    }

    const projects: Array<Project> = [];

    let storage: any = {},
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        storage[keys[i]] =  localStorage.getItem(keys[i]);
    }
    for (const [key, value] of Object.entries(storage)) {
      if(key.startsWith('p')){ 
        const prj: Project = JSON.parse(value as string);
        projects.push(prj);
      }

    }
    return projects;
  }

  // returns project marked as active
  getActiveProject(){
    const projects:Array<Project> = this.getProjects();
    let found:Project|undefined = projects.find(element => element.active == true);
    return found as Project;
  }

  // returns project by key
  getProjectByKey(key: string){
    const projects:Array<Project> = this.getProjects();
    let found:Project|undefined = projects.find(element => element.key == key);
    return found as Project;
  }


  getFunctionalitiesForProject(projectKey: string){
    let allFunctionalities = this.getFunctionalitiesService.getFunctionalities();
    let functionalities: Array<Functionality> = [];
    allFunctionalities.forEach((element) => {
      if(element.projectKey == projectKey){
        functionalities.push(element);
      }
    })
    return functionalities;
  }
}
