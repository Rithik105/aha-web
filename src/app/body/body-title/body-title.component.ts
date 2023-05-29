import { Component, OnInit } from '@angular/core';
import { WebPreviewInterface } from '../interfaces/web.preview.interface';
import { JsonService } from 'src/app/services/json.service';

@Component({
  selector: 'app-body-title',
  templateUrl: './body-title.component.html',
  styleUrls: ['./body-title.component.css']
})
export class BodyTitleComponent implements OnInit{
 
titleObject:WebPreviewInterface = {title:"",
imageUrl:"",
details:[],
description:'',  
genre:[],
}

constructor(private json:JsonService){}

ngOnInit(): void {
  this.json.getWebPreview().subscribe((data)=>{
    this.titleObject=data
  })
}
}
