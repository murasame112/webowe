import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunctionalityListComponent } from './functionality-list/functionality-list.component';
import { NewFunctionalityComponent } from './new-functionality/new-functionality.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import {ProjectListComponent} from './project-list/project-list.component';
import { SummaryComponent } from './summary/summary.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  {path: '', component: SummaryComponent},
  {path: 'projects', component: ProjectListComponent},
  {path: 'details', component: ProjectDetailsComponent},
  {path: 'functionalities', component: FunctionalityListComponent},
  {path: 'tasks', component: TaskListComponent},
  {path: 'projects/new_project', component: NewProjectComponent},
  {path: 'functionalities/new_functionality', component: NewFunctionalityComponent},
  {path: 'tasks/new_task', component: NewTaskComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
