import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent {
  @Input() title: string = '';
  @Input() color: string = '';
  @Input() value: string = '';
  @Input() iconUrl: string = '';
 }
