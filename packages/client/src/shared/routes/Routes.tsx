import React from 'react';
import { Switch,Redirect } from "react-router-dom";

// Layout and Route Component
import LayoutMain from '../layouts/LayoutMain';


// Content Component
import Dashboard from '../../views/DashboardContainer';
import Pokemons from '../../views/PokemonsContainer'
import RouteWithLayout from '../components/RouteWithLayout/RouteWithLayout';



const Routes = () => {             

  return (
    <Switch>
      <RouteWithLayout
        component={Dashboard}
        exact
        layout={LayoutMain}
        path="/pokemons"
      />
      <RouteWithLayout
        component={Pokemons}
        exact
        layout={LayoutMain}
        path="/"
      />
      <Redirect to="/" />
    </Switch>

  )
}


export default Routes;