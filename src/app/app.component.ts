import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { EventHandleComponent } from "./event-handle/event-handle.component";
import { GetSetInputComponent } from "./get-set-input/get-set-input.component";


@Component({
  selector: 'app-root',
  imports: [CounterComponent, EventHandleComponent, GetSetInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
