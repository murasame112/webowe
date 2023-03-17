import { Component, OnInit} from '@angular/core';
import {BeerApiService} from './beer-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  protected selectedBeer:any;
  protected beerList: any;

  onBeerSelect(beer:any){
    this.selectedBeer = beer;
  }

  constructor(private beerApi: BeerApiService) {}
  ngOnInit(){

    this.beerApi.getBeers().subscribe(data => this.beerList = data);

    // subscribe to odpowiednik .then, tylko ze dla observable
  }
}
