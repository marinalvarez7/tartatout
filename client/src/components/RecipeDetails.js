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

    // const listIngredients = recipe.ingredients;
    // listIngredients.mcap(item => console.log(item + "<br>"))
    
    return (
      <div>
        <NavBar />
        <div className="column">
          <figure className="imageRecipeID">
            <img src={recipe.image} alt="photo plat"></img>
          </figure>
          <div className='spaceAround'></div>
          <p className="title is-1 has-text-centered">{recipe.title}</p>
            <div className="column is-two-thirds">
                <p className="title is-3">Informations</p>
                  <ul className='informationsRecipe'>
                    <li>Servings : {recipe.servings} persons</li>
                    <li>Ready in {recipe.readyInMinutes} minutes</li>
                    <li>Cooked in {recipe.cookingTime} minutes</li>
                  </ul>
              <div className='spaceAround'></div>
                <p className="title is-3">Ingredients</p>
                  <div className='ingredientsAmountQuantities'>
                    <div className='quantities'>{recipe.ingredientsQuantities}</div>
                  </div>
              <div className='spaceAround'></div>
                <p className="title is-3">Instructions</p>
                  <p>{recipe.steps}</p>
                  <div className='spaceAround'></div>
            </div>
        </div>
        <Footer />
      </div>
    );

  }
}

export default RecipeDetails;