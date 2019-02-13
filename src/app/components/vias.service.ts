import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError,map,tap } from 'rxjs/operators';

// Globals
import { Globals } from 'src/app/app.globals';

// Response type
import { viasResponse } from './viasResponse';

@Injectable({
  providedIn: 'root'
})

export class viasService {

  private serverUrl:string;
  
  constructor(private globals: Globals, private http: HttpClient){ 
    //global degiskeni sinif propertysine ata
    this.serverUrl = globals.serverURL;
  }

  public send(pid:number, aid:number, data:object): Observable<viasResponse> {
    const params:FormData = new FormData();
    params.append('json', '1')
    params.append('pid', pid.toString())
    params.append('aid', aid.toString())
    params.append('data', JSON.stringify(data));
    console.log(params);
    return this.http.post(this.serverUrl, params,{withCredentials : true})
    .pipe(
      tap(_ => console.log("sonuclar geldi")),
      map((result:viasResponse)=>{
        console.log("buradayiz !!!");
        console.log(result);
        return new viasResponse(
          result.sid,
          result.pid,
          result.aid,
          result.return_action,
          result.error,
          result.perm,
          result.data
        );
      })
    );
  }
}
