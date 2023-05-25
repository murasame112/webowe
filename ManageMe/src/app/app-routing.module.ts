import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunctionalityDetailsComponent } from './functionality-details/functionality-details.component';
import { FunctionalityListComponent } from './functionality-list/functionality-list.component';
import { NewFunctionalityComponent } from './new-functionality/new-functionality.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import {ProjectListComponent} from './project-list/project-list.component';
import { SummaryComponent } from './summary/summary.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  {path: '', component: SummaryComponent},
  {path: 'projects', component: ProjectListComponent},
    {path: 'projects/new', component: NewProjectComponent},
    {path: 'projects/details', children:[{path: ':key', component: ProjectDetailsComponent}] },
  {path: 'functionalities', component: FunctionalityListComponent},
    {path: 'functionalities/new', component: NewFunctionalityComponent},
    {path: 'functionalities/details', children:[{path: ':key', component: FunctionalityDetailsComponent}]},
  {path: 'tasks', component: TaskListComponent},
    {path: 'tasks/new', component: NewTaskComponent},
    {path: 'tasks/details', children:[{path: ':key', component: TaskDetailsComponent}]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
   // provideRouter(routes, withComponentInputBinding()),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
