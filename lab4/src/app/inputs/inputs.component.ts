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

