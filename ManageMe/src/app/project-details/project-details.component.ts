import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectService } from 'src/app/project.service';
import { Project } from 'src/models/project.model';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})

export class ProjectDetailsComponent implements OnInit {
  protected projectKey!: string
  private routeSub!: Subscription
  public prj!: Project;
  constructor(private readonly activatedRoute: ActivatedRoute, private projectService: ProjectService ) {}
  ngOnInit(): void {    
    this.projectKey = this.activatedRoute.snapshot.params['key'];
    console.log(this.projectKey);
    this.prj = this.projectService.getProjectByKey(this.projectKey);

  }
}

     