import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/project.service';
import {Project} from 'src/models/project.model';
import { GetProjectsService } from '../get-projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  constructor(private getProjectsService: GetProjectsService, private projectService: ProjectService, private router: Router) {}
  @Input() projects:Array<Project> = [];
  ngOnInit(): void {    

    this.projects = this.getProjectsService.getProjects(); 
  }

  onDeleteProject(project: Project, index: number){
    this.projectService.deleteProject(project.key as string);
    document.getElementById('tr'+index)?.remove();
  }

}
