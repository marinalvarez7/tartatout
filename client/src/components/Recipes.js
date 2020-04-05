import React, {Component }from "react";

import { Link } from 'react-router-dom';

import Footer from './Footer';
import NavBar from './NavBar';
import axios from 'axios';


class Recipes extends Component {
  state = { listOfRecipes: []}
  
  getAllRecipes = () =>{
    axios.get(`http://localhost:5000/allrecipes`)
    .then(response => response.data )
      .then(data => {
        console.log('data', data);
      this.setState({listOfRecipes:data})
    })
    .catch(err => console.log('error',err))
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

        { this.state.listOfRecipes.map( recipe => {
          return (
            <div key={recipe._id}>
              <Link to={`/recipes/${recipe._id}`}>
                <h3>{recipe.title}</h3>
                <img src={recipe.image} />
              </Link>
            </div>
          );
        })}
        <Footer/>
      </div>
    )
  }
}
export default Recipes;

