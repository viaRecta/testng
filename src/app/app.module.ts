import {BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Globals
import { Globals } from './app.globals';
// vias service
import { viasService } from 'src/app/components/vias.service'
// Routing
import { AppRoutingModule } from './app-routing.module';
// main app
import { AppComponent } from './app.component';
// header footer nav
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';

// Display Components
import {viasComponents} from './components/viasComponents.module';

// Modules
import { FrameworkModule } from './framework/framework.module';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    // material Design
    viasComponents, 
    // routing
    AppRoutingModule,
    // vias modules
    FrameworkModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
  ],
  providers: [
    Globals,
    viasService
  ],
  exports: [
    // material Design and other components
    viasComponents
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
