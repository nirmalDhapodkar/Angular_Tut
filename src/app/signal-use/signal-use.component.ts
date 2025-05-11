import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-use',
  imports: [],
  templateUrl: './signal-use.component.html',
  styleUrl: './signal-use.component.css'
})
export class SignalUseComponent {
  count =  signal(10);
  x = 20;

  constructor(){
    effect(()=>{
      console.log(this.count())
    })
  }

  update(){
    this.count.set(this.count()+30);
  }
}
