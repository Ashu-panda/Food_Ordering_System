import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem("userData") == null) {
      this.router.navigate(['login']);
    }
    if (sessionStorage.getItem("total") == null) {
      this.router.navigate(["menu"]);
    }
  }

  goToContactUs() {
    this.router.navigate(['contactUs']);
  }

  goToMenu() {
    this.router.navigate(['menu']);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

}
