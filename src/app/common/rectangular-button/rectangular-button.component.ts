import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangular-button',
  templateUrl: './rectangular-button.component.html',
  styleUrls: ['./rectangular-button.component.css']
})
export class RectangularButtonComponent{
@Input('width') width = 60
@Input('height') height : string = '26px'
@Input('button-text') buttonText : string = ''
@Input('backgorund') background : string = 'linear-gradient(0deg, rgb(182, 26, 9) -86.4%, rgb(255, 109, 46))'
}
