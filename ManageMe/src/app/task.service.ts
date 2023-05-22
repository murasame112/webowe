import { Injectable } from '@angular/core';
import { Task } from 'src/models/task.model';
import { status } from 'src/enums/status.enum';
import { priority } from 'src/enums/priority.enum';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  
  public saveTask(task: Task) {

    let key = 'undefined_key';
    if(typeof task.key == 'string'){
      key = task.key;
    }
    let taskJson = JSON.stringify(task);
    localStorage.setItem(key, taskJson);
  }

  // returns array of all functionalities
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
      if(key.startsWith('p')){
        // TODO: wymyslic jak sie pozbyc ponizszego if'a
        if(typeof value == 'string'){
          const tsk: Task = JSON.parse(value);
          tasks.push(tsk);
        }
      }
      
    }
    return tasks;
  }

  // creates task (just like constructor)
  createTask(name: string, description: string, priority: string, functionalityKey: string, exec_time: number, status: string, added: Date, start: Date, finish: Date, userKey: string){
    let task: Task = {
      key: undefined,
      name: undefined,
      description: undefined,
      priority: undefined, 
      functionalityKey: undefined,
      exec_time: undefined,
      status: undefined,
      added: undefined,
      start: undefined,
      finish: undefined,
      userKey: undefined,
    };
    
    let key = 't';
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
      if(key.startsWith('t')){
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

    task.key = key;
    task.name = name;
    task.description = description;
    task.priority = priority;
    task.functionalityKey = functionalityKey;
    task.exec_time = exec_time;
    task.status = status;
    task.added = added;
    task.start = start;
    task.finish = finish;
    task.userKey = userKey;

    return task;

  }

  getTasksForFunctionality(functionalityKey: string){
    //TODO: zbiera wszystkie taski dla danej funkcjonalnosci
    // zwraca Array<Task> zapewne?
  }

  
  // creates few default tasks for testing
  createDefault(){
    let t1 = this.createTask('task1', 't1 opis', 'high', 'f1', 6, 'todo', new Date('November 9, 2000'), new Date('October 27, 2001'), new Date('January 1, 1999'), 'u1');
    this.saveTask(t1);
    let t2 = this.createTask('task2', 't2 opis','low', 'f2', 2, 'done', new Date('November 9, 2000'), new Date('October 27, 2001'), new Date('January 1, 1999'), 'u2');
    this.saveTask(t2);
    let t3 = this.createTask('task3', 't3 opis', 'medium', 'f1', 4, 'doing', new Date('November 9, 2000'), new Date('October 27, 2001'), new Date('January 1, 1999'), 'u1');
    this.saveTask(t3);
    
  }
  
}
