import { Component } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
detailsList=[
  {
    title:'',
    value:''
  }
]

constructor(private json:JsonService){}
ngOnInit(): void {
  this.json.getWebDetails().subscribe((data)=>{
this.detailsList=data.detailsList
  })
}
}
