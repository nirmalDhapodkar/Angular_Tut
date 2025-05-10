import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { EventHandleComponent } from "./event-handle/event-handle.component";
import { GetSetInputComponent } from "./get-set-input/get-set-input.component";
import { IfStatementComponent } from "./if-statement/if-statement.component";
import { SwitchStatementComponent } from "./switch-statement/switch-statement.component";


@Component({
  selector: 'app-root',
  imports: [SwitchStatementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
