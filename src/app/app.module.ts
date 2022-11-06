import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { PokemonCardItemComponent } from './components/pokemon-card-item/pokemon-card-item.component';
import { LinksFooterComponent } from './components/links-footer/links-footer.component';
import { PokemonDetailsPopupComponent } from './components/pokemon-details-popup/pokemon-details-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonCardItemComponent,
    LinksFooterComponent,
    PokemonDetailsPopupComponent
  ],
  entryComponents: [MatDialogModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
