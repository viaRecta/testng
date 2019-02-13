import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

import {DataGridColumn} from './vias-datagrid-column';

@Component({
  selector: 'vias-datagrid',
  templateUrl: './vias-datagrid.component.html',
  styleUrls: ['./vias-datagrid.component.scss'],
})
export class ViasDatagridComponent implements OnInit {
  @Input() dataProvider:object[];
  @Input() columnProvider:DataGridColumn[];
  @Input() title:string;


  datas:object[];
  cols:DataGridColumn[];

  
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.datas = this.dataProvider;

    if (this.columnProvider) { 
      this.cols = this.columnProvider;
    } else { 
      //yoksa olustur
      this.cols = Object.keys(this.dataProvider[0])
            .map( key => {
                  return {
                      dataField: key,
                      headerText: key
                  }
              });
    }
  }
}
