import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.scss']
})
export class DenemeComponent implements OnInit {

  cars: object[];

  brands: object[];

  constructor() { }

  ngOnInit() {
      
    this.cars=[
      {
        vin:'asadssd',
        year:'1234',
        brand:'sdzvfasds',
        color:'adfad',
        price:'23423',
        saleDate:'3/2/2019'
      },
      {
        vin:'asad231ssd',
        year:'1234',
        brand:'sdzv312sfasds',
        color:'adfad',
        price:'23423',
        saleDate:'3/2/2019'
      },

      {
        vin:'asad423ssd',
        year:'1234',
        brand:'Fiat',
        color:'adfad',
        price:'23423',
        saleDate:'3/2/2019'
      }
    ]
      this.brands = [
          {label: 'Audi', value: 'Audi'},
          {label: 'BMW', value: 'BMW'},
          {label: 'Fiat', value: 'Fiat'},
          {label: 'Ford', value: 'Ford'},
          {label: 'Honda', value: 'Honda'},
          {label: 'Jaguar', value: 'Jaguar'},
          {label: 'Mercedes', value: 'Mercedes'},
          {label: 'Renault', value: 'Renault'},
          {label: 'VW', value: 'VW'},
          {label: 'Volvo', value: 'Volvo'}
      ];
  }

}
