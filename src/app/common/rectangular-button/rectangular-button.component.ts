import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangular-button',
  templateUrl: './rectangular-button.component.html',
  styleUrls: ['./rectangular-button.component.css']
})
export class RectangularButtonComponent{
@Input('button-text') buttonText : string = ''
@Input('background') background : string = 'linear-gradient(0deg, rgb(182, 26, 9) -86.4%, rgb(255, 109, 46))'
}
