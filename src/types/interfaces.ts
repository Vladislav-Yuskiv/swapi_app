export interface Theme  {
    dark: boolean,
    colors: {
        primary: string,
        background: string,
        card: string,
        text: string,
        border: string,
        notification: string
}}

export interface ICharacter {
    birth_year: string;
    eye_color: string;
    films: string[] ;
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    created: Date;
    edited: Date;
    species: string[] ;
    starships: string[] ;
    url: string;
    vehicles: string[];
}

export interface IItemsFromStorage{
    userName: string,
    favorites: ICharacter[],
}

export interface IDataPeople{
    count: number,
    next: string,
    previous: ICharacter[] | null
    results: ICharacter[]
}

export interface IFilm {
    characters: string[] | ICharacter[];
    created: Date;
    director: string;
    edited: Date;
    episode_id: string;
    opening_crawl: string;
    planets: string[] | IPlanet[];
    producer: string;
    release_date: string;
    species: string[] | ISpecie[];
    starships: string[] | IStarship[];
    title: string;
    url: string;
    vehicles: string[] | IVehicle[];
}

export interface IPlanet {
    climate: string;
    created: Date;
    diameter: string;
    edited: Date;
    films: string[] | IFilm[];
    gravity: string;
    name: string;
    orbital_period: string;
    population: string;
    residents: string[] | ICharacter[];
    rotation_period: string;
    surface_water: string;
    terrain: string;
    url: string;
}

export interface IVehicle {
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: Date;
    crew: string;
    edited: Date;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    pilots: string[] | ICharacter[];
    films: string[] | IFilm[];
    url: string;
    vehicle_class: string;
}
export interface IStarship {
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: Date;
    crew: string;
    edited: Date;
    hyperdrive_rating: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    films: string[] | IFilm[];
    pilots: string[] | ICharacter[];
    starship_class: string;
    url: string;
}

export interface ISpecie {
    average_height: string;
    average_lifespan: string;
    classification: string;
    created: Date;
    designation: string;
    edited: Date;
    eye_colors: string;
    hair_colors: string;
    homeworld: string | IPlanet;
    language: string;
    name: string;
    people: string[] | ICharacter[];
    films: string[] | IFilm[];
    skin_colors: string;
    url: string;
}
