import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { Task } from 'src/models/task.model';
import { FunctionalityService } from '../functionality.service';
import { UserService } from '../user.service';
import { Functionality } from 'src/models/functionality.model';
import { User } from 'src/models/user.model';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { GetTasksService } from '../get-tasks.service';
import { GetFunctionalitiesService } from '../get-functionalities.service';
import { Project } from 'src/models/project.model';
import { GetProjectsService } from '../get-projects.service';
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  protected taskKey!: string
  public tsk!: Task;
  public fun!: Functionality;
  public prj!: Project;
  public own!: User;
  public added!: string | undefined;
  public start!: string | undefined;
  public finish!: string | undefined;
  
  constructor(private getProjectsService: GetProjectsService, private getFunctionalitiesService: GetFunctionalitiesService, private getTasksService: GetTasksService, private readonly activatedRoute: ActivatedRoute, private taskService: TaskService, private functionalityService: FunctionalityService, private userService: UserService) {}

  ngOnInit(): void {    
    this.taskKey = this.activatedRoute.snapshot.params['key'];
    this.tsk = this.getTasksService.getTaskByKey(this.taskKey);

    this.fun = this.getFunctionalitiesService.getFunctionalityByKey(this.tsk.functionalityKey as string);
    this.prj = this.getProjectsService.getProjectByKey(this.fun.projectKey as string);
    this.own = this.userService.getUserByKey(this.tsk.ownerKey as string);

    this.added = this.taskService.cleanDate(this.tsk.added);
    this.start = this.taskService.cleanDate(this.tsk.start);
    this.finish = this.taskService.cleanDate(this.tsk.finish);

  }

  onForward(){
    this.taskService.forwardStatus(this.tsk);
  }
}