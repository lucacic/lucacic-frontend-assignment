import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './shared/routes/Routes';
import { createBrowserHistory } from 'history';

import { ApolloProvider,} from '@apollo/client';

import { client } from './shared/services/apolloClient'

const browserHistory = createBrowserHistory();

export default function App() {
    return (
      <ApolloProvider client={client}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ApolloProvider>

    )
}
