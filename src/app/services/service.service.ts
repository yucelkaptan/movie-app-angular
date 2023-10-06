import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  [x: string]: any;

  apiKey = "cd6a8d693944d0640057506a61ea8109";
  apiURL = `https://api.themoviedb.org/3/`;

  constructor(private http: HttpClient, private router: Router) { }

  datas: any = [];
  imageApi = "https://image.tmdb.org/t/p/w1280";


  getPopularData() {
    let newPath = this.apiURL + `movie/popular?api_key=${this.apiKey}`;
    return this.http.get(newPath);
  }

  getNowPlayingData() {
    let newPath = this.apiURL + `movie/now_playing?api_key=${this.apiKey}`;
    return this.http.get(newPath);
  }

  getUpComingData() {
    let newPath = this.apiURL + `movie/upcoming?api_key=${this.apiKey}`;
    return this.http.get(newPath);
  }

  getTopRatedData() {
    let newPath = this.apiURL + `movie/top_rated?api_key=${this.apiKey}`;
    return this.http.get(newPath);
  }

  getMovieById(movie_id: number) {
    let newPath = this.apiURL + `movie/${movie_id}?api_key=${this.apiKey}`;
    return this.http.get(newPath);
  }

  getReviews(movie_id: number) {
    let newPath = this.apiURL + `movie/${movie_id}/reviews?api_key=${this.apiKey}`;
    return this.http.get(newPath);
  }

  getSearchMovie(query: string) {
    let newPath = this.apiURL + `search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.http.get(newPath);
  }
}
