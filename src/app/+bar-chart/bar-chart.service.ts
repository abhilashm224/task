import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Settings} from '../settings';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BarChartService {
     // Resolve HTTP using the constructor

 private loadLocal = this.config.loadLocal;

     constructor (
         private http: Http,
         private config : Settings 
         ) {}

    getBarChartInfo ():Observable<any> {
        let url:string;
        let options = this.config.getAjaxHeader();

        if(this.loadLocal) {
            url     = './assets/response/planSetupInfo.json';
            return this.http.get(url, options) // ...using get request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
        }
        else {
          url = this.config.baseURL+ 'barchart/';
        //url     = './assets/response/planSetupInfo.json';  
            return this.http.get(url , options) // ...using get request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

        }
    } 
}