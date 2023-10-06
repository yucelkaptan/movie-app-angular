import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-populermovies',
  templateUrl: './populermovies.component.html',
  styleUrls: ['./populermovies.component.css']
})
export class PopulermoviesComponent {

  datas: any = [];
  imageApi = "https://image.tmdb.org/t/p/w1280";

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getPopularData();
  }

  getPopularData() {
    this.service.getPopularData()
      .subscribe(res => {
          this.datas = res;
      })
  }

}
