import { Component } from '@angular/core';

@Component({
  templateUrl: './counter.component.html',
  selector: 'app-counter',
})
export class CounterComponent {
  public counter: number = 10;
  public defaultCounter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
  decreaseBy(value: number): void {
    this.counter -= value;
  }
  reset() {
    this.counter = this.defaultCounter;
  }
}
