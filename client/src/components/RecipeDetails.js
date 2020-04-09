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
      <div>
        <NavBar />
        <div class="column">
            <figure class="image is-128x128">
              <img src={recipe.image} alt="photo plat"></img>
            </figure>
          </div>
        <p className="title is-1 has-text-centered">{recipe.title}</p>
        <div className="column is-two-thirds">
          <div class="column is-two-thirds">
            <p className="title is-3">Informations</p>
            <ul className='informationsRecipe'>
              <li>Servings : {recipe.servings} persons</li>
              <li>Ready in {recipe.readyInMinutes} minutes</li>
              <li>Cooked in {recipe.cookingTime} minutes</li>
            </ul>
          </div>
          <div className='spaceAround'></div>
          <p className="title is-3 ">Ingredients</p>
            <div className='ingredientsAmountQuantities'>
              <p className='quantities'>{recipe.amount}</p>
              <p className='ingredientsDetailed'>{recipe.ingredients}</p>
              <p className='units'>{recipe.unit}</p>
            </div>
          <div className='spaceAround'></div>
          <p className="title is-3 ">Instructions</p>
           <p>{recipe.steps}</p>
        </div>
        <Footer />
      </div>
    );

  }
}

export default RecipeDetails;