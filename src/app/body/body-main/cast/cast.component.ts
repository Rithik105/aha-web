import { Component } from '@angular/core';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent {
castList=[
  {
    title:'Vishwak Sen',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/vishwak-sen/0-1x1.jpg?width=146'
  },
  {
    title:'Nivetha Pethuraj',
imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/nivetha-pethuraj/0-1x1.jpg?width=146'
  },
  {
    title:'Rao Ramesh',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/rao-ramesh/0-1x1.jpg?width=146'
  },
  {
    title:'Prudhvi Raj',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/prudhvi-raj/0-1x1.jpg?width=146'
 
  },
  {
    title:'Rohini',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/rohini/0-1x1.jpg?width=146'
  },
  {
    title:'Hyper Adhi',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/hyper-adhi/0-1x1.jpg?width=146'
  }
]
}
