import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Display Components
import {viasComponents} from '../components/viasComponents.module';
// routing
import { FrameworkRoutingModule } from './framework-routing.module';
// modues
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    PageNotFoundComponent,
    LogoutComponent,
  ],
  imports: [
    viasComponents,
    CommonModule,
    FrameworkRoutingModule
  ]
})
export class FrameworkModule { }
