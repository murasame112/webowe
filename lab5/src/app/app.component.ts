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
export class AppComponent{
  title = 'lab5';
  user = {
    name: undefined,
    surname: undefined,
    adress: undefined
  };

  OnCheck(){
      this.user;
  }


}
