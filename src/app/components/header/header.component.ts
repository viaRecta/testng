import { Component, OnInit } from '@angular/core';

// Globals
import { Globals } from 'src/app/app.globals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public globals: Globals) { }
  ngOnInit() {
  }

}
