import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
footerList=[
  {
    title:'Must Watch Movies',
    content:['Masooda','Sardar','Ori Devuda','Swathi Muthyam','DJ Tillu']
  },
  {
    title:'Popular Telugu Movies',
    content:['Pakka Commercial','Love Story','Colour Photo','Krack','Sulthan']
  },
  {
    title:'Genres',
    content:['Telugu Drama Movies','Telugu Comedy Movies','Telugu Action Movies','Telugu Romance Movies'
      ]
  },
  {
    title:'Learn More',
    content:['View Plans','About Us','FAQs / Help','Privacy Policy','Terms of Service','Grievance Redressal','Blog']
  }
]
}
