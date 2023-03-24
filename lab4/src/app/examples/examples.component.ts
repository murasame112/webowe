import { Component, Input } from '@angular/core';
import {CSS} from 'src/models/css.model';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent {
  @Input() css: CSS = {
    color: undefined,
    backgroundColor: undefined,
    border: undefined,
    fontSize: undefined
  };
}
