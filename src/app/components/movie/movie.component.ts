import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  [x: string]: any;

  datas: any = [];
  reviewsData: any = [];
  localStorageData: any = [];
  imageApi = "https://image.tmdb.org/t/p/w1280";

  

  constructor(private service: ServiceService,
    private activatedRoute: ActivatedRoute,

  ) { }


  ngOnInit(): void {
    this.setItems();
    this.activatedRoute.params.subscribe((params: { [x: string]: number; }) => {
      this.getMovieById(params['movie_id']);
      this.getReviews(params['movie_id']);
    })
  }


  getMovieById(movie_id: number) {
    this.service.getMovieById(movie_id)
      .subscribe((res: any) => {
        this.datas = res;
        console.log(this.datas)
      })
  }

  getReviews(movie_id: number) {
    this.service.getReviews(movie_id)
      .subscribe((res: any) => {
        this.reviewsData = res;
      })
  }

  id: any = "about-movie"
  tabChange(ids: any) {
    this.id = ids;
    console.log(this.id)
  }

  addStorage(item: any) {
    this.localStorageData.push(item);
    localStorage.setItem('localStorageData', JSON.stringify(this.localStorageData));
  }

  setItems() {
    if (!localStorage.getItem('localStorageData')) {
      localStorage.setItem('localStorageData', JSON.stringify(this.localStorageData));
    } else {
      this.localStorageData = JSON.parse(localStorage.getItem('localStorageData')!);
    }
  }

}
