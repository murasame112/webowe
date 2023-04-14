import { Component, OnDestroy, OnInit } from '@angular/core';
import {User} from 'src/models/user.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Subscription } from 'rxjs'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'lab5';

  name!: FormControl<string | null>
  user!: FormGroup<User>
  subValue!: Subscription


  constructor(private readonly fb: FormBuilder) {}
  ngOnInit(): void {
    this.user = this.fb.nonNullable.group({
      name: new FormControl(),
      surname: new FormControl(),

    })

    this.subValue = this.user.valueChanges.subscribe(data => console.log(data))


  }
  onCheck() {

    //console.log(this.user.valueChanges);
    console.log(this.user.getRawValue());
  }
  ngOnDestroy(): void {
    this.subValue!.unsubscribe();
  }


}
