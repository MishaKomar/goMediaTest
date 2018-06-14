import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MenuSideComponent } from './menu-side/menu-side.component';
import { FilmsListComponent } from './films-list/films-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuSideComponent,
    FilmsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
