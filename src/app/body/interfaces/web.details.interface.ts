export interface WebDetailsInterface{
    numberOfSeasons:number
    castList:CastInterface[];
    detailsList:DetailInterface[];
    episodeList:EpisodeInterface[];
}
export interface CastInterface{
  title:string;
  imageUrl:string;
}
export interface DetailInterface{
    title:string;
    value:string;
}
export interface EpisodeInterface{
season:string;
premium:boolean;
image:string;
title:string;
episodeNo:string;
duration:string;
description:string;
}
