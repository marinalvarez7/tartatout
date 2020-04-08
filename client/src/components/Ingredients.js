import React, { Component } from "react";
import axios from 'axios';


import { Link } from 'react-router-dom';

import Footer from './Footer';
import NavBar from './NavBar';


const ingredients = [
  {
    name: "chicken",
    image: '/poulet.jpg',
    checked: false,
  },
  {
    name: 'lamb',
    image: '/lamb.jpg',
    checked: false,
  },
  {
    name: 'apple',
    image: '/apple.jpg',
    checked: false,
  },
  {
    name: 'broccoli',
    image: '/brocolis.jpg',
    checked: false,
  },
  {
    name: 'potatoe',
    image: '/monsieurPatate.jpg',
    checked: false,
  },
  {
    name: 'sardine',
    image: '/sardine.jpg',
    checked: false,
  },
  {
    name: 'eggplant',
    image: '/eggplant.jpg',
    checked: false,
  },
  {
    name: 'eggs',
    image: '/eggs.jpg',
    checked: false,
  },
  {
    name: 'tomatoes',
    image: '/tomatoes.jpg',
    checked: false,
  },
  {
    name: 'onion',
    image: '/onions.jpg',
    checked: false,
  },
  {
    name: 'butter',
    image: '/butter.jpg',
    checked: false,
  },
  {
    name: 'cheese',
    image: '/cheese.jpg',
    checked: false,
  },
  {
    name: 'flour',
    image: '/flour.jpg',
    checked: false,
  },
  {
    name: 'garlic',
    image: '/garlic.jpg',
    checked: false,
  },
  {
    name: 'oil',
    image: '/oil.jpg',
    checked: false,
  },
  {
    name: 'mozzarella',
    image: '/mozzarella.jpg',
    checked: false,
  },
  {
    name: 'spinach',
    image: '/spinach.jpg',
    checked: false,
  },
  {
    name: 'wine',
    image: '/wines.jpg',
    checked: false,
  },
  {
    name: 'parmesan',
    image: '/parmesan.jpg',
    checked: false,
  },
  {
    name: 'beans',
    image: '/beans.jpg',
    checked: false,
  },
  {
    name: 'carrot',
    image: '/carrots.jpg',
    checked: false,
  },
  {
    name: 'celery',
    image: '/celery.jpg',
    checked: false,
  },
  {
    name: 'sherry',
    image: '/sherry.jpg',
    checked: false,
  },
  {
    name: 'vinegar',
    image: '/vinegar.jpg',
    checked: false,
  },
  {
    name: 'sugar',
    image: '/sugar.jpg',
    checked: false,
  },
  {
    name: 'cranberries',
    image: '/cranberries.jpg',
    checked: false,
  },
  {
    name: 'mushroom',
    image: '/mushrooms.jpg',
    checked: false,
  },
  {
    name: 'prosciutto',
    image: '/prosciutto.jpg',
    checked: false,
  },
  {
    name: 'curry',
    image: '/curry.jpg',
    checked: false,
  },
  {
    name: 'soy sauce',
    image: '/soySauce.jpg',
    checked: false,
  },
  {
    name: 'mustard',
    image: '/mustard.jpg',
    checked: false,
  },
  {
    name: 'ham',
    image: '/ham.jpg',
    checked: false,
  },
  {
    name: 'honey',
    image: '/honey.jpg',
    checked: false,
  },
  {
    name: 'beef',
    image: '/beef.jpg',
    checked: false,
  },
  {
    name: 'chives',
    image: '/chives.jpg',
    checked: false,
  },
  {
    name: 'oranges',
    image: '/oranges.jpg',
    checked: false,
  },
  {
    name: 'shallots',
    image: '/shallots.jpg',
    checked: false,
  },
  {
    name: 'anchovy',
    image: '/anchovies.jpg',
    checked: false,
  },
  {
    name: 'chili',
    image: '/chili.jpg',
    checked: false,
  },
  {
    name: 'apricot',
    image: '/apricot.jpg',
    checked: false,
  },
  {
    name: 'almond',
    image: '/almond.jpg',
    checked: false,
  },
  {
    name: 'lemon',
    image: '/lemon.jpg',
    checked: false,
  },
  {
    name: 'peach',
    image: '/peach.jpg',
    checked: false,
  },
  {
    name: 'masala',
    image: '/masala.jpg',
    checked: false,
  },
  {
    name: 'turmeric',
    image: '/turmeric.jpg',
    checked: false,
  },
  {
    name: 'avocado',
    image: '/avocado.jpg',
    checked: false,
  },
  {
    name: 'lentils',
    image: '/lentils.jpg',
    checked: false,
  },
  {
    name: 'yogurt',
    image: '/yogurt.jpg',
    checked: false,
  },
  {
    name: 'enchilada',
    image: '/enchiladaSauce.jpg',
    checked: false,
  },
  {
    name: 'lime',
    image: '/lime.jpg',
    checked: false,
  },
  {
    name: 'arugula',
    image: '/arugula.jpg',
    checked: false,
  },
  {
    name: 'crab',
    image: '/crab.jpg',
    checked: false,
  },
  {
    name: 'lettuce',
    image: '/lettuce.jpg',
    checked: false,
  },
  {
    name: 'radish',
    image: '/radish.jpg',
    checked: false,
  },
  {
    name: 'romaine',
    image: '/romaine.jpg',
    checked: false,
  },
  {
    name: 'rum',
    image: '/rum.jpg',
    checked: false,
  },
  {
    name: 'sour cream',
    image: '/sourCream.jpg',
    checked: false,
  },
  {
    name: 'bacon',
    image: '/bacon.jpg',
    checked: false,
  },
  {
    name: 'mayonnaise',
    image: '/mayonnaise.jpg',
    checked: false,
  },
  {
    name: 'jalapeño',
    image: '/jalapeno.jpg',
    checked: false,
  },
  {
    name: 'cider',
    image: '/cider.jpg',
    checked: false,
  },
  {
    name: 'date',
    image: '/date.jpg',
    checked: false,
  },
  {
    name: 'raisins',
    image: '/raisins.jpg',
    checked: false,
  },
  {
    name: 'granola',
    image: '/granola.jpg',
    checked: false,
  },
  {
    name: 'vanilla',
    image: '/vanilla.jpg',
    checked: false,
  },
  {
    name: 'coconut',
    image: '/coconut.jpg',
    checked: false,
  },
  {
    name: 'puff pastry',
    image: '/puff-pastry.jpg',
    checked: false,
  },
  {
    name: 'mint',
    image: '/mint.jpg',
    checked: false,
  },
  {
    name: 'chickpeas',
    image: '/chickpeas.jpg',
    checked: false,
  },
  {
    name: 'oregano',
    image: '/oregano.jpg',
    checked: false,
  },
  {
    name: 'tahini',
    image: '/tahini.jpg',
    checked: false,
  },
  {
    name: 'macaroni',
    image: '/macaroni.jpg',
    checked: false,
  },
  {
    name: 'zucchini',
    image: '/zucchini.jpg',
    checked: false,
  },
  {
    name: 'linguine',
    image: '/linguine.jpg',
    checked: false,
  },
  {
    name: 'secret item',
    image: '/question.jpg',
    checked: false,
  },
  {
    name: 'tortellini',
    image: '/tortellini.jpg',
    checked: false,
  }
]

class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: ingredients,
      results: [],
    };
  }
  getInfo = () => {
    axios
      .get(`${process.env.REACT_APP_APIURL || ""}/allrecipes`)
      .then((response) => response.data)
      .then((data) => {
        console.log("data", data);
        this.setState({ results: data });
      })
      .catch((err) => (err) => console.log(err));
  };
  componentDidMount() {
    this.getInfo();
  }
  onToggle(index, e) {
    let newItems = this.state.ingredients.slice();
    newItems[index].checked = !newItems[index].checked;
    // console.log("newItems", newItems);
    this.setState({
      ingredients: newItems,
    });
  }

  render() {
    return (
      <>
        <NavBar />
        <h1 className="title is-1 has-text-centered">Choisis tes ingredients</h1>
        <div className="ingredients">
          {this.state.ingredients.map((ingredient, index) => (
            <div className="card_ingredients">
              <div className="totalCheckbox" >
                <div className='eachCheckbox'>
                  <input type="checkbox" id={ingredient.name} onChange={this.onToggle.bind(this, index)}></input>
                  <label className='cardIngredient' for={ingredient.name}><img src={ingredient.image} alt="" /></label>
                  <div className="middle">
                      <div className="hvrbox-text">{ingredient.name}</div>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='spaceAround'></div>
        <h1 className="title is-1 has-text-centered">Voici les recettes</h1>
        <div className="concernedRecipes">
          {this.state.results
            .filter((ing) =>
              ing.ingredientsList.some(
                (ingSelect) =>
                  ingredients
                    .filter((el) => el.checked === true)
                    .map((el) => el.name)
                    .indexOf(ingSelect) != -1
              )
            )
            .map((recipe) => {
              return (
                <Link to={`/recipes/${recipe._id}`}>
                  <div className="recipesDisplayed">
                    <img className='cardRecipes' src={recipe.image} alt={recipe.title}/>
                    <div className="middle">
                      <div className="hvrbox-text">{recipe.title}</div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
        <Footer />
      </>
    );
  }
}
export default Ingredients;