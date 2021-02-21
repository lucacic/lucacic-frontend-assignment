import React from 'react';
import { Switch,Redirect } from "react-router-dom";

// Layout and Route Component
import LayoutMain from '../layouts/LayoutMain';
import RouteWithLayout from '../components/RouteWithLayout/RouteWithLayout';

// Content Component
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList/PokemonList';



const Routes = () => {             

  return (
    <Switch>
      <RouteWithLayout
        component={PokemonList}
        exact
        layout={LayoutMain}
        path="/pokemons"
      />
      <RouteWithLayout
        component={PokemonList}
        exact
        layout={LayoutMain}
        path="/"
      />
      <Redirect to="/" />
    </Switch>

  )
}


export default Routes;