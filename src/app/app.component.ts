import { Component,HostListener,OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'OTT';
  navbg:any;
  isLoginPage: boolean = false;
  constructor(private router: Router) {}
  ngOnInit() {
    // Subscribe to router events to check for the login page route
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = this.router.url === '/login';
        console.log("isLoginPage",this.isLoginPage,this.router.url)
      }
    });
  }
  @HostListener('document:scroll')scrollbar(){

    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.navbg = {
        'background-color':'#000000'
      }
    }else
    {
        this.navbg = {}
    }
  }
}
