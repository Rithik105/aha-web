import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { AdsInterface } from '../interfaces/ads.interface';
import { CardDetail } from '../interfaces/ads.interface';

@Component({
  selector: 'app-body-main',
  templateUrl: './body-main.component.html',
  styleUrls: ['./body-main.component.css']
})
export class BodyMainComponent implements OnInit{
selectedTab = 'episodes'
adList:AdsInterface[]= []
constructor(private json:JsonService){}
 ngOnInit(): void {
   this.json.getAds().subscribe((data:AdsInterface[])=>{
        this.adList=data 
   })
 }
tabPressed(tab:string){
  this.selectedTab=tab;
}
}
