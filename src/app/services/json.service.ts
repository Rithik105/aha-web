import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdsInterface } from '../body/interfaces/ads.interface';
import { WebDetailsInterface } from '../body/interfaces/web.details.interface';
import { WebPreviewInterface } from '../body/interfaces/web.preview.interface';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  path="http://localhost:4200/assets/"
  constructor(private httpClient:HttpClient) { }
  getAds(){
    return this.httpClient.get<AdsInterface[]>(this.path+'ads.json')
  }

  getWebPreview(){
    return this.httpClient.get<WebPreviewInterface>(this.path+'web.preview.data.json')
  }
  getWebDetails(){
    return this.httpClient.get<WebDetailsInterface>(this.path+'web.details.data.json')
  }
}
