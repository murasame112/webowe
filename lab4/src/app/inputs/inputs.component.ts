import { Component, Output, EventEmitter} from '@angular/core';
import {CSS} from 'src/models/css.model';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})

export class InputsComponent{
  @Output() myStyles = new EventEmitter();
  protected css: CSS = {
    color: undefined,
    backgroundColor: undefined,
    border: undefined,
    fontSize: undefined
  }


  protected onGenerateCSS(css: CSS) {
    this.myStyles.emit(css);
    //this.css.color
  }
}




// protected selectedBeer:any;
// protected beerList: any;

// onBeerSelect(beer:any){
//   this.selectedBeer = beer;
// }

// constructor(private beerApi: BeerApiService) {}
// ngOnInit(){

//   this.beerApi.getBeers().subscribe(data => this.beerList = data);

//   // subscribe to odpowiednik .then, tylko ze dla observable
// }

// export class BeerDetailsComponent {
//   @Input() beer: any; // to any ma byc zastepione modelem

// }
