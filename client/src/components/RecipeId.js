import React, { RecipeId } from "react";

import { Link, Redirect } from 'react-router-dom';

import Footer from './Footer';
import NavBar from './NavBar';


export default class extends React.Component {
  render() {
    return (
      <>
        <NavBar />

        <p class="title is-1 has-text-centered">Titre de la recette</p>

        <p class="title is-2 has-text-centered">voir si petite phrase de description</p>

        <p class="title is-3">Les ingrédients</p>

        <p class="title is-3">Les instructions</p>

        
        < Footer />
      </>

    );
  }
}