import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import { TitleContainerComponent } from './title-container/title-container.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { SimilarToThisComponent } from './similar-to-this/similar-to-this.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailsComponent,
    TitleContainerComponent,
    MainContainerComponent,
    SimilarToThisComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
