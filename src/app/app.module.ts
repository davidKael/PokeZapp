import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonCardItemComponent } from './components/pokemon-card-item/pokemon-card-item.component';
import { LinksFooterComponent } from './components/links-footer/links-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardItemComponent,
    LinksFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
