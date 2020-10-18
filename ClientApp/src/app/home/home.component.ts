import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedState:IStates;
  states:IStates[];
  constructor() {
    this.states = [
      {name:'Punjab', code:'Pjb'},
      {name:'Sindh', code:'Snd'}
    ];
   }

  ngOnInit(): void {
  }

}
interface IStates{
  name:string;
  code:string;
}
