import React, { Recipes } from "react";

import { Link, Redirect } from 'react-router-dom';

import Footer from './Footer';
import NavBar from './NavBar';


export default class extends React.Component {
  render() {
    return (
      <>
        <NavBar />

        <p class="title is-1 has-text-centered">Choisis ta recette</p>
        <p class="title is-2 has-text-centered">Bon appetit!</p>




        < Footer />
      </>

    );
  }
}

