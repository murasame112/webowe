import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectListComponent} from './project-list/project-list.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {path: '', component: SummaryComponent},
  {path: 'projects', component: ProjectListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
