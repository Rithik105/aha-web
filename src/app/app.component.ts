import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aha-web';
  headerTransparent = true
  @HostListener('window:scroll',[])
  onScroll(){
    if(window.scrollY>0){
       this.headerTransparent = false
    }
    else{
      this.headerTransparent=true
    }
  }
 
 }
