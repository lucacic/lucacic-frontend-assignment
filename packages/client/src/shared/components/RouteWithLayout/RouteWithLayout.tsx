import React, { FunctionComponent } from 'react';
import { Route, RouteProps } from 'react-router-dom';

// INTERFACE

interface RouteWithLayoutProps extends RouteProps {
  layout: FunctionComponent<any>
  component: FunctionComponent<any>
}



// COMPONENT

const RouteWithLayout : FunctionComponent<RouteWithLayoutProps> = ({ layout: Layout, component: Component, ...rest }) => {

  const { path } = rest;

  return (
    <Route {...rest} render={props => (
      <Layout> <Component {...props} /></Layout>
    )} />
  );
}

export default RouteWithLayout;
