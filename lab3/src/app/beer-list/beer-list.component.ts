import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent {
  constructor() {}
  @Input() list: any;
  @Output() selectedBeer = new EventEmitter()

  protected onBeerSelect(beer: any){
    this.selectedBeer.emit(beer) // emituje do rodzica
  }
}
