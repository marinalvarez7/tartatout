import React, {Component }from "react";

import { Link, Redirect } from 'react-router-dom';

import Footer from './Footer';
import NavBar from './NavBar';



const ingredients = [
  {
    name: "chicken",
    image: '/poulet.jpg',
  },
  {
    name: 'lamb',
    image: '/lamb.jpg',
  },
  {
    name: 'apple',
    image: '/apple.png',
  },
  {
    name: 'broccoli',
    image: '/brocolis.jpg',
  },
  {
    name: 'potatoe',
    image: '/monsieurPatate.jpg',
  },
  {
    name: 'sardine',
    image: '/sardine.jpg',
  },
  {
    name: 'eggplant',
    image: '/eggplant.jpg',
  },
  {
    name: 'eggs',
    image: '/eggs.jpg',
  },
  {
    name: 'tomatoes',
    image: '/tomatoes.jpg',
  },
  {
    name: 'onion',
    image: '/onions.jpg',
  },
  {
    name: 'butter',
    image: '/butter.jpg',
  },
  {
    name: 'cheese',
    image: '/cheese.jpg',
  },
  {
    name: 'flour',
    image: '/flour.jpg',
  },
  {
    name: 'garlic',
    image: '/garlic.jpg',
  },
  {
    name: 'oil',
    image: '/oil.jpg',
  },
  {
    name: 'mozzarella',
    image: '/mozzarella.jpg',
  },
  {
    name: 'spinach',
    image: '/spinach.jpg',
  },
  {
    name: 'wine',
    image: '/wines.jpg',
  },
  {
    name: 'parmesan',
    image: '/parmesan.jpg',
  },
  {
    name: 'beans',
    image: '/beans.jpg',
  },
  {
    name: 'carrot',
    image: '/carrots.jpg',
  },
  {
    name: 'celery',
    image: '/celery.jpg',
  },
  {
    name: 'sherry',
    image: '/sherry.jpg',
  },
  {
    name: 'vinegar',
    image: '/vinegar.jpg',
  },
  {
    name: 'sugar',
    image: '/sugar.jpg',
  },
  {
    name: 'cranberries',
    image: '/cranberries.jpg',
  },
  {
    name: 'mushroom',
    image: '/mushrooms.jpg',
  },
  {
    name: 'prosciutto',
    image: '/prosciutto.jpg',
  },
  {
    name: 'curry',
    image: '/curry.jpg',
  },
  {
    name: 'soy sauce',
    image: '/soySauce.jpg',
  },
  {
    name: 'mustard',
    image: '/mustard.jpg',
  },
  {
    name: 'ham',
    image: '/ham.jpg',
  },
  {
    name: 'honey',
    image: '/honey.jpg',
  },
  {
    name: 'beef',
    image: '',
  },
  {
    name: 'chives',
    image: '/chives.jpg',
  },
  {
    name: 'oranges',
    image: '/oranges.jpg',
  },
  {
    name: 'shallots',
    image: '',
  },
  {
    name: 'anchovy',
    image: '/anchovies.jpg',
  },
  {
    name: 'chili',
    image: '/chili.jpg',
  },
  {
    name: 'apricot',
    image: '/apricot.jpg',
  },
  {
    name: 'almond',
    image: '/almond.jpg',
  },
  {
    name: 'lemon',
    image: '/lemon.jpg',
  },
  {
    name: 'peach',
    image: '/peach.jpg',
  },
  {
    name: 'masala',
    image: '/masala.jpg',
  },
  {
    name: 'turmeric',
    image: '/turmeric.jpg',
  },
  {
    name: 'avocado',
    image: '/avocado.jpg',
  },
  {
    name: 'lentils',
    image: '/lentils.jpg',
  },
  {
    name: 'yogurt',
    image: '/yogurt.jpg',
  },
  {
    name: 'enchilada sauce',
    image: '/enchilada-sauce.jpg',
  },
  {
    name: 'lime',
    image: '/lime.jpg',
  },
  {
    name: 'arugula',
    image: '/arugula.jpg',
  },
  {
    name: 'crab',
    image: '/crab.jpg',
  },
  {
    name: 'lettuce',
    image: '/lettuce.jpg',
  },
  {
    name: 'radish',
    image: '/radish.jpg',
  },
  {
    name: 'romaine',
    image: '/romaine.jpg',
  },
  {
    name: 'rum',
    image: '/rum.jpg',
  },
  {
    name: 'sour cream',
    image: '/sourCream.jpg',
  },
  {
    name: 'bacon',
    image: '/bacon.jpg',
  },
  {
    name: 'mayonnaise',
    image: '/mayonnaise.jpg',
  },
  {
    name: 'jalapeño',
    image: '/jalapeño',
  },
  {
    name: 'cider',
    image: '/cider.jpg',
  },
  {
    name: 'date',
    image: '/date.jpg',
  },
  {
    name: 'raisins',
    image: '/raisins.jpg',
  },
  {
    name: 'granola',
    image: '/granola.jpg',
  },
  {
    name: 'vanilla',
    image: '/vanilla.jpg',
  },
  {
    name: 'coconut',
    image: '/coconut.jpg',
  },
  {
    name: 'puff pastry',
    image: '/puff-pastry.jpg',
  },
  {
    name: 'mint',
    image: '/mint.jpg',
  },
  {
    name: 'chickpeas',
    image: '/chickpeas.jpg',
  },
  {
    name: 'oregano',
    image: '/oregano.jpg',
  },
  {
    name: 'tahini',
    image: '/tahini.jpg',
  },
  {
    name: 'macaroni',
    image: '/macaroni.jpg',
  },
  {
    name: 'zucchini',
    image: '/zucchini.jpg',
  },
  {
    name: 'linguine',
    image: '/linguine.jpg',
  },
  {
    name: 'tortellini',
    image: '/tortellini.jpg',
  }
]

const selectedIngredients = [
  {
    name:'chicken',
    image:'',
  },
  {
    name:'lamb',
    image:'',
  },
  {
    name:'avocado',
    image:'',
  },
  {
    name:'apple',
    image:'',
  },
  { 
    name:'eggplant',
    image:''
  },
  {
    name:'pasta',
    image:'',
  },
  { name:'peach',
    image:'',
  },
  {
   name:'yogurt',
   image:'',
  },
  { 
    name:'sardine',
    image:'',
  }]

class Ingredients extends Component {

  state = {
    selectedIngredients: selectedIngredients
  }

  render() {
    return (
      <>

        <NavBar />

        <h1 class="title is-1 has-text-centered">Choisis tes ingredients</h1>

<<<<<<< HEAD
        <div className="ingredients card columns is-mobile is-multiline is-centered control">
          {this.state.ingredients.map((ingredient, index) => (
            <div className="card-image column is-one-quarter">
              <figure className="image is-4by3">
                <img src={ingredient.image} alt={ingredient.name}></img>
              </figure>
              <div className="card-content">
                <div className="media">
                  <label className="radio">
                    <div className="media-content">
                      <input type="radio" name="rsvp"></input>
                      <p className="title is-4 ">{ingredient.name}</p>
                    </div>
                  </label>

                </div>
              </div>
=======
        <div className="ingredients">
          {this.state.selectedIngredients.map((ingredient, index) => (
            <div>
              <input type='radio' id="name" checked>
  <label for="huey">Huey</label>>{ingredient.name}
                <img src={ingredient.image} />
              </input>
>>>>>>> 2c896d59f63217e73e67c069a4ff164c391a3d95
            </div>
            
          )
          )}
        </div>

        <Footer />
      </>
    );
  }
<<<<<<< HEAD
}
=======
}

export default Ingredients;
>>>>>>> 2c896d59f63217e73e67c069a4ff164c391a3d95
