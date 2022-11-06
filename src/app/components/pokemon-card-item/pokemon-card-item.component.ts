import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PokemonData } from 'src/global/models/PokeData';
import { FlavorTextEntry } from 'src/global/models/PokemonSpecies';
import { CommonsService } from 'src/global/services/commons/commons.service';


@Component({
  selector: 'app-pokemon-card-item',
  templateUrl: './pokemon-card-item.component.html',
  styleUrls: ['./pokemon-card-item.component.scss']
})
export class PokemonCardItemComponent implements OnInit {

  @Input('pokemon') pokemon: PokemonData  = new PokemonData();
  @Output('expandContainer') expandContainer = new EventEmitter<PokemonData>();
  @Input('selected') selected : boolean = false;
  showDetails : boolean = false;
  currFlavorTextIndex : number = 1;
  public currFlavoredText : FlavorTextEntry | null = null;

  constructor(public commons : CommonsService) { }

  ngOnInit(): void {

  }

  showDetailsClick(){
    this.expandContainer.emit(this.pokemon);
    this.showDetails = true;
 
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
      //text = this.pokemon.PokemonSpecies?.flavor_text_entries[this.currFlavorTextIndex].flavor_text || "";
    
    
   
  
}
