import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { WebPreviewInterface } from '../../interfaces/web.preview.interface';
import { WebDetailsInterface } from '../../interfaces/web.details.interface';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit{
seasonList = [""];
numberOfSeasons=0
selectedSeason = "Season 1";
displayEpisodes=[{season:'1',premium:false,image:'https://image-resizer-cloud-api.akamaized.net/image/FC5A54D0-782F-48E0-8176-078020F90821/0-16x9.jpg?width=323',title:'We Are Back',episodeNo:'1',duration:'24',description:"Geetha and Subbu's roles as tester and developer in the same team cause conflict. Forced to perform in a skit, they fight, creating tension. What happens next unfolds their future."},];
episodeList = [
  {season:'',premium:false,image:'',title:'',episodeNo:'',duration:'',description:""},
]
ngOnInit(): void {
  this.seasonList=[]
  this.jsonService.getWebDetails().subscribe((data:WebDetailsInterface)=>{
        this.numberOfSeasons=data.numberOfSeasons;
        this.episodeList=data.episodeList;
        for (let i = 0; i < data.numberOfSeasons; i++) {
         this.seasonList.push(`Season ${(i+1)}`)
        }
        this.displayEpisodes=[]
  this.episodeList.forEach((e)=>{
    if(e.season=="1"){
      this.displayEpisodes.push(e)
    }
  })
  })
 
}

constructor(private jsonService:JsonService){
    
}
seasonSelected(value:any){
  this.displayEpisodes=[]
  this.episodeList.forEach((e)=>{
    if(e.season==value.match(/\d/g)){
      this.displayEpisodes.push(e)
    }
  })
}

}
