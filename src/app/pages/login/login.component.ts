import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: FormControl = new FormControl(null, Validators.required);
  email = new FormControl(null, Validators.required);
  pswd = new FormControl(null, Validators.required);
  constructor(private login :LoginService, private router: Router){}

  ngOnInit(): void {
    console.log(this.userName.value)
  
  }
  onLogin(){
    console.log(this.userName.value)
    console.log(this.email.value)
    console.log(this.pswd.value)
    this.login.loginTrue()
  }
  onSignup(){
    
    this.login.signupTrue()

  }
}
