//import {MediaMatcher} from '@angular/cdk/layout';
import { Component, ChangeDetectorRef } from '@angular/core';
// Globals
import { Globals } from 'src/app/app.globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public globals: Globals){
  }

}