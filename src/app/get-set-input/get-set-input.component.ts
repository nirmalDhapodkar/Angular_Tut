import { Component } from '@angular/core';

@Component({
  selector: 'app-get-set-input',
  imports: [],
  templateUrl: './get-set-input.component.html',
  styleUrl: './get-set-input.component.css'
})
export class GetSetInputComponent {
  name="";
  displayName="";
  email=""
  getName(event:Event){
    this.name =(event.target as HTMLInputElement).value;
  }

  showName(){
    this.displayName=this.name;
  }

  setName(){
    this.name = "sam";
    this.showName();
  }

  getEmail(val:string){
    this.email=val;
  }

  setEmail(){
    this.email="default@text.com"
  }
}
