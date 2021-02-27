

export enum PokemonType {
  normal = 'normal',
  fire = 'fire',
  water = 'water',
  grass = 'grass',
  electric = 'electric',
  ice = 'ice',
  fighting = 'fighting',
  poison = 'poison',
  ground = 'ground',
  flying = 'flying',
  psychic = 'psychic',
  bug = 'bug',
  rock = 'rock',
  ghost = 'ghost',
  dark = 'dark',
  dragon = 'dragon',
  steel = 'steel',
  fairy = 'bug',
  all = 'all'
}

export type ColorType =
  PokemonType.normal |
  PokemonType.fire |
  PokemonType.water |
  PokemonType.water |
  PokemonType.grass |
  PokemonType.electric |
  PokemonType.ice |
  PokemonType.fighting |
  PokemonType.poison |
  PokemonType.ground |
  PokemonType.flying |
  PokemonType.psychic |
  PokemonType.bug |
  PokemonType.rock |
  PokemonType.ghost |
  PokemonType.dark |
  PokemonType.dragon |
  PokemonType.steel |
  PokemonType.fairy

const pokemonTypeColor = {
  [PokemonType.normal]: '#A8A878',
  [PokemonType.fire]: '#F08030',
  [PokemonType.water]: '#6890F0',
  [PokemonType.grass]: '#78C850',
  [PokemonType.electric]: '#F8D030',
  [PokemonType.ice]: '#98D8D8',
  [PokemonType.fighting]: '#C03028',
  [PokemonType.poison]: '#A040A0',
  [PokemonType.ground]: '#E0C068',
  [PokemonType.flying]: '#A890F0',
  [PokemonType.psychic]: '#F85888',
  [PokemonType.bug]: '#F85888',
  [PokemonType.rock]: '#B8A038',
  [PokemonType.ghost]: '#705898',
  [PokemonType.dark]: '#705848',
  [PokemonType.dragon]: '#705848',
  [PokemonType.steel]: '#705848',
  [PokemonType.fairy]: '#FFC0CB',
}

export const getPokemonColor = (type: ColorType) => {
  return pokemonTypeColor[type];
}

