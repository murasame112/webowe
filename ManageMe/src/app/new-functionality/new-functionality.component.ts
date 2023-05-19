import { Component, OnInit, Input, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FunctionalityService } from 'src/app/functionality.service';
import { Functionality } from 'src/models/functionality.model';
import { FunctionalityForm } from 'src/models/functionality-form.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Priority } from 'src/enums/priority.enum';
import { Permissions } from 'src/enums/permissions.enum';
import { Status } from 'src/enums/status.enum';
import { Project } from 'src/models/project.model';
import { User } from 'src/models/user.model';
import { ProjectService } from 'src/app/project.service';



@Component({
  selector: 'app-new-functionality',
  templateUrl: './new-functionality.component.html',
  styleUrls: ['./new-functionality.component.scss']
})
export class NewFunctionalityComponent implements OnInit{
  constructor(private functionalityService: FunctionalityService, private readonly fb: FormBuilder, private projectService: ProjectService) {}
  @Input() functionality: Functionality | undefined;
  new_functionality!: FormGroup<FunctionalityForm>;
  //public priorities = Object.values(Priority);
  public priority = Priority;
  public status = Status;
  public priorities: string[] = [];
  public projects: Project[] = [];
  public users: User[] = [];
  public statuses: string[] = [];


  ngOnInit(): void {

    let u1 = {login: 'l1', password: 'p1', name: 'user 1', surname: 'u1', permissions: Permissions.developer};
    let u2 = {login: 'l1', password: 'p1', name: 'user 2', surname: 'u1', permissions: Permissions.developer};
    let u3 = {login: 'l1', password: 'p1', name: 'user 3', surname: 'u1', permissions: Permissions.developer};

    this.priorities = Object.values(this.priority);
    this.projects = this.projectService.getProjects();
    this.users = [u1, u2, u3]; // TODO: tu powinno pobierac userów, ale jeszcze nie ma od tego metody
    this.statuses = Object.values(this.status);
    this.new_functionality = this.fb.nonNullable.group({

      name: '',
      description: '',
      priority: '',
      //priority: Priority.low as string,
      projectKey: '',
      ownerKey: '',
      permissions: '',
      status: '',

    });
  }

  onSave() {
    let fun = this.new_functionality.getRawValue();
    console.log(fun);
    // this.project = this.projectService.createProject(prj.name, prj.description, false);
    // this.projectService.saveProject(this.project);

    // TODO: jakieś powiadomienie mówiące że zapisano, może też redirect na listę projektów
  }
}


