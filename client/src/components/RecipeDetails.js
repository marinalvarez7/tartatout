import React, {Component} from "react";
import axios from "axios";
import Footer from "./Footer";
import NavBar from "./NavBar";

 class RecipeDetails extends Component {
  state = {
    recipe: {},
  };
  componentDidMount() {
    axios
      .get(`http://localhost:5000/allrecipes/${this.props.match.params.id}`)
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
        <p class="title is-1 has-text-centered">{recipe.title}</p>
        <img src={recipe.image} />
        <p>{recipe.servings}</p>
        <p>{recipe.readyInMinutes}</p>
        <p>{recipe.cookingTime}</p>

        <p>Ingredients</p>
        <p>{recipe.amount}{recipe.unit}{recipe.ingredients}</p>
        <p>Instructions</p>
        <p>{recipe.steps}</p>
        <Footer />
      </>
    );
  }
}

export default RecipeDetails;