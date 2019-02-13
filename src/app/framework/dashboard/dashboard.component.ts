import { Component, OnInit } from '@angular/core';

// Globals
import { Globals } from 'src/app/app.globals';
// vias service
import { viasService } from 'src/app/components/vias.service'
import { viasResponse } from 'src/app/components/viasResponse';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  events: string[] = [];
  opened: boolean;

  respose:viasResponse;
  
  constructor(private globals: Globals, private viasService:viasService) { 
    // alert(this.globals.userId);
  }
  ngOnInit() {
  }

}
