import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/project.service';
import { Project } from 'src/models/project.model';
import { GetProjectsService } from '../get-projects.service';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})

export class ProjectDetailsComponent implements OnInit {
  protected projectKey!: string
  public prj!: Project;
  public funcCount!: number;
  
  constructor(private getProjectsService: GetProjectsService, private readonly activatedRoute: ActivatedRoute, private projectService: ProjectService ) {}

  ngOnInit(): void {    
    this.projectKey = this.activatedRoute.snapshot.params['key'];
    this.prj = this.getProjectsService.getProjectByKey(this.projectKey);
    this.funcCount = this.getProjectsService.getFunctionalitiesForProject(this.prj.key as string).length;

  }

  onSetAsActive(project: Project){
    this.projectService.setProjectAsActive(project.key as string);
    

    // TODO: jakies powiadomienie ze zmieniono lub cofac do summary
  }
}

     