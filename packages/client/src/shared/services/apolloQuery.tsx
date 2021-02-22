import { useQuery, useLazyQuery, gql } from '@apollo/client';

export const usePokemonsQuery = ($after: string | null) => useLazyQuery(gql`
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
