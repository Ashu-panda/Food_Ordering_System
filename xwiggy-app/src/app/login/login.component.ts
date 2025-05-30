// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from "@angular/common/http";
// import { Router } from "@angular/router";
// import { AppComponent, User } from "../app.component";


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   model: Login = {
//     username: '',
//     password: ''
//   };

//   message: string = null;

//   constructor(private http: HttpClient, private router: Router) { }

//   ngOnInit() {
//     if (sessionStorage.length > 0)
//       this.router.navigate(['welcome']);
//   }

//   sendFeedback(): void {
//     let url = "http://localhost:1200/login";
//     let key = 'userData';
//     this.http.post<User>(url, this.model).subscribe(
//       res => {
        
//         sessionStorage.setItem(key, JSON.stringify(res));
//         if (res != null && !res.merchant) {
//           this.router.navigate(['welcome']);
//         }
//         if (res != null && res.merchant) {
//           this.router.navigate(['merchantWelcome']);
//         }
//         if (res == null) {
//           this.message = "Username Or Password is Wrong";
//           sessionStorage.clear();
//         }
//       },
//       err => {
//         console.log([this.model]);
//         alert("An error has occurred while logging in");
//       }
//     )
//   }
// }

// export interface Login {
//   username: string;
//   password: string;
// }



import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AppComponent, User } from "../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: Login = {
    username: '',
    password: ''
  };

  message: string = null;
  isLoginPageOpen: boolean = true; // Flag to control login page view

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    if (sessionStorage.length > 0) {
      this.router.navigate(['welcome']);
    }
  }

  sendFeedback(): void {
    let url = "http://localhost:1200/login";
    let key = 'userData';
    this.http.post<User>(url, this.model).subscribe(
      res => {
        sessionStorage.setItem(key, JSON.stringify(res));
        if (res != null && !res.merchant) {
          this.router.navigate(['welcome']);
        }
        if (res != null && res.merchant) {
          this.router.navigate(['merchantWelcome']);
        }
        if (res == null) {
          this.message = "Username Or Password is Wrong";
          sessionStorage.clear();
        }
      },
      err => {
        console.log([this.model]);
        alert("An error has occurred while logging in");
      }
    );
  }
}

export interface Login {
  username: string;
  password: string;
}



