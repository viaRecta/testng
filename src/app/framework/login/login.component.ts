import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

// Globals
import { Globals } from 'src/app/app.globals';
// vias service
import { viasService } from 'src/app/components/vias.service';
import { viasResponse } from 'src/app/components/viasResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // sinif sabitleri
  username:string='';
  password:string='';
  firmId:number=2;

  constructor(public globals: Globals, private viasService:viasService, private router: Router){
  }
  
  ngOnInit() {
  }
  // sifreyi sifrele
  encryptPassword(str:string):string{
    for(var i:number=0; i<5; i++){
      str = btoa(str).split("").reverse().join("");
    }
    return str;
  }
  // ?data={%22username%22:%22hob%22,%22password%22:%22iZkWyZleGNlUsRmeX1GdXJ1aKVVVB1TP%22,%22firmId%22:2}
  login() : void {
    if(this.username.length > 2 && this.password.length>2){
      this.viasService.send(0,0,{
        username:this.username,
        password:this.encryptPassword(this.password),
        firmId:this.firmId
      }).subscribe(response => this.serviceHandler(response));
    }else{
      // handleErrors("e_12345");
      alert("hata");
    }
  }
  // login servis handler
  serviceHandler(r:viasResponse){
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
      /// login bilgileri
      if(r.data.hasOwnProperty('login_bilgileri')){
        var login = r.data['login_bilgileri'];
        // global degiskenleri set et
        this.globals.userName=login.name+' '+login.surname;									
        this.globals.userId = login.id;
        this.globals.userSectionId = login.section_id;
        this.globals.userDepartmentId = login.department_id;
        this.globals.userDefaultModuleId = login.default_module_id; 
        this.globals.userDefaultPageId = login.default_page_id;
        this.globals.userDefaultActionId = login.default_action_id;
        
        // dashboard sayfaasina gonder
        this.router.navigate(["dashboard"]);
      }
    }
  }
}
