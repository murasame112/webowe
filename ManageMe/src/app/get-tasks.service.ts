import { Injectable } from '@angular/core';
import { Task } from 'src/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class GetTasksService {

  constructor() { }

  // returns array of all tasks
  getTasks(){
    if(localStorage.length == 0){
      // TODO: przemyslec jak to rozwiazac inaczej niz return false
        //return false;
    }

    const tasks: Array<Task> = [];

    let storage: any = {},
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        storage[keys[i]] =  localStorage.getItem(keys[i]);
    }
    for (const [key, value] of Object.entries(storage)) {
      if(key.startsWith('t')){
        // TODO: wymyslic jak sie pozbyc ponizszego if'a
        if(typeof value == 'string'){
          const tsk: Task = JSON.parse(value);
          tasks.push(tsk);
        }
      }

    }
    return tasks;
  }

  getTasksForFunctionality(functionalityKey: string){
    let allTasks = this.getTasks();
    let tasks: Array<Task> = [];
    allTasks.forEach((element) => { //TODO: uzyc filter
      if(element.functionalityKey == functionalityKey){
        tasks.push(element);
      }
    })
    return tasks;
  }

  // returns task by key
  getTaskByKey(key: string){
    const tasks:Array<Task> = this.getTasks();
    let found:Task|undefined = tasks.find(element => element.key == key);
    return found as Task;
  }
}
