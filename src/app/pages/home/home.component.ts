import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service: ApiServiceService, private login :LoginService){}

  bannerResult: any = [];
  trendingResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.login.isLoggedIn()
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
  }

  bannerData(){
    this.service.bannerApiData().subscribe((res)=>{
      console.log(res, 'bannerresult#');
      this.bannerResult= res.results
    });
  }

  trendingData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,"TrendingResult");
      this.trendingResult=result.results
    })
  }
 // action 
 actionMovie() {
  this.service.fetchActionMovies().subscribe((result) => {
    this.actionMovieResult = result.results;
  });
}




// adventure 
adventureMovie() {
  this.service.fetchAdventureMovies().subscribe((result) => {
    this.adventureMovieResult = result.results;
  });
}


// animation 
animationMovie() {
  this.service.fetchAnimationMovies().subscribe((result) => {
    this.animationMovieResult = result.results;
  });
}


// comedy 
comedyMovie() {
  this.service.fetchComedyMovies().subscribe((result) => {
    this.comedyMovieResult = result.results;
  });
}

// documentary 
documentaryMovie() {
  this.service.fetchDocumentaryMovies().subscribe((result) => {
    this.documentaryMovieResult = result.results;
  });
}


// science-fiction 
sciencefictionMovie() {
  this.service.fetchScienceFictionMovies().subscribe((result) => {
    this.sciencefictionMovieResult = result.results;
  });
}

// thriller
thrillerMovie() {
  this.service.fetchThrillerMovies().subscribe((result) => {
    this.thrillerMovieResult = result.results;
  });
}

}

