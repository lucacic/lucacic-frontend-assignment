import { useQuery, useLazyQuery, gql } from '@apollo/client';

export const usePokemonsQuery = ($after: string) => useLazyQuery(gql`
  query pokemons($after: ID) {
    pokemons(after: $after) {
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
  }`,
  {
    variables: {
      after: $after,
    }
  }
);

export const useSearchPokemonByName = () => useLazyQuery(gql`
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
