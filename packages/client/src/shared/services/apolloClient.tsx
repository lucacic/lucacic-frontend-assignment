import { ApolloClient, InMemoryCache, DefaultOptions } from '@apollo/client';

const uri = 'http://localhost:4000/'

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

export const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions
});

