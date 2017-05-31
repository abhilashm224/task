import { Component , ViewChild , Input} from '@angular/core';
import { Router } from '@angular/router';
import { SebmGoogleMap , GoogleMapsAPIWrapper} from 'angular2-google-maps/core';

@Component({
  selector: 'my-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

@ViewChild(SebmGoogleMap) sebmGoogleMap: SebmGoogleMap;

	//default values here
   @Input() workshopLocation: Object;
  
   public userLocation = {
        lat : 9.9312,
        lng : 76.2673
   }
  
	constructor (
		private router: Router,
       // private _mapsAPIWrapper : GoogleMapsAPIWrapper
	   
	){}

 	ngOnInit() {
	  console.log('map component loaded..');
      //this.getUserLocation();
	}
    resize(): void {
        this.sebmGoogleMap.triggerResize();
        //this._mapsAPIWrapper.setCenter({lat: this.lat, lng: this.lng});
    }
    getUserLocation() {
	
		if(navigator.geolocation)
			navigator.geolocation.getCurrentPosition(this.setPosition, this.errorCallback, {enableHighAccuracy: true, maximumAge : 20000, timeout:20000});
		else 
            alert('No Geolocation Support.');
           //  document.getElementById('google_canvas').innerHTML = 'No Geolocation Support.';
	}

    setPosition = (position) => {
			this.userLocation.lat = position.coords.latitude;
			this.userLocation.lng = position.coords.longitude;
		}

	 errorCallback(error) {
			if(error.PERMISSION_DENIED)
                alert("Unable to locate");
                //document.getElementById('google_canvas').innerHTML = "Unable to locate";
			else
                alert("GEO location error");
              //  document.getElementById('google_canvas').innerHTML = "GEO location error";
		}
}