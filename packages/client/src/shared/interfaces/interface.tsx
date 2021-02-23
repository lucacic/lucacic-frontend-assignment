
export interface ResultQueryMore {
    data : ResultQuery
}
export interface ResultQuery {
    pokemons: Pokemons
}

export interface NodePokemon {
    id: string,
    name: string,
    types: string[]
}

export interface EdgePokemon {
    cursor: string,
    node: NodePokemon
}

export interface Pokemons {
    edges: EdgePokemon[] ,
    pageInfo: {
        endCursor: string,
        hasNextPage: boolean
    }
}