import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count: number = 0;

  handleIncrement() {
    this.count++;
  }

  handleDecrement() {
    this.count && this.count--;
  }

  handleReset() {
    this.count = 0;
  }
}
