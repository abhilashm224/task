import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


export class AlertMessage {
    public show: boolean;
    public message: string;
    public type: string;
}

@Injectable()
export class AlertService {
    public alertStatus: BehaviorSubject<AlertMessage> = new BehaviorSubject<AlertMessage>({ show: false, message: null ,type : null});

    showAlert(isShow: boolean, msg: string, type : string) {
        let alertObj: AlertMessage = { show: isShow, message: msg ,type : type};
        this.alertStatus.next(alertObj);
    }
}

export interface loaderObj {
    show: boolean;
}

@Injectable()
export class LoaderService {
    
    public loaderStatus: BehaviorSubject<loaderObj> = new BehaviorSubject<loaderObj>({ show: false });

    loading (isShow: boolean) {
        let loader: loaderObj = { show: isShow };
        this.loaderStatus.next(loader);
    }
}