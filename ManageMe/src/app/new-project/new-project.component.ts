import { Component, OnInit, Input} from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import {Project} from 'src/models/project.model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  constructor(private projectService: ProjectService) {}
  //@Input() project:Project|undefined;
  ngOnInit(): void {    
    // let project = this.ProjectService.createProject('newNewNewNewNew project', 'awangardowy opis czwartego projektu', false);
    
    //this.ProjectService.saveProject(project);
  }

}
