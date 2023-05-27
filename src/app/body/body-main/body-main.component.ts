import { Component } from '@angular/core';

@Component({
  selector: 'app-body-main',
  templateUrl: './body-main.component.html',
  styleUrls: ['./body-main.component.css']
})
export class BodyMainComponent {
selectedTab = 'episodes'
cardList = [
  {
    title:'Santhosham Awards 2022',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/E51CB6A8-D3A9-474C-84E7-BDB6B2980239/0-16x9.jpg?width=266'
  },
  {
    title:'Mister Pellam',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/E9F1B1FE-D492-4132-A6CB-5EC5928BEB9F/0-16x9.jpg?width=266'
  },
  {
    title:'Shock',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/92E6ED76-4BBB-43F9-A08A-586F2B40811A/0-16x9.jpg?width=266'
  },
  {
    title:"Vijay Sethupathi",
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/1D67B609-AC68-4A94-B80E-D0B8437B5519/0-16x9.jpg?width=266'
  }, 
  {
    title:'Santhosham Awards 2022',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/20CD128F-B402-4734-B1AF-56FBE79E465F/0-16x9.jpg?width=266'
  },
  {
    title:'Santhosham Awards 2022',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/E51CB6A8-D3A9-474C-84E7-BDB6B2980239/0-16x9.jpg?width=266'
  },
  {
    title:'Mister Pellam',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/E9F1B1FE-D492-4132-A6CB-5EC5928BEB9F/0-16x9.jpg?width=266'
  },
  {
    title:'Shock',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/92E6ED76-4BBB-43F9-A08A-586F2B40811A/0-16x9.jpg?width=266'
  },
  {
    title:"Vijay Sethupathi",
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/1D67B609-AC68-4A94-B80E-D0B8437B5519/0-16x9.jpg?width=266'
  }, 
  {
    title:'Santhosham Awards 2022',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/20CD128F-B402-4734-B1AF-56FBE79E465F/0-16x9.jpg?width=266'
  },
  {
    title:'Santhosham Awards 2022',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/E51CB6A8-D3A9-474C-84E7-BDB6B2980239/0-16x9.jpg?width=266'
  },
  {
    title:'Mister Pellam',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/E9F1B1FE-D492-4132-A6CB-5EC5928BEB9F/0-16x9.jpg?width=266'
  },
  {
    title:'Shock',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/92E6ED76-4BBB-43F9-A08A-586F2B40811A/0-16x9.jpg?width=266'
  },
  {
    title:"Vijay Sethupathi",
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/1D67B609-AC68-4A94-B80E-D0B8437B5519/0-16x9.jpg?width=266'
  }, 
  {
    title:'Santhosham Awards 2022',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/20CD128F-B402-4734-B1AF-56FBE79E465F/0-16x9.jpg?width=266'
  },
]
popularList = [
  {
    title:'Mister Pellam',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/E9F1B1FE-D492-4132-A6CB-5EC5928BEB9F/0-16x9.jpg?width=266'
  },
  {
    title:'Shock',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/92E6ED76-4BBB-43F9-A08A-586F2B40811A/0-16x9.jpg?width=266'
  },
  {
    title:"Vijay Sethupathi",
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/1D67B609-AC68-4A94-B80E-D0B8437B5519/0-16x9.jpg?width=266'
  }, 
  {
    title:'Santhosham Awards 2022',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/20CD128F-B402-4734-B1AF-56FBE79E465F/0-16x9.jpg?width=266'
  },
  {
    title:'Santhosham Awards 2022',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/E51CB6A8-D3A9-474C-84E7-BDB6B2980239/0-16x9.jpg?width=266'
  },
  {
    title:'Mister Pellam',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/E9F1B1FE-D492-4132-A6CB-5EC5928BEB9F/0-16x9.jpg?width=266'
  },
  {
    title:'Mister Pellam',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/E9F1B1FE-D492-4132-A6CB-5EC5928BEB9F/0-16x9.jpg?width=266'
  },
  {
    title:'Shock',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/92E6ED76-4BBB-43F9-A08A-586F2B40811A/0-16x9.jpg?width=266'
  },
  {
    title:"Vijay Sethupathi",
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/1D67B609-AC68-4A94-B80E-D0B8437B5519/0-16x9.jpg?width=266'
  }, 
  {
    title:'Santhosham Awards 2022',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/20CD128F-B402-4734-B1AF-56FBE79E465F/0-16x9.jpg?width=266'
  },
  {
    title:'Santhosham Awards 2022',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/E51CB6A8-D3A9-474C-84E7-BDB6B2980239/0-16x9.jpg?width=266'
  },
  {
    title:'Mister Pellam',
    imageUrl:'https://image-resizer-cloud-api.akamaized.net/image/E9F1B1FE-D492-4132-A6CB-5EC5928BEB9F/0-16x9.jpg?width=266'
  },

]
tabPressed(tab:string){
  this.selectedTab=tab;
}
}
