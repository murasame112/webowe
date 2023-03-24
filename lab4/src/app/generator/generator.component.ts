import { Component, Input } from '@angular/core';
import {CSS} from 'src/models/css.model';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {
  @Input() css: CSS = {
    color: undefined,
    backgroundColor: undefined,
    border: undefined,
    fontSize: undefined
  };
}
