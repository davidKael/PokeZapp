import { Component } from '@angular/core';
import { PokemonData } from 'src/global/models/PokeData';
import { CommonsService } from 'src/global/services/commons/commons.service';
import { GetAllPokemon, GetDetailedData } from 'src/global/services/pokemon-API/pokemon-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testar';
  selectedPokemonId : number = -1;

  pokemons : PokemonData[] = [];

  constructor(public commons : CommonsService){}
  ngOnInit(){
    this.pokemons  = GetAllPokemon();

  }



  GetDetailedPokeInfo(pokemonData: PokemonData){
    

    if(pokemonData.Pokemon?.id){


      let index = this.getPokemonIndexById(pokemonData.Pokemon?.id);

      let id = this.pokemons[index].Pokemon?.id || null;
      
      if(id){
        
        if(!this.pokemons[index].PokemonSpecies){
          GetDetailedData(id, this.pokemons[index]);
          
        }
        this.selectedPokemonId = id;
        
      }
  
    }
   
  }

  getPokemonIndexById(id:number){
    
    let index = this.pokemons.findIndex(p => p.Pokemon?.id == id);
 
   
    
    return index;
  }
  
}
