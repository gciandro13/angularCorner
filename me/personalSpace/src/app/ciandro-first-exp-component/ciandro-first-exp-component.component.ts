import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'FirstComponentWithPipe',
  templateUrl: './ciandro-first-exp-component.component.html',
  styleUrls: ['./ciandro-first-exp-component.component.css']
})
export class CiandroFirstExpComponentComponent{
 inputFieldString='';

 onKeyUp(){
 
   console.log(this.inputFieldString);
 }

}
