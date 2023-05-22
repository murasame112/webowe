import { Component, OnInit, Input} from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Functionality} from 'src/models/functionality.model';
import { Task } from 'src/models/task.model';
import { FunctionalityService } from '../functionality.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit{
  constructor(private functionalityService: FunctionalityService, private taskService: TaskService) {}
  @Input() tasks:Array<Task> = [];
  @Input() tasksUndef:Array<Task> | undefined;
  @Input() functionalityNames: string[] = [];
  @Input() ownerNames: string[] = [];
  ngOnInit(): void {    
    
    this.tasksUndef = this.taskService.getTasks(); 
    if (this.tasksUndef != undefined || this.tasksUndef === null) {
      this.tasks = this.tasksUndef;
    }

    this.tasks.forEach((element) =>{
        let fun = this.functionalityService.getFunctionalityByKey(element.functionalityKey as string);
        this.functionalityNames.push(fun.name as string);
    });

    // this.tasks.forEach((element) =>{
    //   let own = this.userService.getUsersByKey(element.ownerKey as string);
    //   this.ownerNames.push(own.name as string);
    // });
    
    // TODO: dodac jakies sortowanie i filtrowanie

    // dla kazdej funkcjonalnosci leci getProjectByKey
    // do obiektu dodajemy wartosc projectName?
    console.log(this.tasks);
  }
}