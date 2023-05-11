import { Injectable } from '@angular/core';
import {Project} from 'src/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  public saveProject(project: Project) {

    //zrzucanie w json
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
    let projectJson = JSON.stringify(project);
    localStorage.setItem(key, projectJson);
  }

  
  getProjects(){
    if(localStorage.length == 0){
        //return false;
    }  
    
    const projects = [];
    
    let storage: any = {},
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        storage[keys[i]] =  localStorage.getItem(keys[i]);
    }
    for (const [key, value] of Object.entries(storage)) {
      if(key.startsWith('p')){
        projects.push(value);
      }
      
    }
    return projects;
  }
  
  createProject(name: string, description: string, active: boolean){
    let project: Project = {
      name: undefined,
      description: undefined,
      active: undefined,
    };
    project.name = name;
    project.description = description;
    project.active = active;

    return project;

  }

  createDefault(){
    let p1 = this.createProject('pierwszy projekt', 'opis pierwszego projektu', false);
    let p2 = this.createProject('drugi projekt', 'opis drugiego projektu', true);
    let p3 = this.createProject('trzeci projekcik', 'opis3', false);
    let p4 = this.createProject('newNewNewNewNew project', 'awangardowy opis czwartego projektu', false);
    
    this.saveProject(p1);
    this.saveProject(p2);
    this.saveProject(p3);
    this.saveProject(p4);
  }

  

}
