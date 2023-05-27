import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RectangularButtonComponent } from './common/rectangular-button/rectangular-button.component';
import { BodyComponent } from './body/body.component';
import { BodyTitleComponent } from './body/body-title/body-title.component';
import { BodyMainComponent } from './body/body-main/body-main.component';
import { EpisodesComponent } from './body/body-main/episodes/episodes.component';
import { CastComponent } from './body/body-main/cast/cast.component';
import { DetailsComponent } from './body/body-main/details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import { ScrollableListComponent } from './common/scrollable-list/scrollable-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RectangularButtonComponent,
    BodyComponent,
    BodyTitleComponent,
    BodyMainComponent,
    EpisodesComponent,
    CastComponent,
    DetailsComponent,
    ScrollableListComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
