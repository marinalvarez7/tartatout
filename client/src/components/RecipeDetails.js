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
      .get(`${process.env.REACT_APP_API_URL || ""}/allrecipes/${this.props.match.params.id}`)
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


        <div className="tile">

          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child notification is-primary">
                    <p className="title is-1">{recipe.title}</p>
                  </article>
                  <article className="tile is-child notification is-warning">
                    <p className="title">Ingredients</p>
                    <p>{recipe.ingredients}</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-info">
                    <p className="title">Informations</p>
                    <p>{recipe.servings}</p>
                    <p>{recipe.readyInMinutes}</p>
                    <p>{recipe.cookingTime}</p>
                    <p>{recipe.amount}</p>
                    <p>{recipe.unit}</p>



                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-danger">
                  <figure className="image is-4by3">
                    <img image is-square src={recipe.image}></img>
                  </figure>
                  <div className="content">

                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-success">
                <div className="content">
                  <p className="title">Instructions</p>
                  <div className="content">
                    <p>{recipe.steps}</p>

                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <Footer />

      </>
    );
  }
}

export default RecipeDetails;