import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
      private router: Router
    ){
      console.log('URL is    ',this.router.url);
    }
   ngOnInit() {

  }
}