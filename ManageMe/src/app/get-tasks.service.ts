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
      return[];
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
        const tsk: Task = JSON.parse(value as string);
        tasks.push(tsk);
      }

    }
    return tasks;
  }

  // returns task by key
  getTaskByKey(key: string){
    const tasks:Array<Task> = this.getTasks();
    let found:Task|undefined = tasks.find(element => element.key == key);
    return found as Task;
  }
}
