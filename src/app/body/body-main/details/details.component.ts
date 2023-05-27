import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
detailsList=[
  {
    title:'Director',
    value:'Sri Prawin Kumar'
  },
  {
    title:'Studio',
    value:'Mirage Media'
  }
]
}
