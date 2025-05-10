import { Component } from '@angular/core';

@Component({
  selector: 'app-if-statement',
  imports: [],
  templateUrl: './if-statement.component.html',
  styleUrl: './if-statement.component.css'
})
export class IfStatementComponent {
  display='Green';
  array = ['Green', 'Blue', 'Red', 'Gold', 'Purple']
  track=0;

  change(what:boolean){
    if(!what && this.track>0) this.track--;
    else if(what && this.track<4) this.track++;
    this.display = this.array[this.track];
  } 
}
