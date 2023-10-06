import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchComponent } from './components/home/search/search.component';
import { PopulermoviesComponent } from './components/home/populermovies/populermovies.component';
import { TabsComponent } from './components/home/tabs/tabs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';







@NgModule({
  declarations: [ //component
    AppComponent, 
    FilterComponent,
    HeaderComponent,
    HomeComponent,
    MovieComponent,
    SearchComponent,
    PopulermoviesComponent,
    TabsComponent,
    ],
  imports: [  //module
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [], //services
  bootstrap: [AppComponent] // starter component
})
export class AppModule { }