import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private workshopLocation =  {
        lat : 17.3850,
        lng : 78.4867
   };
  constructor() { }

  ngOnInit() {
  }

}
