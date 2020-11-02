import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BullsAndCowsMainComponent } from './bulls-and-cows-main/bulls-and-cows-main.component';

@NgModule({
  declarations: [
    AppComponent,
    BullsAndCowsMainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      },
      {
        path: 'bullsandcows',
        component: BullsAndCowsMainComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
