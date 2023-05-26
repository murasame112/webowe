import { Injectable } from '@angular/core';
import { Functionality } from 'src/models/functionality.model';

@Injectable({
  providedIn: 'root'
})
export class GetFunctionalitiesService {

  constructor() { }

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
}
