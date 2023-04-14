import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, FormArray, FormRecord, FormBuilder } from '@angular/forms';

import {User} from 'src/models/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent /*implements OnInit */{
  // user!
  // this.user = this.fb.nonNullable.group({
  //   imie: '',
  //   nazwisko: '',

  // })


  // ngOnInit(): void {
  // }

  // onCheck() {
  //   console.log(this.login)
  //   console.log(this.login?.value)
  //   // pobranie wszystkich wartości
  //   console.log(this.user.getRawValue())
  // }

}



