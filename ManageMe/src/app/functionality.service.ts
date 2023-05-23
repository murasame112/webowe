import { Injectable } from '@angular/core';
import { Functionality } from 'src/models/functionality.model';
import { priority } from 'src/enums/priority.enum';
import { status } from 'src/enums/status.enum';

@Injectable({
  providedIn: 'root'
})
export class FunctionalityService {

  constructor() { }

  public saveFunctionality(functionality: Functionality) {

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
    //TODO: zbiera wszystkie funkcjonalnosci dla danego projektu
    // zwraca Array<Functionality> zapewne?
  }


  // creates few default functionalities for testing
  createDefault(){
    let f1 = this.createFunctionality('funkcjonalnosc 1', 'opis tejze funkcjonalnsoci', 'high', 'p1', 'u1', 'todo');
    this.saveFunctionality(f1);
    let f2 = this.createFunctionality('funkcjonalnosc 2', 'opis tejze funkcjonalnsoci', 'low', 'p1', 'u1', 'todo');
    this.saveFunctionality(f2);
    let f3 = this.createFunctionality('to do innego projektu', 'opis tejze 3funkcjonalnsoci', 'high', 'p2', 'u2', 'done');
    this.saveFunctionality(f3);
    let f4 = this.createFunctionality('jakas funkcjonalnosc', 'nikt tego nie czyta', 'medium', 'p3', 'u1', 'doing');
    this.saveFunctionality(f4);
    let f5 = this.createFunctionality('f5 f5 f5', 'f5 opis', 'medium', 'p4', 'u2', 'todo');
    this.saveFunctionality(f5);

  }

  // deletes functionality
  deleteFunctionality(key: string){
    localStorage.removeItem(key);
  }

  statusChanged(key: string){
    // get func by key
    // change status
    // if func 'done' -> // if func has tasks that are not 'done' -> change all tasks to 'done'
  }




}
