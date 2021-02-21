import { ApolloClient, InMemoryCache } from '@apollo/client';

const uri = 'http://localhost:4000/'



export const client = new ApolloClient({
  uri,
  cache: new InMemoryCache()
});

