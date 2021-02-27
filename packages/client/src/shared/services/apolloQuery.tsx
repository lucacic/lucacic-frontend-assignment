import { useQuery, useLazyQuery, gql } from '@apollo/client';
import { ResultQuery, ResultQueryMore } from '../interfaces/interface';

interface VariableSearchPokemon {
  q: string
}

interface VariableFilterPokemon {
  type: string
}

interface VariablePokemons {
  after: string
}

export const usePokemonsQuery = () => useLazyQuery<ResultQuery, VariablePokemons>(gql`
  query pokemons($after: ID) {
    pokemons(after: $after) {
      edges {
        node {
          id
          name
          classification
          types
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }`
);

export const useSearchPokemonByName = () => useLazyQuery<ResultQuery, VariableSearchPokemon>(gql`
  query pokemons($q: String) {
    pokemons(q: $q) {
      edges {
        node {
          id
          name
          classification
          types
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }`
);

export const useFilterPokemonByType = () => useLazyQuery<ResultQuery, VariableFilterPokemon >(gql`
  query pokemonsByType($type: String) {
    pokemonsByType(type: $type ) {
      edges {
        node {
          id
          name
          classification
          types
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }`
);
