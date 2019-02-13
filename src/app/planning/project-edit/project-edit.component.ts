import { Component, OnInit } from '@angular/core';
// Globals
import { Globals } from 'src/app/app.globals';
// vias service
import { viasService } from 'src/app/components/vias.service';
import { viasResponse } from 'src/app/components/viasResponse';

import { DataGridColumn } from 'src/app/components/vias-datagrid/vias-datagrid-column';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  project:object={};
  projectDetails:object[]=[];
  projectColumns:DataGridColumn[]=[];

  constructor(public globals: Globals, private viasService:viasService) { }

  ngOnInit() {
    this.refreshData();
    this.createDGColumns();
  }
  
  //pid=4000&aid=21&data={%22modul_id%22:7000,%22id%22:%22572%22}
  refreshData(){
    this.viasService.send(4000,21,{
      id:1 //572
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
      if(r.data['projects']){
        this.project = r.data['projects'];
      }
      if(r.data['project_details']){
        this.projectDetails=r.data['project_details'];
      }
    }
  }

  createDGColumns(){
    this.projectColumns=[
      {
        dataField:'order_no',
        headerText:'İş Emri',
        width:100,
        align:'right'
      },
      {
        dataField:'name',
        headerText:'İş Tanımı',
        widthPercent:50,
        align:'left'
      },
      {
        dataField:'estimated_start_date',
        headerText:'Tahmini Başlangıç',
        dataType:'date'
      },
      {
        dataField:'estimated_finish_date',
        headerText:'Tahmini Başlangıç',
        dataType:'date'
      },
      {
        dataField:'quotation_price',
        headerText:'Teklif Fiyatı',
        dataType:'currency'
      },
      {
        dataField:'quotation_quantity',
        headerText:'Teklif Miktarı',
        dataType:'currency',
        currencyField:'unit_name'
      }
    ];
  }
}
