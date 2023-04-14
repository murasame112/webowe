import { Component, Input } from '@angular/core';
import {User, UserAdres} from 'src/models/user.model';
import { FormControl, FormGroup} from "@angular/forms"
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
    @Input() user = {
      name: undefined,
      surname: undefined ,
      adress: undefined
    };


}
