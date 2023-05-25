import { Component, OnInit, Input} from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Functionality} from 'src/models/functionality.model';
import { Task } from 'src/models/task.model';
import { FunctionalityService } from '../functionality.service';
import { UserService } from '../user.service';
import { User } from 'src/models/user.model';
import { ProjectService } from '../project.service';
import { Project } from 'src/models/project.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit{
  constructor(private functionalityService: FunctionalityService, private taskService: TaskService, private userService: UserService, private projectService: ProjectService) {}
  @Input() tasks:Task[] = [];
  @Input() functionalityNames: string[] = [];
  @Input() ownerNames: string[] = [];
  public functionalities!: Array<Functionality>;
  public activeProject!: Project;
  ngOnInit(): void {    
    
    this.activeProject = this.projectService.getActiveProject();
    this.functionalities = this.functionalityService.getFunctionalitiesForProject(this.activeProject.key as string); 
    this.functionalities.forEach((element) => {
      let funcTasks: Task[] = this.taskService.getTasksForFunctionality(element.key as string);
      let newTasks: Task[] = [];
      newTasks = this.tasks.concat(funcTasks);
      this.tasks = newTasks;
    });


    this.tasks.forEach((element) =>{
        let fun = this.functionalityService.getFunctionalityByKey(element.functionalityKey as string);
        this.functionalityNames.push(fun.name as string);
    });

    // to ponizej usuniete, bo jednak nie ma sensu pokazywac na liscie ownera, ale zostawiam kod jakbym zmienil zdanie xd
    // this.tasks.forEach((element) =>{
    //   let own = this.userService.getUserByKey(element.ownerKey as string);
    //   this.ownerNames.push(own.name as string);
    // });
    
    // TODO: dodac jakies sortowanie i filtrowanie
  }

  onDeleteTask(task: Task, index: number){
    this.taskService.deleteTask(task.key as string);
    document.getElementById('tr'+index)?.remove();
  }

}