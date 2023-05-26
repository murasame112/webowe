import { Component, OnInit, Input} from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { Functionality} from 'src/models/functionality.model';
import { FunctionalityService } from '../functionality.service';
import { Project } from 'src/models/project.model';
import { GetFunctionalitiesService } from '../get-functionalities.service';
@Component({
  selector: 'app-functionality-list',
  templateUrl: './functionality-list.component.html',
  styleUrls: ['./functionality-list.component.scss']
})
export class FunctionalityListComponent implements OnInit{
  constructor(private getFunctionalitiesService: GetFunctionalitiesService, private functionalityService: FunctionalityService, private projectService: ProjectService) {}
  @Input() functionalities:Array<Functionality> = [];
  @Input() projectNames: string[] = [];
  public activeProject!: Project;
  ngOnInit(): void {    
    
    this.activeProject = this.projectService.getActiveProject();
    this.functionalities = this.getFunctionalitiesService.getFunctionalitiesForProject(this.activeProject.key as string); 

    this.functionalities.forEach((element) =>{
        let prj = this.projectService.getProjectByKey(element.projectKey as string);
        this.projectNames.push(prj.name as string);
    });
    // TODO: dodac jakies sortowanie i filtrowanie

  }

  onDeleteFunctionality(functionality: Functionality, index: number){
    this.functionalityService.deleteFunctionality(functionality.key as string);
    document.getElementById('tr'+index)?.remove();
  }

}
