import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  footerText = "This is the footer text passed from app component into the footer child component";
  constructor(private router: Router){

  }
  routeTo(route: String) {
    this.router.navigate(['/'+route]);
  }
}
