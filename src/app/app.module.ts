import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BullsAndCowsMainComponent } from './bulls-and-cows-main/bulls-and-cows-main.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { GuessNumberComponent } from './guess-number/guess-number.component';

@NgModule({
  declarations: [
    AppComponent,
    BullsAndCowsMainComponent,
    ResultTableComponent,
    GuessNumberComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: BullsAndCowsMainComponent
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
