import { Component } from '@angular/core';
import {CSS} from 'src/models/css.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lab4';

  onGenerateCSS(css: CSS){
    console.log(css.color);
  }
}
