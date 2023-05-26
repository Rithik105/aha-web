import { Component } from '@angular/core';

@Component({
  selector: 'app-body-main',
  templateUrl: './body-main.component.html',
  styleUrls: ['./body-main.component.css']
})
export class BodyMainComponent {
selectedTab = 'episodes'
tabPressed(tab:string){
  this.selectedTab=tab;
}
}
