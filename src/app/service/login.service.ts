import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router) {}

  isLogin = false;

  loginTrue() {
    this.isLogin = true;
    this.router.navigateByUrl('/');
  }

  signupTrue(){
    this.isLogin = true;
    this.router.navigateByUrl('/');
  }

  isLoggedIn() {
    if (this.isLogin) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
