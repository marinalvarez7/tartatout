import React, { Component } from "react";
// import Recipes from './Recipes.js';
import axios from 'axios';

import { Link, Redirect } from 'react-router-dom';

import Footer from './Footer';
import NavBar from './NavBar';

class RecipeDetails extends Component {
  state = {}

  componentDidMount() {
    this.getSingleRecipe();
  }

  getSingleRecipe = () => {
    const {params} = this.props.match;

    axios.get(`http://localhost:5000/recipes/${params.id}`)
      .then(response => {
        const theRecipe = response.data;
        this.setState(theRecipe);
      })
      .catch(err => console.log(err))
  }
  render() {
    return(
      <div>
        <NavBar />

        <p class="title is-1 has-text-centered">{this.state.name}</p>

         <p class="title is-2 has-text-centered">{this.state.summary}<br/>
         {this.state.servings}<br/>
        {this.state.preparationTime} {this.state.cookingTime}</p>

        <p class="title is-3">Ingrédients</p><br></br>

        <p>{this.state.amount} {this.state.ingredients} {this.state.unit}</p>


        <p class="title is-3">Instructions</p>

        <p>{this.state.steps}</p>
        < Footer />
      </div>
    )
  }
//  const RecipeDetails = (props) =>  {
//   console.log(props)
  
//   const getRecipe = (id) => {
//     return Recipes.find(recipe => recipe.id === id)
//   };

//   const foundRecipe = getRecipe(props.match.params.id);
//   return (
//       <>
//         <NavBar />

//         <p class="title is-1 has-text-centered">{foundRecipe.name}</p>

//         <p class="title is-2 has-text-centered">{foundRecipe.summary}<br/>
//         {foundRecipe.servings}<br/>
//         {foundRecipe.preparationTime} {foundRecipe.cookingTime}</p>

//         <p class="title is-3">Ingrédients</p><br></br>

//         <p>{foundRecipe.amount} {foundRecipe.ingredients} {foundRecipe.unit}</p>


//         <p class="title is-3">Instructions</p>

//         <p>{foundRecipe.steps}</p>

      //   < Footer />
      // </>
  // )
}

export default RecipeDetails;