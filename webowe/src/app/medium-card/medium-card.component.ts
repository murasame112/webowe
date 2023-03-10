import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-medium-card',
  templateUrl: './medium-card.component.html',
  styleUrls: ['./medium-card.component.scss']
})
export class MediumCardComponent {
  @Input() title: string = '';
  @Input() precentType: boolean = false;
  @Input() value: string = '';
  @Input() imageUrl: string = '';
}
