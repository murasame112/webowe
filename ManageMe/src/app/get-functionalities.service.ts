import { Injectable } from '@angular/core';
import { Functionality } from 'src/models/functionality.model';
import { Task } from 'src/models/task.model';
import { GetTasksService } from './get-tasks.service';

@Injectable({
  providedIn: 'root'
})
export class GetFunctionalitiesService {

  constructor(private getTasksService: GetTasksService) { }

  // returns array of all functionalities
  getFunctionalities(){
    if(localStorage.length == 0){
      return [];
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
        const fun: Functionality = JSON.parse(value as string);
        functionalities.push(fun);
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

  // returns array of tasks assigned to functionality with param functionalityKey
  getTasksForFunctionality(functionalityKey: string){
    let allTasks = this.getTasksService.getTasks();
    let tasks: Array<Task> = [];
    tasks = allTasks.filter(element => element.functionalityKey == functionalityKey);
    return tasks;
  }
}
