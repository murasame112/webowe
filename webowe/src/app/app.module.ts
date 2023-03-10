import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListUserComponent } from './list-user/list-user.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { MediumCardComponent } from './medium-card/medium-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    SmallCardComponent,
    MediumCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
