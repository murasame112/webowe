import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionalityService {

  constructor() { }

  
  public saveFunctionality(value: string) {
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
    localStorage.setItem(key, value);
  }

  
  getFunctionalities(){
    if(localStorage.length == 0){
        //return false;
    }  
    
    const functionalities = [];
    
    let storage: any = {},
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        storage[keys[i]] =  localStorage.getItem(keys[i]);
    }
    for (const [key, value] of Object.entries(storage)) {
      if(key.startsWith('f')){
        functionalities.push(value);
      }
      
    }
    return functionalities;
  }
}
