import { Component, OnInit, Input } from '@angular/core';
import { Functionality } from 'src/models/functionality.model';
import { Project } from 'src/models/project.model';
import { User } from 'src/models/user.model';
import { FunctionalityForm } from 'src/models/functionality-form.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { priority } from 'src/enums/priority.enum';
import { FunctionalityService } from 'src/app/functionality.service';
import { ProjectService } from 'src/app/project.service';
import { UserService } from '../user.service';



@Component({
  selector: 'app-new-functionality',
  templateUrl: './new-functionality.component.html',
  styleUrls: ['./new-functionality.component.scss']
})
export class NewFunctionalityComponent implements OnInit{
  constructor(private functionalityService: FunctionalityService, private userService: UserService, private readonly fb: FormBuilder, private projectService: ProjectService) {}
  @Input() functionality: Functionality | undefined;
  new_functionality!: FormGroup<FunctionalityForm>;
  public priorities: string[] = [];
  public projects: Project[] = [];
  public users: User[] = [];


  ngOnInit(): void {

    

    //this.priorities = Object.keys(this.priority).filter(x => isNaN(parseInt(x)));
    //this.priorities = Object.entries(this.priority)
    //console.log(Object.entries(priority)[0]);
    this.priorities = Object.values(priority);
    this.projects = this.projectService.getProjects();
    this.users = this.userService.getUsers();
    //this.statuses = Object.keys(this.status).filter(x => isNaN(parseInt(x)));
    this.new_functionality = this.fb.nonNullable.group({

      name: '',
      description: '',
      priority: '',
      projectKey: <Project>{},
      ownerKey: <User>{},
    });
  }

  onSave() {
    let fun = this.new_functionality.getRawValue();
    if(typeof fun.projectKey != 'string' || typeof fun.ownerKey != 'string'){
      return false;
    }
    this.functionality = this.functionalityService.createFunctionality(fun.name, fun.description, fun.priority, fun.projectKey as string, fun.ownerKey as string, 'todo');
    this.functionalityService.saveFunctionality(this.functionality);
    // TODO: jakieś powiadomienie mówiące że zapisano, może też redirect na listę projektów
    return true;
  }
}


