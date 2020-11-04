import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bulls-and-cows-main',
  templateUrl: './bulls-and-cows-main.component.html',
  styleUrls: ['./bulls-and-cows-main.component.scss']
})
export class BullsAndCowsMainComponent implements OnInit {
  secret: any[];
  guess: any[];
  results: any[];
  win: boolean;
  guessLen: number;
  constructor(private path: ActivatedRoute) { }

  ngOnInit(): void {
    this.reset();
    this.guessLen = 4;
    this.secret = this.randomSequence;
    this.win = false;
    this.results = [];
  }

  private reset(): void {
    this.guess = [];
  }

  onInput(guesses: any[]): void {
    console.log(this.secret);
    this.verifyGuess(guesses);
    this.reset();
  }

  verifyGuess(guesses: any[]): void {
    let bulls = 0;
    let cows = 0;
    this.secret.forEach((val, index, arr) => {
      if (this.guess.includes(val) === true) {
        if (this.guess[index] === arr[index]) {
          bulls += 1;
        } else { cows += 1; }
      }
    });
    this.results.push({ guess: [...this.guess], result: { bulls, cows } });
    guesses.forEach(guessElement => guessElement.value = '');
    this.reset();
    if (bulls === this.guessLen) { this.win = true; }
    // throw new Error(`Method not implemented., ${this.results}`);
  }

  get randomSequence(): string[] {
    {
      const quest = [];
      for (let i = 0; i < this.guessLen; i++) {
        let rand = '' + Math.floor(Math.random() * 9);
        while (quest.includes(rand)) {
          rand = '' + Math.floor(Math.random() * 9);
        }
        quest[i] = ('' + rand);
      }
      return quest;
    }
  }

  updateGuess(e: string): void {
    console.log(this.guess.push(e));
  }

}
