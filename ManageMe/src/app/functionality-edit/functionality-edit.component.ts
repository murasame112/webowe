import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/project.service';
import { Project } from 'src/models/project.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FunctionalityEditForm } from 'src/models/functionality-edit-form.model';
import { Functionality } from 'src/models/functionality.model';
import { priority } from 'src/enums/priority.enum';
import { status } from 'src/enums/status.enum';
import { User } from 'src/models/user.model';
import { FunctionalityService } from '../functionality.service';
import { UserService } from '../user.service';
import { TaskService } from '../task.service';
import { GetFunctionalitiesService } from '../get-functionalities.service';
@Component({
  selector: 'app-functionality-edit',
  templateUrl: './functionality-edit.component.html',
  styleUrls: ['./functionality-edit.component.scss']
})
export class FunctionalityEditComponent implements OnInit {
  constructor(private getFunctionalitiesService: GetFunctionalitiesService, private taskService: TaskService, private projectService: ProjectService, private userService: UserService, private readonly fb: FormBuilder, private readonly activatedRoute: ActivatedRoute, private functionalityService: FunctionalityService ) {};
  public edit_functionality!: FormGroup<FunctionalityEditForm>;
  public fun!: Functionality;
  protected functionalityKey!: string
  public priorities: string[] = [];
  public projects: Project[] = [];
  public statuses: string[] = [];
  public users: User[] = [];
  public currentProject: Project | undefined;
  public currentOwner: User | undefined;


  ngOnInit(): void {
    this.functionalityKey = this.activatedRoute.snapshot.params['key'];
    this.fun = this.getFunctionalitiesService.getFunctionalityByKey(this.functionalityKey);
    this.currentProject = this.projectService.getProjectByKey(this.fun.projectKey as string);
    this.currentOwner = this.userService.getUserByKey(this.fun.ownerKey as string);
    this.priorities = Object.values(priority);
    this.statuses = Object.values(status);
    this.projects = this.projectService.getProjects();
    this.users = this.userService.getUsers();
    this.edit_functionality = this.fb.nonNullable.group({

      name: this.fun.name as string,
      description: this.fun.description as string,
      priority: this.fun.priority as string,
      projectKey: this.currentProject,
      ownerKey: this.currentOwner,
      status: this.fun.status as string,
    });
  }

  onSave() {
    let editedFunctionalityValues = this.edit_functionality.getRawValue();
    if(typeof editedFunctionalityValues.projectKey != 'string' || typeof editedFunctionalityValues.ownerKey != 'string'){
      return false;
    }

    let editedFunctionality: Functionality = {
      key: this.functionalityKey,
      name: editedFunctionalityValues.name,
      description: editedFunctionalityValues.description,
      priority: editedFunctionalityValues.priority,
      projectKey: editedFunctionalityValues.projectKey as string,
      ownerKey: editedFunctionalityValues.ownerKey as string,
      status: editedFunctionalityValues.status,
      
    }

    if(editedFunctionality.status != this.fun.status){
      let tasksToChange = this.functionalityService.statusChanged(editedFunctionality.key as string, editedFunctionality.status as string);
      if(tasksToChange.length > 0){
        tasksToChange.forEach(element => {
          this.taskService.saveTask(element);
        });
      }
    }

    this.functionalityService.saveFunctionality(editedFunctionality);
    return true;
    // TODO: jakieś powiadomienie mówiące że zapisano, może też redirect na listę projektów
  }

}
