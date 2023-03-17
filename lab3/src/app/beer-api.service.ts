import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeerApiService {

  constructor(private http: HttpClient) { }

  getBeers(){
    const url = "https://api.punkapi.com/v2/beers?page=1&per_page=30 ";
    return this.http.get(url);
    // zamiast get mozna tez post, put, patch etc
  }
}
