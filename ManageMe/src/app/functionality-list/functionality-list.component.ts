import { Component, OnInit, Input} from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { Functionality} from 'src/models/functionality.model';
import { FunctionalityService } from '../functionality.service';

@Component({
  selector: 'app-functionality-list',
  templateUrl: './functionality-list.component.html',
  styleUrls: ['./functionality-list.component.scss']
})
export class FunctionalityListComponent implements OnInit{
  constructor(private functionalityService: FunctionalityService) {}
  @Input() functionalities:Array<Functionality> = [];
  @Input() functionalitiesUndef:Array<Functionality> | undefined;
  ngOnInit(): void {    

    this.functionalitiesUndef = this.functionalityService.getFunctionalities(); 
    if (this.functionalitiesUndef != undefined || this.functionalitiesUndef === null) {
      this.functionalities = this.functionalitiesUndef;
    }
  }
}
