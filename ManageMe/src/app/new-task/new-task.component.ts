import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Task } from 'src/models/task.model';
import { Functionality } from 'src/models/functionality.model';
import { Project } from 'src/models/project.model';
import { User } from 'src/models/user.model';
import { TaskForm } from 'src/models/task-form.model';
import { FunctionalityService } from 'src/app/functionality.service';
import { ProjectService } from 'src/app/project.service';
import { TaskService } from 'src/app/task.service';
import { priority } from 'src/enums/priority.enum';
import { status } from 'src/enums/status.enum';
import { UserService } from '../user.service';



@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {
  constructor(private taskService: TaskService, private functionalityService: FunctionalityService, private userService: UserService, private projectService: ProjectService, private readonly fb: FormBuilder, ) {}
  @Input() task: Task | undefined;
  new_task!: FormGroup<TaskForm>;
  public priorities: string[] = [];
  public functionalities: Functionality[] = [];
  public users: User[] = [];


  ngOnInit(): void {

    let u1 = {key: 'u1', login: 'l1', password: 'p1', name: 'user 1', surname: 'u1', permissions: 'developer'};
    let u2 = {key: 'u2',login: 'l1', password: 'p1', name: 'user 2', surname: 'u1', permissions: 'developer'};
    let u3 = {key: 'u3',login: 'l1', password: 'p1', name: 'user 3', surname: 'u1', permissions: 'developer'};

    //this.priorities = Object.keys(this.priority).filter(x => isNaN(parseInt(x)));
    //this.priorities = Object.entries(this.priority)
    //console.log(Object.entries(priority)[0]);
    this.priorities = Object.values(priority);
    this.functionalities = this.functionalityService.getFunctionalities();
    this.users = this.userService.getUsers();
    //this.statuses = Object.keys(this.status).filter(x => isNaN(parseInt(x)));
    this.new_task = this.fb.nonNullable.group({

      name: '',
      description: '',
      priority: '',
      functionalityKey: <Functionality>{},
      exec_time: 0,
      ownerKey: <User>{},

    });

  }

  onSave() {
    let tsk = this.new_task.getRawValue();
    let added = new Date();
    if(typeof tsk.functionalityKey != 'string' || typeof tsk.ownerKey != 'string'){
      return false;
    }
    this.task = this.taskService.createTask(tsk.name, tsk.description, tsk.priority, tsk.functionalityKey as string, tsk.exec_time, 'todo', tsk.ownerKey as string, added );
    this.taskService.saveTask(this.task);
    // TODO: jakieś powiadomienie mówiące że zapisano, może też redirect na listę projektów
    return true;
  }
}

