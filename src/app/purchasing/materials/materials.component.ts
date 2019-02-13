import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material';

// Globals
import { Globals } from 'src/app/app.globals';
// vias service
import { viasService } from 'src/app/components/vias.service';
import { viasResponse } from 'src/app/components/viasResponse';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {

  constructor(public globals: Globals, private viasService:viasService) { }

  ngOnInit() {
    this.refreshData();
  }

  pageno:number=1;
  totalpage:number=1;
  filtersObj:object={};
  sortDescending:string = 'asc';
  sortColumn:string ='id';
  
  project_detail_id:number=0;
  contractor_id:number=0;

  materials:Array<object>=[];
  
  sortData(sort: Sort) {

  }
  refreshData(){
    var sortObj:object ={
      column_name:this.sortColumn, 
      sort_type:this.sortDescending
    };
    this.viasService.send(2000,0,{
      sort:sortObj, 
      page_no:this.pageno,
      filters:this.filtersObj,
      contractor_id:this.contractor_id,
      project_detail_id:this.project_detail_id
    }).subscribe(response => this.serviceHandler(response));
  }
  serviceHandler(r:viasResponse){
    console.log(r);
    // hatalar
    if(r.error){

    }
    // sayfa yetkileri
    if(r.perm){

    }
    // return action
    if(r.return_action){

    }
    // gelen veriler
    if(r.data){
      console.log(r.data);
      if(r.data['materials']){
        this.materials = r.data['materials'];
        // alert(this.materials);
      }
      if(r.data['total_page']){
        this.totalpage=r.data['total_page'];
      }
      if(r.data['page_no']){
        this.pageno=r.data['page_no'];
      }
    }
  }
}