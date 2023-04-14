import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import {User} from 'src/models/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit, OnDestroy{
  @Output() myUser = new EventEmitter();


  name!: FormControl<string | null>
  user!: FormGroup<User>
  subValue!: Subscription


  constructor(private readonly fb: FormBuilder) {}
  ngOnInit(): void {
    this.user = this.fb.nonNullable.group({
      name: '',
      surname: '',
      adress: this.fb.nonNullable.group({
        city: '',
        street: '',
        postalCode: '',
        number: this.fb.control<number | null>(null),
      })

    })

    this.subValue = this.user.valueChanges.subscribe(data =>
      this.myUser.emit(data))


  }
  onCheck() {
    console.log(this.user.getRawValue());
    this.myUser.emit(this.user.getRawValue());
  }
  ngOnDestroy(): void {
    this.subValue!.unsubscribe();
  }
}



