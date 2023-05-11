import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ManageMe';
  constructor(private projectService: ProjectService) {}

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  ngOnInit(): void {
    localStorage.clear();
    this.projectService.createDefault();
  }

  
}
