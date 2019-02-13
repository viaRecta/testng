import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  menuItems = [
    {id:9, name:"giris", link:"login"},
    {id:9, name:"cikis", link:"logout"},
    {id:0,name:"Satinalma", children:[
      {id:4, name:"malzeme listesi",link:"purchasing/materials"},
      {id:5, name:"Proje detay",link:"planning/projectedit"},
      {id:6, name:"menu 3",link:"material-list"},
    ]},
    {id:1,name:"Depo", children:[
      {id:4, name:"deneme1", link:'planning/deneme'},
      {id:5, name:"primeng tree grid", link:'planning/deneme2'},
      {id:5, name:"material edit table", link:'planning/deneme3'},
      {id:5, name:"material tree", link:'planning/deneme4'},
      {id:6, name:"menu 3", children:[
        {id:4, name:"menu 1"},
        {id:5, name:"menu 2"},
        {id:6, name:"menu 3"},
      ]},
    ]},
    {id:2,name:"Muhasebe", children:[
      {id:4, name:"menu 1"},
      {id:5, name:"menu 2"},
      {id:6, name:"menu 3"},
    ]},
    {id:4, name:"menu 15"},
  ];

  ngOnInit() {
  }

}
