import React, { Component } from "react";
import Recipes from './Recipes.js';

import { Link, Redirect } from 'react-router-dom';

import Footer from './Footer';
import NavBar from './NavBar';


 const RecipeDetails = (props) =>  {
  console.log(props)
  
  const getRecipe = (id) => {
    return Recipes.find(recipe => recipe.id === id)
  };

  const foundRecipe = getRecipe(props.match.params.id);
  return (
      <>
        <NavBar />

        <p class="title is-1 has-text-centered">{foundRecipe.name}</p>

        <p class="title is-2 has-text-centered">{foundRecipe.summary}<br/>
        {foundRecipe.servings}<br/>
        {foundRecipe.preparationTime} {foundRecipe.cookingTime}</p>

        <p class="title is-3">Ingrédients</p><br></br>

        <p>{foundRecipe.amount} {foundRecipe.ingredients} {foundRecipe.unit}</p>


        <p class="title is-3">Instructions</p>

        <p>{foundRecipe.steps}</p>

        < Footer />
      </>
  )
}

export default RecipeDetails;