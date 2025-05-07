import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

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
