import { Component, OnInit, Input} from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Functionality} from 'src/models/functionality.model';
import { Task } from 'src/models/task.model';
import { FunctionalityService } from '../functionality.service';
import { UserService } from '../user.service';
import { ProjectService } from '../project.service';
import { Project } from 'src/models/project.model';
import { GetTasksService } from '../get-tasks.service';
import { GetFunctionalitiesService } from '../get-functionalities.service';
import { GetProjectsService } from '../get-projects.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit{
  constructor(private getProjectsService: GetProjectsService, private getFunctionalitiesService: GetFunctionalitiesService, private getTasksService: GetTasksService, private functionalityService: FunctionalityService, private taskService: TaskService, private userService: UserService, private projectService: ProjectService) {}
  @Input() tasks:Task[] = [];
  @Input() functionalityNames: string[] = [];
  @Input() ownerNames: string[] = [];
  public functionalities!: Array<Functionality>;
  public activeProject!: Project;
  ngOnInit(): void {    
    
    this.activeProject = this.getProjectsService.getActiveProject();
    this.functionalities = this.getProjectsService.getFunctionalitiesForProject(this.activeProject.key as string); 
    this.functionalities.forEach((element) => {
      let funcTasks: Task[] = this.getFunctionalitiesService.getTasksForFunctionality(element.key as string);
      let newTasks: Task[] = [];
      newTasks = this.tasks.concat(funcTasks);
      this.tasks = newTasks;
    });


    this.tasks.forEach((element) =>{
        let fun = this.getFunctionalitiesService.getFunctionalityByKey(element.functionalityKey as string);
        this.functionalityNames.push(fun.name as string);
    });

  }

  onDeleteTask(task: Task, index: number){
    this.taskService.deleteTask(task.key as string);
    document.getElementById('tr'+index)?.remove();
  }

}