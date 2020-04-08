import React, { Component } from "react";
import axios from "axios";
import Footer from "./Footer";
import NavBar from "./NavBar";

class RecipeDetails extends Component {
  state = {
    recipe: {},
  };
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_APIURL || ""}/allrecipes/${this.props.match.params.id}`)
      .then((response) => response.data)
      .then((data) => {
        console.log("data", data);
        this.setState({ recipe: data });
      })
      .catch((err) => (err) => console.log(err));
  }
  render() {
    const recipe = this.state.recipe;
    return (
      <>
        <NavBar />

        <p className="title is-1 has-text-centered">{recipe.title}</p>

        <div className="recipe">

          <div class="column is-two-thirds">
            <p className="title is-3">Informations</p>
            <p>Servings : {recipe.servings} persons</p>
            <p> Ready in {recipe.readyInMinutes} minutes</p>
            <p>Cooked in {recipe.cookingTime} minutes</p>

            <p className="title is-3 ">Ingredients</p>
            <p>{recipe.ingredients}</p>

            <p className="title is-3">Instructions</p>
            <p>{recipe.steps}</p>
          </div>

          <div class="column">
            <figure class="image is-128x128">
              <img src="{recipe.image}" alt="photo plat"></img>
            </figure>
          </div>

        </div>
        
        <Footer />

      </>
    );

  }
}

export default RecipeDetails;