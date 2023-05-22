import { Component, OnInit, Input} from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { Functionality} from 'src/models/functionality.model';
import { FunctionalityService } from '../functionality.service';
import { Project } from 'src/models/project.model';
@Component({
  selector: 'app-functionality-list',
  templateUrl: './functionality-list.component.html',
  styleUrls: ['./functionality-list.component.scss']
})
export class FunctionalityListComponent implements OnInit{
  constructor(private functionalityService: FunctionalityService, private projectService: ProjectService) {}
  @Input() functionalities:Array<Functionality> = [];
  @Input() functionalitiesUndef:Array<Functionality> | undefined;
  @Input() projectNames: string[] = [];
  ngOnInit(): void {    
    
    this.functionalitiesUndef = this.functionalityService.getFunctionalities(); 
    if (this.functionalitiesUndef != undefined || this.functionalitiesUndef === null) {
      this.functionalities = this.functionalitiesUndef;
    }

    this.functionalities.forEach((element) =>{
        let prj = this.projectService.getProjectByKey(element.projectKey as string);
        this.projectNames.push(prj.name as string);
    });
    // TODO: dodac jakies sortowanie i filtrowanie

    // dla kazdej funkcjonalnosci leci getProjectByKey
    // do obiektu dodajemy wartosc projectName?
    console.log(this.functionalities);
  }
}
