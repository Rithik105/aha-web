import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
@Input('transparent') transparent:boolean = false
titleList=['Home','Telugu Indian Idol','Movies','Shows','Kids','My aha']
}
