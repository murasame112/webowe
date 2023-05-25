import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { Task } from 'src/models/task.model';
import { FunctionalityService } from '../functionality.service';
import { UserService } from '../user.service';
import { Functionality } from 'src/models/functionality.model';
import { User } from 'src/models/user.model';
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  protected taskKey!: string
  public tsk!: Task;
  public fun!: Functionality;
  public own!: User;
  
  constructor(private readonly activatedRoute: ActivatedRoute, private taskService: TaskService, private functionalityService: FunctionalityService, private userService: UserService) {}

  ngOnInit(): void {    
    this.taskKey = this.activatedRoute.snapshot.params['key'];
    this.tsk = this.taskService.getTaskByKey(this.taskKey);

    this.fun = this.functionalityService.getFunctionalityByKey(this.tsk.functionalityKey as string);
    this.own = this.userService.getUserByKey(this.tsk.ownerKey as string);

  }
}