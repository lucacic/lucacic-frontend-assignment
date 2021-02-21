import { useQuery, gql } from '@apollo/client';






export const getPokemons = ($after: string | null) => useQuery(gql`

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
