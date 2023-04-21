import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunctionalityListComponent } from './functionality-list/functionality-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import {ProjectListComponent} from './project-list/project-list.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {path: '', component: SummaryComponent},
  {path: 'projects', component: ProjectListComponent},
  {path: 'details', component: ProjectDetailsComponent},
  {path: 'functionalities', component: FunctionalityListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
