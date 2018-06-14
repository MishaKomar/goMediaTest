import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MenuSideComponent } from './menu-side/menu-side.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmDetailsComponent } from './film-details/film-details.component';

import { ModalService } from './services/modal.service';
import { FilmsProviderService } from './services/films-provider.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuSideComponent,
    FilmsListComponent,
    FilmDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    ModalService,
    FilmsProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
