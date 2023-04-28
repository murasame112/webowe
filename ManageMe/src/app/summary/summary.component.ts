import { Component, OnInit, Input} from '@angular/core';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  constructor(private project: ProjectService) {}
  @Input() xd:string = '';
  ngOnInit(): void {    
    this.project.saveProject('jakis nowy?');
    this.project.saveProject('jeszcze nowszy :D');
    const projects = this.project.getProjects();
    if(typeof projects[0] == 'string'){
      this.xd = projects[0];
    }
  }
}
