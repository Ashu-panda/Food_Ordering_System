// import { Component, OnInit } from '@angular/core';
// import {AppComponent, User} from "../app.component";
// import {Router} from "@angular/router";

// @Component({
//   selector: 'app-welcom',
//   templateUrl: './welcome.component.html',
//   styleUrls: ['./welcome.component.css']
// })
// export class WelcomeComponent implements OnInit {

//   modelUser: User = {
//     username:'',
//     password:'',
//     email:'',
//     phone:0,
//     firstname:'',
//     lastname:'',
//     address:'',
//     merchant:null
//   };

//   constructor(private router:Router) {

//   }
  

//   ngOnInit() {
//     if (sessionStorage.getItem("userData")==null) {
//       this.router.navigate(['login']);
//     }

//     let userData = JSON.parse(sessionStorage.getItem('userData'));
//     console.log(userData);
//     Object.assign(this.modelUser,userData);
//   }

//   clearLocal(){
//     sessionStorage.clear();
//   }

// }


import { Component, OnInit } from '@angular/core';
import { AppComponent, User } from "../app.component";
import { Router } from "@angular/router";

@Component({
  selector: 'app-welcom',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  modelUser: User = {
    username: '',
    password: '',
    email: '',
    phone: 0,
    firstname: '',
    lastname: '',
    address: '',
    merchant: null
  };

  showCard: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    if (sessionStorage.getItem("userData") == null) {
      this.router.navigate(['login']);
    }
    let userData = JSON.parse(sessionStorage.getItem('userData'));
    Object.assign(this.modelUser, userData);
  }

  clearLocal() {
    sessionStorage.clear();
  }

  toggleUserCard() {
    this.showCard = !this.showCard;
  }
}
