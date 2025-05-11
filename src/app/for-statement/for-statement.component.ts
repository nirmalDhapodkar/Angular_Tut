import { Component } from '@angular/core';

@Component({
  selector: 'app-for-statement',
  imports: [],
  templateUrl: './for-statement.component.html',
  styleUrl: './for-statement.component.css'
})
export class ForStatementComponent {
  basket = ['Apple', 'Banana', 'Orange', 'Strawberry', 'Blueberry'];

  employees = [
    {name:'Don Joe', MobNo:'94XXXXXXXX', email:'DonJoe@test.com'},
    {name:'Apple Joe', MobNo:'95XXXXXXXX', email:'AppleJoe@test.com'},
    {name:'Banana Joe', MobNo:'96XXXXXXXX', email:'BananaJoe@test.com'},
    {name:'Orange Joe', MobNo:'97XXXXXXXX', email:'OrangeJoe@test.com'},
    {name:'Strawberry Joe', MobNo:'98XXXXXXXX', email:'SrawberryJoe@test.com'},
  ]

}
