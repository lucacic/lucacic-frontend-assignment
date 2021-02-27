import React from 'react';
import { Switch,Redirect } from "react-router-dom";

// Layout and Route Component
import LayoutMain from '../layouts/LayoutMain';


// Content Component
import DashboardView from '../../views/DashboardContainer';
import PokemonsView  from '../../views/PokemonsContainer'
import RouteWithLayout from '../components/RouteWithLayout/RouteWithLayout';



const Routes: React.FC<any> = () => {             

  return (
    <Switch>
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={LayoutMain}
        path="/pokemons"
      />
      <RouteWithLayout
        component={PokemonsView}
        exact
        layout={LayoutMain}
        path="/"
      />
      <Redirect to="/" />
    </Switch>

  )
}


export default Routes;