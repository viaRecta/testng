import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectEditComponent } from './project-edit/project-edit.component';
import { DenemeComponent } from './deneme/deneme.component';
import { Deneme2Component } from './deneme2/deneme2.component';
import { Deneme3Component } from './deneme3/deneme3.component';
import { Deneme4Component } from './deneme4/deneme4.component';

const routes: Routes = [
  {path:'projectedit', component : ProjectEditComponent}, 
  {path:'deneme', component : DenemeComponent},
  {path:'deneme2', component : Deneme2Component},
  {path:'deneme3', component : Deneme3Component},
  {path:'deneme4', component : Deneme4Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningRoutingModule { }
