import { Injectable } from '@angular/core';
import {Project} from 'src/models/project.model';
import { GetProjectsService } from './get-projects.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private getProjectsService: GetProjectsService) { }

  // TODO: Fajnie byłoby ugoólnić te serwisy chyba, żeby był jeden do obsługi tego - wtedy nie trzebaby robić funkcji saveProject, save Functionality, saveTask, save...

  // saves project to local storage
  public saveProject(project: Project) {
    //TODO: jesli obiekt z tym samym key juz istnieje, to go usunac (ewentualnie sprawdzic czy setItem automatycznie nadpisuje)
    let key = 'undefined_key';
    if(typeof project.key == 'string'){
      key = project.key;
    }
    let projectJson = JSON.stringify(project);
    localStorage.setItem(key, projectJson);
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
    let p1 = this.createProject('Atak bazy terrana mutaliskami', 'Celem jest zaprowadzenie dywersji, by mutaliski mogły zaatakować czułe punkty bazy terrana', true);
    this.saveProject(p1);
    let p2 = this.createProject('Przygotowanie myśliwców banshee do operacji', 'Trzeba wyprodukować dwie banshee i zdobyć kluczowe ulepszenia', false);
    this.saveProject(p2);
    let p3 = this.createProject('Rozpoczęcie wydobycia w czwartej bazie', 'Zbudowanie i ufortyfikowanie czwartej bazy', false);
    this.saveProject(p3);

  }

  // deletes project by given key
  deleteProject(key: string){
      localStorage.removeItem(key);
  }

  setProjectAsActive(key: string){
    let oldActive = this.getProjectsService.getActiveProject();
    oldActive.active = false;
    let project = this.getProjectsService.getProjectByKey(key);
    project.active = true;
    this.saveProject(oldActive);
    this.saveProject(project);
    
  }



}
