import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  handleClickEvent(){
    alert('Function Called');
    this.otherFunction();
  }

  otherFunction(){
    console.log('Hello');
  }
}
