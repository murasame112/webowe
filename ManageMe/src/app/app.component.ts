import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project.service';
import { FunctionalityService } from 'src/app/functionality.service';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ManageMe';
  constructor(private projectService: ProjectService, private functionalityService: FunctionalityService, private taskService: TaskService) {}

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  ngOnInit(): void {
    localStorage.clear();
    this.projectService.createDefault();
    this.functionalityService.createDefault();
    this.taskService.createDefault();
  }

  
}
