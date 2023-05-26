import { Injectable, Optional } from '@angular/core';
import { Task } from 'src/models/task.model';
import { status } from 'src/enums/status.enum';
import { priority } from 'src/enums/priority.enum';
import { GetTasksService } from './get-tasks.service';
import { GetFunctionalitiesService } from './get-functionalities.service';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private getFunctionalitiesService: GetFunctionalitiesService, private getTasksService: GetTasksService) { }

  public saveTask(task: Task) {
    //TODO: jesli obiekt z tym samym key juz istnieje, to go usunac (ewentualnie sprawdzic czy setItem automatycznie nadpisuje)

    let key = 'undefined_key';
    if(typeof task.key == 'string'){
      key = task.key;
    }
    let taskJson = JSON.stringify(task);
    localStorage.setItem(key, taskJson);
  }

  // creates task (just like constructor)
  createTask(name: string, description: string, priority: string, functionalityKey: string, exec_time: number, status: string, ownerKey: string, added: Date, start?: Date, finish?: Date){
    let task: Task = {
      key: undefined,
      name: undefined,
      description: undefined,
      priority: undefined,
      functionalityKey: undefined,
      exec_time: undefined,
      status: undefined,
      ownerKey: undefined,
      added: undefined,
      start: undefined,
      finish: undefined,
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
    task.ownerKey = ownerKey;
    return task;

  }

  // creates few default tasks for testing
  createDefault(){
    let t1 = this.createTask('Wybudowanie Spire', 'Spire to budowla wymagana do produkcji mutalisków', 'high', 'f1', 6, 'doing', 'u1', new Date('October 27, 2022'), new Date('November 9, 2022'), undefined);
    this.saveTask(t1);
    let t2 = this.createTask('Produkcja mutalisków', 'trzeba ewoluować co najmniej 8 mutalisków','medium', 'f1', 4, 'todo', 'u1', new Date('October 27, 2022'), undefined, undefined);
    this.saveTask(t2);
    let t3 = this.createTask('Transport mutalisków', 'mutaliski powinny znajodwać się niedaleko bazy przeciwnika', 'low', 'f2', 2, 'todo', 'u2', new Date('October 27, 2022'), undefined, undefined);
    this.saveTask(t3);
    let t4 = this.createTask('Przeprowadzenie dywersji', 'po przygotowaniu mutalisków do akcji należy zaatakować inne miejsce małym oddziałem zerglingów, by przeciwnik skupił na tym ataku swoją uwagę', 'high', 'f2', 2, 'todo', 'u2', new Date('October 27, 2022'), undefined, undefined);
    this.saveTask(t4);
    let t5 = this.createTask('Atak mutaliskami', 'celem ataku są głównie SCV przeciwnika oraz tech-laby', 'high', 'f2', 4, 'todo', 'u2', new Date('October 27, 2022'), undefined, undefined);
    this.saveTask(t5);
    let t6 = this.createTask('Budowa fabryki', 'potrzebujemy wybudować fabrykę, by odblokować możliwość budowy portu gwiezdnego', 'high', 'f3', 8, 'done', 'u2', new Date('October 27, 2022'), new Date('November 9, 2022'), new Date('Nobember 10, 2022'));
    this.saveTask(t6);
    let t7 = this.createTask('Budowa portu gwiezdnego z tech-labem', 'i tak tego nikt nie przeczyta', 'high', 'f3', 12, 'done', 'u2', new Date('October 27, 2022'), new Date('November 10, 2022'), new Date('November 12, 2022'));
    this.saveTask(t7);
    let t8 = this.createTask('Produkcja banshee', 'należy wyprodukować co najmniej 2 myśliwce', 'medium', 'f4', 6, 'doing', 'u1', new Date('October 27, 2022'), new Date('November 13, 2022'), undefined);
    this.saveTask(t8);
    let t9 = this.createTask('Opracowanie ulepszeń do banshee', 'ulepszenia do opracowania to Cloaking Field oraz Hyperflight Rotors', 'low', 'f4', 8, 'todo', 'u1', new Date('October 27, 2022'), undefined, undefined);
    this.saveTask(t9);
    let t10 = this.createTask('Przygotowanie tasków do funkcjonalności', '[DYSKUSJA] drużyna powinna przemyśleć odpowiednie taski dla tej funkcjonalności', 'medium', 'f5', 10, 'todo', 'u3', new Date('October 27, 2022'), undefined, undefined);
    this.saveTask(t10);
    let t11 = this.createTask('Przygotowanie tasków do funkcjonalności', '[DYSKUSJA] drużyna powinna przemyśleć odpowiednie taski dla tej funkcjonalności', 'medium', 'f6', 10, 'todo', 'u3', new Date('October 27, 2022'), undefined, undefined);
    this.saveTask(t11);

  }

  // deletes task by key
  deleteTask(key: string){
    localStorage.removeItem(key);
  }

  cleanDate(date: string | Date | undefined){
    if(date !== undefined){
      if(typeof date == 'string'){
        date = new Date(date);
      }
      let newDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
      return newDate;
    }else{
      return undefined;
    }
  }

  statusChanged(key: string, newStatus: string){
    let tsk = this.getTasksService.getTaskByKey(key);
    tsk.status = newStatus;
    let fun = this.getFunctionalitiesService.getFunctionalityByKey(tsk.functionalityKey as string);
    if(tsk.status == 'doing' && fun.status == 'todo'){
      fun.status = 'doing';
    }
    if(tsk.status == 'done'){
      let otherTasks = this.getTasksService.getTasksForFunctionality(fun.key as string);
      let counter = 0;
      otherTasks.forEach((element) => {
        if(element.status != 'done'){
          counter++;
        }
      });
      if(counter == 1){
        fun.status = 'done';
      }
    }

    return fun;


    // let fun = this.getFunctionalitiesService.getFunctionalityByKey(key);
    // fun.status = newStatus;
    // let tasksToChange: Task[] = [];
    // if(fun.status == 'done'){
    //   let tasks = this.getTasksService.getTasksForFunctionality(fun.key as string);
    //   tasks.forEach((element) => {
    //     if(element.status != 'done'){
    //       element.status = 'done';
    //       tasksToChange.push(element);
    //     }
    //   })
    // }
    // return tasksToChange;
  }

}
