import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Display Components
import {viasComponents} from '../components/viasComponents.module';
// routing
import { PurchasingRoutingModule } from './purchasing-routing.module';
// modues
import { MaterialsComponent } from './materials/materials.component';


@NgModule({
  declarations: [
    MaterialsComponent,
  ],
  imports: [
    CommonModule,
    viasComponents,
  ]
})
export class PurchasingModule { }
