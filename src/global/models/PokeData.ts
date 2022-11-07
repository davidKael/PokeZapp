import { environment } from "src/environments/environment";
import { Pokemon } from "./Pokemon";
import { PokemonSpecies } from "./PokemonSpecies";

export class PokemonData{
    Pokemon!: Pokemon | null; 
    PokemonSpecies!: PokemonSpecies | null;

}