import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

// Globals
import { Globals } from 'src/app/app.globals';
// vias service
import { viasService } from 'src/app/components/vias.service';
import { viasResponse } from 'src/app/components/viasResponse';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  constructor(private globals: Globals, private viasService:viasService, private router: Router){
    this.globals.userId=0;
    this.globals.userName='';
    this.globals.sid='';
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
