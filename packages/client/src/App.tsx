import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './shared/routes/Routes';
import { createBrowserHistory } from 'history';



const browserHistory = createBrowserHistory();

export default function App() {
    return (
        <Router history={browserHistory}>
          <Routes />
        </Router>
    )
}
