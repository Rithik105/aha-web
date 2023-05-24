import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangular-button',
  templateUrl: './rectangular-button.component.html',
  styleUrls: ['./rectangular-button.component.css']
})
export class RectangularButtonComponent implements OnInit{
@Input('width') width : number = 0;
@Input('height') height : number = 0;
@Input('button-text') buttonText : string = ''
ngOnInit(): void {
  const button = document.getElementById('rectangular-button');
  if(button!=null){
  button.style.width=`${this.width}px`
  button.style.height=`${this.height}px`
 
}
}
}
