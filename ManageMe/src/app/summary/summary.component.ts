import { Component, OnInit, Input} from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import {Project} from 'src/models/project.model';
import { GetProjectsService } from '../get-projects.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  constructor(private getProjectsService:GetProjectsService, private projectService: ProjectService) {}
  @Input() prj:Project|undefined = {
    key: undefined,
    name: undefined,
    description: undefined,
    active: undefined,
  };


  ngOnInit(): void {    
    this.prj = this.getProjectsService.getActiveProject();    
  }
}
