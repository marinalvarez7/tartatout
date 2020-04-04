import React, { Component } from 'react';

const ingredients = [
  {name: "chicken",
  image:'/poulet.jpg',
  }, 
  {
  name: 'lamb',
  image:'/lamb.jpg',
  }, 
  {
  name: 'apple',
  image:'/apple.png',
  },
  {
  name: 'broccoli',
  image:'/brocolis.jpg',
  },
  {
  name: 'potatoe',
  image:'/monsieurPatate.jpg',
  },
  {
  name: 'sardine',
  image:'/sardine.jpg',
  },
  {
  name: 'eggplant',
  image:'/eggplant.jpg',
  },
  {
  name: 'eggs',
  image:'/eggs.jpg',
  },
  {
  name: 'tomatoes',
  image:'/tomatoes.jpg',
  },
  {
  name: 'onion',
  image:'/onions.jpg',
  },
  {
  name: 'butter',
  image:'/butter.jpg',
  },
  {
    name: 'cheese',
    image:'/cheese.jpg',
  },
  {
    name: 'flour',
    image:'/flour.jpg',
  },
  {
    name: 'garlic',
    image:'/garlic.jpg',
  },
  {
    name: 'oil',
    image:'/oil.jpg',
  },
  {
    name: 'mozzarella',
    image:'/mozzarella.jpg',
  },
  {
    name: 'spinach',
    image:'/spinach.jpg',
  },
  {
    name: 'wine',
    image:'/wines.jpg',
  },
  {
    name: 'parmesan',
    image:'/parmesan.jpg',
  },
  {
    name: 'beans',
    image:'/beans.jpg',
  },
  {
    name: 'carrot',
    image:'/carrots.jpg',
  },
  {
    name: 'celery',
    image:'/celery.jpg',
  },
  {
    name: 'sherry',
    image:'/sherry.jpg',
  },
  {
    name: 'vinegar',
    image:'/vinegar.jpg',
  },
  {
    name: 'sugar',
    image:'/sugar.jpg',
  },
  {
    name: 'cranberries',
    image:'/cranberries.jpg',
  },
  {
    name: 'mushroom',
    image:'/mushrooms.jpg',
  },
  {
    name: 'prosciutto',
    image:'/prosciutto.jpg',
  },
  {
    name: 'curry',
    image:'/curry.jpg',
  },
  {
    name: 'soy sauce',
    image:'/soySauce.jpg',
  },
  {
    name: 'mustard',
    image:'/mustard.jpg',
  },
  {
    name: 'ham',
    image:'/ham.jpg',
  },
  {
    name: 'honey',
    image:'/honey.jpg',
  },
  {
    name: 'beef',
    image:'',
  },
  {
    name: 'chives',
    image:'/chives.jpg',
  },
  {
    name: 'oranges',
    image:'/oranges.jpg',
  },
  {
    name: 'shallots',
    image:'',
  },
  {
    name: 'anchovy',
    image:'/anchovies.jpg',
  },
  {
    name: 'chili',
    image:'/chili.jpg',
  },
  {
    name: 'apricot',
    image:'/apricot.jpg',
  },
  {
    name: 'almond',
    image:'/almond.jpg',
  },
  {
    name: 'lemon',
    image:'/lemon.jpg',
  },
  {
    name: 'peach',
    image:'/peach.jpg',
  },
  {
    name: 'masala',
    image:'/masala.jpg',
  },
  {
    name: 'turmeric',
    image:'/turmeric.jpg',
  },
  {
    name: 'avocado',
    image:'/avocado.jpg',
  },
  {
    name: 'lentils',
    image:'/lentils.jpg',
  },
  {
    name: 'yogurt',
    image:'/yogurt.jpg',
  },
  {
    name: 'enchilada sauce',
    image:'/enchilada-sauce.jpg',
  },
  {
    name: 'lime',
    image:'/lime.jpg',
  },
  {
    name: 'arugula',
    image:'/arugula.jpg',
  },
  {
    name: 'crab',
    image:'/crab.jpg',
  },
  {
    name: 'lettuce',
    image:'/lettuce.jpg',
  },
  {
    name: 'radish',
    image:'/radish.jpg',
  },
  {
    name: 'romaine',
    image:'/romaine.jpg',
  },
  {
    name: 'rum',
    image:'/rum.jpg',
  },
  {
    name: 'sour cream',
    image:'/sourCream.jpg',
  },
  {
    name: 'bacon',
    image:'/bacon.jpg',
  },
  {
    name: 'mayonnaise',
    image:'/mayonnaise.jpg',
  },
  {
    name: 'jalapeño',
    image:'/jalapeño',
  },
  {
    name: 'cider',
    image:'/cider.jpg',
  },
  {
    name: 'date',
    image:'/date.jpg',
  },
  {
    name: 'raisins',
    image:'/raisins.jpg',
  },
  {
    name: 'granola',
    image:'/granola.jpg',
  },
  {
    name: 'vanilla',
    image:'/vanilla.jpg',
  },
  {
    name: 'coconut',
    image:'/coconut.jpg',
  },
  {
    name: 'puff pastry',
    image:'/puff-pastry.jpg',
  },
  {
    name: 'mint',
    image:'/mint.jpg',
  },
  {
    name: 'chickpeas',
    image:'/chickpeas.jpg',
  },
  {
    name: 'oregano',
    image:'/oregano.jpg',
  },
  {
    name:'tahini',
    image:'/tahini.jpg',
  },
  {
    name:'macaroni',
    image:'/macaroni.jpg',
  },
  {
    name:'zucchini',
    image:'/zucchini.jpg',
  },
  {
    name:'linguine',
    image:'/linguine.jpg',
  },
  {
    name:'tortellini',
    image:'/tortellini.jpg',
  }
    ]
class Ingredients extends Component {
  state = { 
    ingredients: ingredients
    }


  render() {
    return (
        <div className="ingredients">
          {this.state.ingredients.map((ingredient, index) => (
                <div>
                    <div>{ingredient.name}
                    <img src={ingredient.image}/></div>
                </div>
            )
          )}
        </div>
    )
  }
}  

export default Ingredients;