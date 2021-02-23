import { useQuery, useLazyQuery, gql } from '@apollo/client';
import { ResultQuery, ResultQueryMore } from '../interfaces/interface';

interface VariableSearchPokemon {
  q: string
}

export const usePokemonsQuery = () => useLazyQuery<ResultQuery>(gql`
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

export const useSearchPokemonByName = () => useLazyQuery<ResultQuery, VariableSearchPokemon >(gql`
  query pokemons($q: String) {
    pokemons(q: $q) {
      edges {
        node {
          id
          name
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
