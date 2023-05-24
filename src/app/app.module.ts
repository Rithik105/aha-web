import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import { TitleContainerComponent } from './details/title-container/title-container.component';
import { FooterComponent } from './footer/footer.component';
import { MainContainerComponent } from './details/main-container/main-container.component';
import { RectangularButtonComponent } from './common/rectangular-button/rectangular-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailsComponent,
    TitleContainerComponent,
    FooterComponent,
    MainContainerComponent,
    RectangularButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
