import { Injectable } from '@angular/core';
import {Project} from 'src/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  // saves project to local storage
  public saveProject(project: Project) {
    let key = 'undefined_key';
    if(typeof project.key == 'string'){
      key = project.key;
    }
    let projectJson = JSON.stringify(project);
    localStorage.setItem(key, projectJson);
  }

  // returns array of all projects
  getProjects(){
    if(localStorage.length == 0){
      // TODO: przemyslec jak to rozwiazac inaczej niz return false
        //return false;
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
        // TODO: wymyslic jak sie pozbyc ponizszego if'a
        if(typeof value == 'string'){
          const prj: Project = JSON.parse(value);
          projects.push(prj);
        }
      }
      
    }
    return projects;
  }

  // returns project marked as active
  getActiveProject(){
    const projects:Array<Project> = this.getProjects();
    let found:Project|undefined = projects.find(element => element.active == true);
    return found;
  }
  
  // creates project (just like constructor)
  createProject(name: string, description: string, active: boolean){
    let project: Project = {
      key: undefined,
      name: undefined,
      description: undefined,
      active: undefined,
    };
    
    let key = 'p';
    let highest = '';
    let highestId = 0;
    let newHighestId = 0;
    let storage: any = {},
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        storage[keys[i]] =  localStorage.getItem(keys[i]);
    }
    for (const [key, value] of Object.entries(storage)) {
      if(key.startsWith('p')){
        highest = key;
        highest = highest.slice(1);
        newHighestId = parseInt(highest, 10);
        if(newHighestId > highestId){
          highestId = newHighestId;
        }      
      }
      
    }
    highestId++;
    key += highestId;
    project.key = key;
    project.name = name;
    project.description = description;
    project.active = active;

    return project;

  }

  // creates few default projects for testing
  createDefault(){
    let p1 = this.createProject('pierwszy projekt', 'opis pierwszego projektu', false);
    this.saveProject(p1);
    let p2 = this.createProject('drugi projekt', 'opis drugiego projektu', true);
    this.saveProject(p2);
    let p3 = this.createProject('trzeci projekcik', 'opis3', false);
    this.saveProject(p3);
    let p4 = this.createProject('newNewNewNewNew project', 'awangardowy opis czwartego projektu', false);
    this.saveProject(p4);
    
  }

  

}
