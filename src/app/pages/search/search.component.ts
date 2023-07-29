import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { RouterModule, Routes } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service: ApiServiceService, private login :LoginService){

  }

  ngOnInit(): void {
    this.login.isLoggedIn()
  }

  searchRsult : any;

  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  });

  submitForm(){
    console.log(this.searchForm.value.movieName,'searchform');
    this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
      console.log(result,'searchmovie##');
      this.searchRsult= result.results
    })
  }
}
