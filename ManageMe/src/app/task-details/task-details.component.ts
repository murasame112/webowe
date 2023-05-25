import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { Task } from 'src/models/task.model';
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  protected taskKey!: string
  public tsk!: Task;
  
  constructor(private readonly activatedRoute: ActivatedRoute, private taskService: TaskService ) {}

  ngOnInit(): void {    
    this.taskKey = this.activatedRoute.snapshot.params['key'];
    this.tsk = this.taskService.getTaskByKey(this.taskKey);

  }
}