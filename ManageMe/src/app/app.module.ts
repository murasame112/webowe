import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { NavComponent } from './nav/nav.component';
import { SummaryComponent } from './summary/summary.component';
import { FunctionalityListComponent } from './functionality-list/functionality-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TaskListComponent } from './task-list/task-list.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NewFunctionalityComponent } from './new-functionality/new-functionality.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { FunctionalityDetailsComponent } from './functionality-details/functionality-details.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { FunctionalityEditComponent } from './functionality-edit/functionality-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    NavComponent,
    SummaryComponent,
    FunctionalityListComponent,
    PageNotFoundComponent,
    TaskListComponent,
    NewProjectComponent,
    NewFunctionalityComponent,
    NewTaskComponent,
    FunctionalityDetailsComponent,
    TaskDetailsComponent,
    ProjectEditComponent,
    TaskEditComponent,
    FunctionalityEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
