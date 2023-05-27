import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scrollable-list',
  templateUrl: './scrollable-list.component.html',
  styleUrls: ['./scrollable-list.component.css']
})
export class ScrollableListComponent {
  @Input('title') title=""
  @Input('container-list') cardList=[{title:'',imageUrl:''}]
  visible=false;
  scrolled=0;
  @ViewChild('widgetsContent', { read: ElementRef })
  public widgetsContent!: ElementRef<any>;

  public scrollRight(): void {
    this.scrolled=this.scrolled+1
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.scrolled=this.scrolled-1
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }

  constructor(){
    console.log("hi");
    
  }
}
