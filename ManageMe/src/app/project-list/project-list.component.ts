import { Component, OnInit, Input} from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import {Project} from 'src/models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  constructor(private projectService: ProjectService) {}
  @Input() projects:Array<Project> = [];
  @Input() projectsUndef:Array<Project> | undefined;
  ngOnInit(): void {    

    this.projectsUndef = this.projectService.getProjects(); 
    if (this.projectsUndef != undefined || this.projectsUndef === null) {
      this.projects = this.projectsUndef;
    }
  }

  onDeleteProject(project: Project, index: number){
    this.projectService.deleteProject(project.key as string);
    document.getElementById('tr'+index)?.remove();
  }

  onDetailsProject(project: Project){
    
  }
}
