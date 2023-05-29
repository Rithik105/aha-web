import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {
castList=[
  {
    title:'',
    imageUrl:''
  }
]
constructor(private json:JsonService){}
ngOnInit(): void {
  this.json.getWebDetails().subscribe((data)=>{
this.castList=data.castList
  })
}

}
