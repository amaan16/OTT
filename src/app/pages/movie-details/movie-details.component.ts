import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  constructor(private service:ApiServiceService,private router:ActivatedRoute, private login :LoginService){

  }
  getMovieResult:any;
  getMovieCastResult:any;
  ngOnInit(){
    this.login.isLoggedIn()
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log("getParamId",getParamId)
    this.getMovie(getParamId);
    this.getMovieCast(getParamId);
  }


  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result)=>{
      console.log(result,'getmoviessetails');
      this.getMovieResult= result;
    });
  }


  getMovieCast(id:any)
  {
    this.service.getMovieCast(id).subscribe((result)=>{
      console.log(result,'movieCast#');
      this.getMovieCastResult = result.cast;
    });
  }
}


