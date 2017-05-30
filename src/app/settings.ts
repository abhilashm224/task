import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class Settings {
  public header :  string = "";
  public authToken: string = "";
  public baseURL: string = "";
  public  enviornment = "development";
  public loadLocal:boolean = true;
  public symbol = '$';
  public loginDetails;
  public empId = '';
  public emplrDetails = '';
  public businessInfo = '';
  public payRollGroupList;
  public paUnitsList;
  public delegateList;
  public deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  public activeMMemberList;
  public inactiveMMemberList;
  public editMemberList;
  public isMobile = false;
  public iAgree :boolean = false;
  public setUpInfo = {};
  public organisationName = {};
  public countryCode = "USA";
  public langCode = "en";
  public lang = {};

  constructor() {
  }
 getToday() {
    let today = new Date();
		let day = ("0" + (today.getDate())).slice(-2);
		let month = ("0" + (today.getMonth() + 1)).slice(-2);
		let currentDate = today.getFullYear()+"-"+(month)+"-"+(day) ;
    return currentDate;
 }
 getCurrentTime() {
    let today = new Date();
   	let hr = today.getHours();
		let min = today.getMinutes();
		let ss = today.getSeconds();
		let hours =  (hr < 10 ? "0" : "") + hr;
		let minutes = (min < 10 ? "0" : "") + min;
		let seconds = (ss < 10 ? "0" : "") + ss;
		let time = hours + ':' + minutes + ':' + seconds;
    return time;
 }
 convertToInputDate(date) {   /*  input date picker expects "yyyy-MM-dd" format   */
    let d = new Date(date);
		let day = ("0" + (d.getDate())).slice(-2);
		let month = ("0" + (d.getMonth() + 1)).slice(-2);
		let inputDate = d.getFullYear()+"-"+(month)+"-"+(day) ;

    return inputDate;
 }
 client = ( () =>  {
      let isTouch = ( () => {
        try{
          document.createEvent("TouchEvent");
          return true;
        } catch(e){
          return false;
        }
      }) ();
      
      //let isMobile = false;
      let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
      if (width < 541 )
      {
        this.isMobile = true;
      }
      let isAndroid = (navigator.userAgent.match(/Android/i)) ? true : false;
      let isApple = (navigator.userAgent.match(/iPhone|iPad|iPod/i)) ? true : false;
      let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
      let isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
      let osVersion = () => {
        if(isApple) {
          let v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
          return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || '0', 10)];
        }
        return [];
      };

      return {		
        isTouch : isTouch,
        isApple	: isApple,
        isAndroid: isAndroid,
        isChrome: isChrome,
        isSafari: isSafari,
        osVersion: osVersion,
        isMobile: this.isMobile
      };
})();

getAjaxHeader() {
        let headers   = new Headers({ 
            'Content-Type': 'application/json' ,
            'customerName': 'TCS',
            'typeOfCustomer': 'OFFSHORE',
            'applicationid':'12345',
            'User-ID' : '226296',
            'stubawareind' : 'Y'
        }); // ... Set content type to JSON
        let options  = new RequestOptions({ headers: headers }); // Create a request option

        return options;
}
dateFormat(date){
		if(!date)
		return "";
		var formattedDate = "", dateObj, sep = "";
		if	(date.match("/") != null)
			sep = "/";
		else
			sep = "-";
		var dateArr = [];
			dateArr = date.split(sep);
			var yearPart=dateArr[2].split(" ");
			formattedDate = dateArr[1]+sep+dateArr[0]+sep+yearPart[0];
	
    dateObj = new Date(formattedDate);		
		return dateObj;
	}
}