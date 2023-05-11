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
  @Input() xd:string = '';


  ngOnInit(): void {    

    this.projectService.createDefault();
    // this.projectService.saveProject('jakis nowy?');
    // this.projectService.saveProject('jeszcze nowszy :D');
    const projects = this.projectService.getProjects();
    if(typeof projects[0] == 'string'){
      this.xd = projects[0];
    }
  }
}
