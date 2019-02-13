import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Display Components
import {viasComponents} from '../components/viasComponents.module';
// routing
import { PlanningRoutingModule } from './planning-routing.module';
// modues
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { DenemeComponent } from './deneme/deneme.component';
import { Deneme2Component } from './deneme2/deneme2.component';
import { Deneme3Component } from './deneme3/deneme3.component';
import { Deneme4Component } from './deneme4/deneme4.component';

  
@NgModule({
  declarations: [
    ProjectEditComponent,
    DenemeComponent,
    Deneme2Component,
    Deneme3Component,
    Deneme4Component
  ],
  imports: [
    CommonModule,
    PlanningRoutingModule,
    viasComponents,
  ]
})
export class PlanningModule { }
