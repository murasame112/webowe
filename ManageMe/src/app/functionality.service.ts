import { Injectable } from '@angular/core';
import { Functionality } from 'src/models/functionality.model';
import { priority } from 'src/enums/priority.enum';
import { status } from 'src/enums/status.enum';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionalityService {

  constructor(private taskService: TaskService) { }

  public saveFunctionality(functionality: Functionality) {

    //TODO: jesli obiekt z tym samym key juz istnieje, to go usunac (ewentualnie sprawdzic czy setItem automatycznie nadpisuje)
    let key = 'undefined_key';
    if(typeof functionality.key == 'string'){
      key = functionality.key;
    }
    let functionalityJson = JSON.stringify(functionality);
    localStorage.setItem(key, functionalityJson);
  }

  // returns array of all functionalities
  getFunctionalities(){
    if(localStorage.length == 0){
      // TODO: przemyslec jak to rozwiazac inaczej niz return false
        //return false;
    }

    const functionalities: Array<Functionality> = [];

    let storage: any = {},
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        storage[keys[i]] =  localStorage.getItem(keys[i]);
    }
    for (const [key, value] of Object.entries(storage)) {
      if(key.startsWith('f')){
        // TODO: wymyslic jak sie pozbyc ponizszego if'a
        if(typeof value == 'string'){
          const fun: Functionality = JSON.parse(value);
          functionalities.push(fun);
        }
      }

    }
    return functionalities;
  }

  // returns functionality by key
  getFunctionalityByKey(key: string){
    const functionalities:Array<Functionality> = this.getFunctionalities();
    let found:Functionality|undefined = functionalities.find(element => element.key == key);
    return found as Functionality;
  }


  // creates functionality (just like constructor)
  createFunctionality(name: string, description: string, priority: string, projectKey: string, ownerKey: string, status: string){
    let functionality: Functionality = {
      key: undefined,
      name: undefined,
      description: undefined,
      priority: undefined,
      projectKey: undefined,
      ownerKey: undefined,
      status: undefined,
    };

    let key = 'f';
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
      if(key.startsWith('f')){
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

    functionality.key = key;
    functionality.name = name;
    functionality.description = description;
    functionality.priority = priority;
    functionality.projectKey = projectKey;
    functionality.ownerKey = ownerKey;
    functionality.status = status;

    return functionality;

  }

  getFunctionalitiesForProject(projectKey: string){
    let allFunctionalities = this.getFunctionalities();
    let functionalities: Array<Functionality> = [];
    allFunctionalities.forEach((element) => {
      if(element.projectKey == projectKey){
        functionalities.push(element);
      }
    })
    return functionalities;
  }


  // creates few default functionalities for testing
  createDefault(){
    let f1 = this.createFunctionality('Przygotowanie mutalisków', 'należy przygotować wystarczającą ilość mutalisków by były gotowe do przeprowadzenia ataku', 'high', 'p1', 'u1', 'doing');
    this.saveFunctionality(f1);
    let f2 = this.createFunctionality('Przeprowadzenie akcji', 'atak mutaliskami na bazę wroga', 'medium', 'p1', 'u2', 'todo');
    this.saveFunctionality(f2);
    let f3 = this.createFunctionality('Budowa infrastruktury', 'przygotowanie się do masowej produkcji myśliwców', 'medium', 'p2', 'u2', 'done');
    this.saveFunctionality(f3);
    let f4 = this.createFunctionality('Produkcja myśliwców banshee', 'produkcja banshee i ulepszeń do nich', 'high', 'p2', 'u1', 'doing');
    this.saveFunctionality(f4);
    let f5 = this.createFunctionality('Budowa bazy', 'aspekt przyjmuje, że baza jest bezpieczna i nie należy martwić się atakiem', 'medium', 'p3', 'u3', 'todo');
    this.saveFunctionality(f5);
    let f6 = this.createFunctionality('Fortyfikacja bazy', 'przygotowanie bazy do odpierania ataków', 'high', 'p3', 'u3', 'todo');
    this.saveFunctionality(f6);

  }

  // deletes functionality
  deleteFunctionality(key: string){
    localStorage.removeItem(key);
  }

  // fires when satus of functionality gets changed - changes it's tasks to 'done' if functionality is 'done'
  statusChanged(key: string, newStatus: string){
    let fun = this.getFunctionalityByKey(key);
    fun.status = newStatus;
    if(fun.status == 'done'){
      let tasks = this.taskService.getTasksForFunctionality(fun.key as string);
      tasks.forEach((element) => {
        if(element.status != 'done'){
          element.status = 'done';
          this.taskService.saveTask(element);
        }
      })
    }
  }




}
