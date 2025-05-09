import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handle',
  imports: [],
  templateUrl: './event-handle.component.html',
  styleUrl: './event-handle.component.css'
})
export class EventHandleComponent {

  buttonClickEvent = "";
  enter="";
  input="";
  focus = "";

  handleButtonClick(event:MouseEvent){
    const target = event.target as HTMLButtonElement;
    this.buttonClickEvent = `The Button named ${target.name} Clicked`;
  }

  handleEnter(event:MouseEvent){
    this.enter="You Entered Area";
  }
  handleLeave(event:MouseEvent){
    this.enter="You Leaved Area";
  }

  handleInput(event:Event){
    const target = event.target as HTMLInputElement;
    this.input = target.value;
  }

  handleFocus(event:Event){
    this.focus = event.type;
  }
}
