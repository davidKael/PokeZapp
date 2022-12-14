import { Injectable } from '@angular/core';
import { Generation } from 'src/global/models/Generation';
import { PokemonData } from 'src/global/models/PokeData';

Injectable({
  providedIn: 'root'
})

export function GetAllPokemon(){


  let allPokemonData : PokemonData[] = [];

  fetch('https://pokeapi.co/api/v2/pokemon?limit=151/')
  .then(response => response.json())
  .then(data =>{

      let pokemons = data.results;

      pokemons.map((pokemon: any) => {
          fetch(pokemon.url).then(response => response.json())
          .then(pokeData => {

              allPokemonData.push({Pokemon:pokeData, PokemonSpecies: null});
          })
      })
      
  })
  return allPokemonData;
    
} 

export function GetDetailedData(id :number, pokeData : PokemonData){

   
    let url: string = "https://pokeapi.co/api/v2/pokemon-species/" + id + "/";
 

    fetch(url).then(response  => response.json())
    .then(data =>{
        
        pokeData.PokemonSpecies = data;
    
       
    })
    
}

export function GetGenerationById(id:number, generations : Generation[]){
    let url: string = "https://pokeapi.co/api/v2/generation/" + id + "/";
 
    const foundGeneration = generations.find(g => g.id == id);
    if(foundGeneration != null) return;

    fetch(url).then(response  => response.json())
    .then(data =>{
        
        generations.push(data);
    
        
    })
}