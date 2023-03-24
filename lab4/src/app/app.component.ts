import { Component } from '@angular/core';
import {CSS} from 'src/models/css.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab4';
  css: CSS = {
    color: undefined,
    backgroundColor: undefined,
    border: undefined,
    fontSize: undefined
  };

  onGenerateCSS(css: CSS){
      this.css = css;
  }
}
