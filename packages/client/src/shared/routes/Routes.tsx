import React from 'react';
import { Switch } from "react-router-dom";

// Layout and Route Component
import LayoutMain from '../layouts/LayoutMain';
import RouteWithLayout from '../components/RouteWithLayout/RouteWithLayout';

// Content Component
import MyComponent from '../components/MyComponent';



const Routes = () => {             

  return (
    <Switch>
      <RouteWithLayout
        component={MyComponent}
        exact
        layout={LayoutMain}
        path="/"
      />
      <RouteWithLayout
        component={MyComponent}
        exact
        layout={LayoutMain}
        path="/test"
      />
    </Switch>

  )
}


export default Routes;