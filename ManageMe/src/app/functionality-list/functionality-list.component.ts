import { Component, OnInit, Input} from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { Functionality} from 'src/models/functionality.model';
import { FunctionalityService } from '../functionality.service';
import { Project } from 'src/models/project.model';
import { GetFunctionalitiesService } from '../get-functionalities.service';
import { GetProjectsService } from '../get-projects.service';
@Component({
  selector: 'app-functionality-list',
  templateUrl: './functionality-list.component.html',
  styleUrls: ['./functionality-list.component.scss']
})
export class FunctionalityListComponent implements OnInit{
  constructor(private getProjectsService:GetProjectsService, private getFunctionalitiesService: GetFunctionalitiesService, private functionalityService: FunctionalityService, private projectService: ProjectService) {}
  @Input() functionalities:Array<Functionality> = [];
  @Input() projectNames: string[] = [];
  public activeProject!: Project;
  ngOnInit(): void {    
    
    this.activeProject = this.getProjectsService.getActiveProject();
    this.functionalities = this.getProjectsService.getFunctionalitiesForProject(this.activeProject.key as string); 

    this.functionalities.forEach((element) =>{
        let prj = this.getProjectsService.getProjectByKey(element.projectKey as string);
        this.projectNames.push(prj.name as string);
    });
    // TODO: dodac jakies sortowanie i filtrowanie

  }

  onDeleteFunctionality(functionality: Functionality, index: number){
    this.functionalityService.deleteFunctionality(functionality.key as string);
    document.getElementById('tr'+index)?.remove();
  }

}
