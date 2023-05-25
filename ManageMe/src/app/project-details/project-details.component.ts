import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/project.service';
import { Project } from 'src/models/project.model';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})

export class ProjectDetailsComponent implements OnInit {
  protected projectKey!: string
  public prj!: Project;
  
  constructor(private readonly activatedRoute: ActivatedRoute, private projectService: ProjectService ) {}

  ngOnInit(): void {    
    this.projectKey = this.activatedRoute.snapshot.params['key'];
    this.prj = this.projectService.getProjectByKey(this.projectKey);

  }
}

     