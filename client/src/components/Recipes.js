import React, { Component } from "react";

import { Link } from 'react-router-dom';

import Footer from './Footer';
import NavBar from './NavBar';
import axios from 'axios';


class Recipes extends Component {
  state = { listOfRecipes: [] }

  getAllRecipes = () => {
    axios.get(`http://localhost:5000/allrecipes`)
      .then(response => response.data)
      .then(data => {
        console.log('data', data);
        this.setState({ listOfRecipes: data })
      })
      .catch(err => console.log('error', err))
  }

  componentDidMount() {
    this.getAllRecipes();
  }

  render() {
    return (
      <div>
        <NavBar />

        <p className="title is-1 has-text-centered">Choisis ta recette</p>
        <p className="title is-2 has-text-centered">Bon appetit!</p>
        <div className="card columns is-multiline is-mobile">
          {this.state.listOfRecipes.map(recipe => {
            return (

              <div className="card column is-one-quarter">
                <div key={recipe._id}>

                  <header class="card-header card-header-recipes"><Link to={`/recipes/${recipe._id}`}>{recipe.title}</Link></header>
                  <div class="content">
                    <div class="card-image">
                      <figure class="image 128x128">
                        <img src={recipe.image} alt="" />
                      </figure>
                    </div>
                  </div>
                  <a href="#">@sogood</a> <a href="#">#justeatme</a>
                </div>

                <footer className="card-footer">
                  <a href="#" className="card-footer-item">👍</a>
                  <a href="#" className="card-footer-item">😋</a>
                  <a href="#" className="card-footer-item">👎</a>
                </footer>
              </div>

            );
          })}
        </div>

        <Footer />
      </div>
    )
  }
}
export default Recipes;

