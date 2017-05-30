import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


import { AlertService, AlertMessage, loaderObj, LoaderService } from './shared/shared.service';
import {Settings} from './settings';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public objAlert: AlertMessage;
  public loader: loaderObj;

  constructor(
      private router: Router,
      private alertService: AlertService,
      private LoaderService: LoaderService,
      private config : Settings,
    ){}
   ngOnInit() {
       this.alertService.alertStatus.subscribe((val: AlertMessage) => {
            this.objAlert = { show: val.show, message: val.message , type: val.type};
        });
        this.LoaderService.loaderStatus.subscribe((val: loaderObj) => {
            this.loader = { show: val.show };
        });
  }
    onCloseAlert() {
        let objCloseAlert: AlertMessage = { show: false, message: '', type : '' };
        this.alertService.showAlert(false, null, null);
    }
}