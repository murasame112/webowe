import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FunctionalityService } from 'src/app/functionality.service';
import { Functionality } from 'src/models/functionality.model';
import { Project } from 'src/models/project.model';
import { User } from 'src/models/user.model';
import { ProjectService } from '../project.service';
import { UserService } from '../user.service';
import { GetFunctionalitiesService } from '../get-functionalities.service';
import { GetProjectsService } from '../get-projects.service';
import { Task } from 'src/models/task.model';
@Component({
  selector: 'app-functionality-details',
  templateUrl: './functionality-details.component.html',
  styleUrls: ['./functionality-details.component.scss']
})
export class FunctionalityDetailsComponent implements OnInit {
  protected functionalityKey!: string
  public fun!: Functionality;
  public prj!: Project;
  public own!: User;
  public taskCount!: number;
  public taskList!: Task[];
  
  constructor(private getProjectsService: GetProjectsService, private getFunctionalitiesService: GetFunctionalitiesService, private readonly activatedRoute: ActivatedRoute, private functionalityService: FunctionalityService, private projectService: ProjectService, private userService: UserService ) {}

  ngOnInit(): void {    
    this.functionalityKey = this.activatedRoute.snapshot.params['key'];
    this.fun = this.getFunctionalitiesService.getFunctionalityByKey(this.functionalityKey);
    this.taskList = this.getFunctionalitiesService.getTasksForFunctionality(this.functionalityKey);
    this.taskCount = this.taskList.length;

    this.prj = this.getProjectsService.getProjectByKey(this.fun.projectKey as string);
    this.own = this.userService.getUserByKey(this.fun.ownerKey as string);

  }

  onForward(){
    this.functionalityService.forwardStatus(this.fun);
  }
}
