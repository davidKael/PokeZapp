export class PokemonSpecies {
    base_happiness?:         number;
    capture_rate?:           number;
    color?:                  Color;
    egg_groups?:             EggGroup[];
    evolution_chain?:        EvolutionChain;
    evolves_from_species?:   EvolvesFromSpecies;
    flavor_text_entries?:    FlavorTextEntry[];
    form_descriptions?:      any[];
    forms_switchable?:       boolean;
    gender_rate?:            number;
    genera?:                 Genus[];
    generation?:             Generation;
    growth_rate?:            GrowthRate;
    habitat?:                Habitat;
    has_gender_differences?: boolean;
    hatch_counter?:          number;
    id?:                     number;
    is_baby?:                boolean;
    is_legendary?:           boolean;
    is_mythical?:            boolean;
    name?:                   string;
    names?:                  Name[];
    order?:                  number;
    pal_park_encounters?:    PalParkEncounter[];
    pokedex_numbers?:        PokedexNumber[];
    shape?:                  Shape;
    varieties?:              Variety[];
}

export interface Color {
    name: string;
    url:  string;
}

export interface EggGroup {
    name: string;
    url:  string;
}

export interface Generation {
    name: string;
    url:  string;
}

export interface GrowthRate {
    name: string;
    url:  string;
}

export interface Habitat {
    name: string;
    url:  string;
}

export interface Shape {
    name: string;
    url:  string;
}


export interface EvolutionChain {
    url: string;
}

export interface FlavorTextEntry {
    flavor_text: string;
    language:    Color;
    version:     Color;
}

export interface Genus {
    genus:    string;
    language: Color;
}

export interface Name {
    language: Color;
    name:     string;
}

export interface PalParkEncounter {
    area:       Color;
    base_score: number;
    rate:       number;
}

export interface PokedexNumber {
    entry_number: number;
    pokedex:      Color;
}

export interface Variety {
    is_default: boolean;
    pokemon:    Color;
}

export interface EvolvesFromSpecies {
    name:string;
    url:string;
}
