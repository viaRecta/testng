import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialsComponent } from './materials/materials.component';

const routes: Routes = [
  {path:'materials', component : MaterialsComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasingRoutingModule { }
