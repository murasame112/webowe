import { Component, OnInit, Input} from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import {Project} from 'src/models/project.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  constructor(private projectService: ProjectService) {}
  @Input() prj:Project|undefined = {
    name: undefined,
    description: undefined,
    active: undefined,
  };


  ngOnInit(): void {    

    this.projectService.createDefault();
    this.prj = this.projectService.getActiveProject();
    
  }
}
