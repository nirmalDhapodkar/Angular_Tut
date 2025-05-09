import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handle',
  imports: [],
  templateUrl: './event-handle.component.html',
  styleUrl: './event-handle.component.css'
})
export class EventHandleComponent {

  handleEvent(event:Event){
    console.log("Event called", event.type);
    console.log("value", (event.target as HTMLInputElement).value);
  }

}
