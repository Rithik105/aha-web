import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent{
seasonList = ['Season 1','Season 2','Season 3'];
selectedSeason = "Season 1";
episodeList = [
  {premium:false,image:'https://image-resizer-cloud-api.akamaized.net/image/FC5A54D0-782F-48E0-8176-078020F90821/0-16x9.jpg?width=323',title:'We Are Back',episodeNo:'1',duration:'24',description:"Geetha and Subbu's roles as tester and developer in the same team cause conflict. Forced to perform in a skit, they fight, creating tension. What happens next unfolds their future."},
  {premium:false,image:'https://image-resizer-cloud-api.akamaized.net/image/FC5A54D0-782F-48E0-8176-078020F90821/0-16x9.jpg?width=323',title:'We Are Back',episodeNo:'1',duration:'24',description:"Geetha and Subbu's roles as tester and developer in the same team cause conflict. Forced to perform in a skit, they fight, creating tension. What happens next unfolds their future."},
  {premium:false,image:'https://image-resizer-cloud-api.akamaized.net/image/FC5A54D0-782F-48E0-8176-078020F90821/0-16x9.jpg?width=323',title:'We Are Back',episodeNo:'1',duration:'24',description:"Geetha and Subbu's roles as tester and developer in the same team cause conflict. Forced to perform in a skit, they fight, creating tension. What happens next unfolds their future."},
  {premium:false,image:'https://image-resizer-cloud-api.akamaized.net/image/FC5A54D0-782F-48E0-8176-078020F90821/0-16x9.jpg?width=323',title:'We Are Back',episodeNo:'1',duration:'24',description:"Geetha and Subbu's roles as tester and developer in the same team cause conflict. Forced to perform in a skit, they fight, creating tension. What happens next unfolds their future."},
  {premium:false,image:'https://image-resizer-cloud-api.akamaized.net/image/FC5A54D0-782F-48E0-8176-078020F90821/0-16x9.jpg?width=323',title:'We Are Back',episodeNo:'1',duration:'24',description:"Geetha and Subbu's roles as tester and developer in the same team cause conflict. Forced to perform in a skit, they fight, creating tension. What happens next unfolds their future."},
  {premium:true,image:'https://image-resizer-cloud-api.akamaized.net/image/FC5A54D0-782F-48E0-8176-078020F90821/0-16x9.jpg?width=323',title:'We Are Back',episodeNo:'1',duration:'24',description:"Geetha and Subbu's roles as tester and developer in the same team cause conflict. Forced to perform in a skit, they fight, creating tension. What happens next unfolds their future."},
  {premium:true,image:'https://image-resizer-cloud-api.akamaized.net/image/FC5A54D0-782F-48E0-8176-078020F90821/0-16x9.jpg?width=323',title:'We Are Back',episodeNo:'1',duration:'24',description:"Geetha and Subbu's roles as tester and developer in the same team cause conflict. Forced to perform in a skit, they fight, creating tension. What happens next unfolds their future."},
  {premium:true,image:'https://image-resizer-cloud-api.akamaized.net/image/FC5A54D0-782F-48E0-8176-078020F90821/0-16x9.jpg?width=323',title:'We Are Back',episodeNo:'1',duration:'24',description:"Geetha and Subbu's roles as tester and developer in the same team cause conflict. Forced to perform in a skit, they fight, creating tension. What happens next unfolds their future."}
]


}
