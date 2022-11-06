import { Component, Inject, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PokemonData } from 'src/global/models/PokeData';
import { FlavorTextEntry } from 'src/global/models/PokemonSpecies';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { CommonsService } from 'src/global/services/commons/commons.service';




@Component({
  selector: 'app-pokemon-details-popup',
  templateUrl: './pokemon-details-popup.component.html',
  styleUrls: ['./pokemon-details-popup.component.scss']
})


export class PokemonDetailsPopupComponent{

  
  constructor(public commons : CommonsService, @Inject(MAT_DIALOG_DATA)public pokemon:PokemonData) { }
  //@Input('pokemon') pokemon: PokemonData  = new PokemonData();

  public currFlavoredText : FlavorTextEntry | null = null;

  ngOnInit(): void {
  }



  getFlavorText(){

    if(this.pokemon.PokemonSpecies?.flavor_text_entries){
        
      const arr = this.pokemon.PokemonSpecies?.flavor_text_entries;

      let res = arr.filter(a => a.language.name == environment.language);
      if(res.length > 0){
        this.currFlavoredText = res[0];
        return this.currFlavoredText.flavor_text;  
      }
      return this.currFlavoredText != null ? this.currFlavoredText.flavor_text : "";
        
    }
    return "";
  }
}

