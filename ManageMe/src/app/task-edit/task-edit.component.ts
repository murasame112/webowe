import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/project.service';
import { Project } from 'src/models/project.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Functionality } from 'src/models/functionality.model';
import { priority } from 'src/enums/priority.enum';
import { status } from 'src/enums/status.enum';
import { User } from 'src/models/user.model';
import { FunctionalityService } from '../functionality.service';
import { UserService } from '../user.service';
import { TaskEditForm } from 'src/models/task-edit-form.model';
import { Task } from 'src/models/task.model';
import { TaskService } from '../task.service';
import { GetTasksService } from '../get-tasks.service';
import { GetFunctionalitiesService } from '../get-functionalities.service';
import { GetProjectsService } from '../get-projects.service';
@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
  constructor(private getProjectsService: GetProjectsService, private getFunctionalitiesService: GetFunctionalitiesService, private getTasksService: GetTasksService ,private projectService: ProjectService, private taskService: TaskService, private userService: UserService, private readonly fb: FormBuilder, private readonly activatedRoute: ActivatedRoute, private functionalityService: FunctionalityService ) {};
  public edit_task!: FormGroup<TaskEditForm>;
  public tsk!: Task;
  protected taskKey!: string
  public priorities: string[] = [];
  public functionalities: Functionality[] = [];
  public statuses: string[] = [];
  public users: User[] = [];
  public currentFunctionality: Functionality | undefined;
  public currentOwner: User | undefined;


  ngOnInit(): void {
    this.taskKey = this.activatedRoute.snapshot.params['key'];
    this.tsk = this.getTasksService.getTaskByKey(this.taskKey);
    let activeProject = this.getProjectsService.getActiveProject();
    this.currentFunctionality = this.getFunctionalitiesService.getFunctionalityByKey(this.tsk.functionalityKey as string);
    this.currentOwner = this.userService.getUserByKey(this.tsk.ownerKey as string);
    this.priorities = Object.values(priority);
    this.statuses = Object.values(status);
    this.functionalities = this.getProjectsService.getFunctionalitiesForProject(activeProject.key as string);
    this.users = this.userService.getUsers();
    this.edit_task = this.fb.nonNullable.group({

      name: this.tsk.name as string,
      description: this.tsk.description as string,
      priority: this.tsk.priority as string,
      functionalityKey: this.currentFunctionality,
      ownerKey: this.currentOwner,
      exec_time: this.tsk.exec_time as number,
      status: this.tsk.status as string,
    });
  }

  onSave() {
    let editedTaskValues = this.edit_task.getRawValue();
    if(typeof editedTaskValues.functionalityKey != 'string' || typeof editedTaskValues.ownerKey != 'string'){
      return false;
    }
    let editedTask: Task = {
      key: this.taskKey,
      name: editedTaskValues.name,
      description: editedTaskValues.description,
      priority: editedTaskValues.priority,
      functionalityKey: editedTaskValues.functionalityKey as string,
      ownerKey: editedTaskValues.ownerKey as string,
      exec_time: editedTaskValues.exec_time,
      status: editedTaskValues.status,
      added: this.tsk.added,
      start: this.tsk.start,
      finish: this.tsk.finish,
      
    }

    if(editedTask.status != this.tsk.status){
      let fun = this.taskService.statusChanged(editedTask.key as string, editedTask.status as string);
      this.functionalityService.saveFunctionality(fun);
      editedTask = this.taskService.updateDates(editedTask);
    }
    this.taskService.saveTask(editedTask);
    return true;
    // TODO: jakieś powiadomienie mówiące że zapisano, może też redirect na listę projektów
  }

}
