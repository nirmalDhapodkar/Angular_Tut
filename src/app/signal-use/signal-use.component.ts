import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-use',
  imports: [],
  templateUrl: './signal-use.component.html',
  styleUrl: './signal-use.component.css'
})
export class SignalUseComponent {
  data : WritableSignal<number|string> = signal(10);
  count:Signal<number> = computed(()=>200);

  update(){
    this.data.set("Hello");
  }

  // computed signal
  x = signal(10);
  y = signal(20);
  z = computed(()=>this.x()+this.y());

  updateX(){
    this.x.set(this.x()+10);
  }
}
