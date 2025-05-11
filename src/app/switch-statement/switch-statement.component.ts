import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { EventHandleComponent } from "../event-handle/event-handle.component";
import { GetSetInputComponent } from "../get-set-input/get-set-input.component";
import { IfStatementComponent } from "../if-statement/if-statement.component";
import { ForStatementComponent } from "../for-statement/for-statement.component";
import { SignalUseComponent } from "../signal-use/signal-use.component";

@Component({
  selector: 'app-switch-statement',
  imports: [CounterComponent, EventHandleComponent, GetSetInputComponent, IfStatementComponent, ForStatementComponent, SignalUseComponent],
  templateUrl: './switch-statement.component.html',
  styleUrl: './switch-statement.component.css'
})
export class SwitchStatementComponent {
  tab = 'One';
  changeTab(arg:string){
    this.tab = arg;
  }
}
