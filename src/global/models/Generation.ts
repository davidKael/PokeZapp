export interface Generation {
    abilities:       Ability[];
    id:              number;
    main_region:     MainRegion;
    moves:           Move[];
    name:            string;
    names:           Name[];
    pokemon_species: PokemonSpecies[];
    types:           Type[];
    version_groups:  VersionGroup[];
}

export interface Ability {
    name: string;
    url: string;
}

export interface MainRegion {
    name: string;
    url:  string;
}

export interface Move {
    name: string;
    url:  string;
}



export interface Name {
    language: Language;
    name:     string;
}

export interface Language {
    name: string;
    url: string;
}

export interface PokemonSpecies {
    name: string;
    url: string;
}

export interface Type {
    name: string;
    url: string;
}

export interface VersionGroup {
    name: string;
    url: string;
}
