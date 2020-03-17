const axios = require('axios')

var apiKey = 'da77e40f5792455894513fe89eb3f53b';

// var number = 100;
// var offset = 0;
// var url = 'https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${apiKey}8&number=${number}&offset=${offset}';

var ingredients = ['chicken', 'lamb', 'avocado', 'apple', 'eggplant', 'pasta', 'peach', 'yogurt', 'sardine']

const PERPAGE = 5

async function fetchIngredientRecipes(ingredientname) {
  const totalResults = await axios.get(`https://api.spoonacular.com/recipes/search?query=${ingredientname}&apiKey=${apiKey}`).then(response => response.data.totalResults);

  //const nbPages = Math.ceil(totalResults / PERPAGE)
  const nbPages = 2

  let pagesPromises = [];
  for (let i = 0; i < nbPages; i++) {
    pagesPromises.push(
      axios.get(`https://api.spoonacular.com/recipes/search?query=${ingredientname}&offset=${i * PERPAGE}&number=${PERPAGE}&apiKey=${apiKey}`).then(response => response.data)
    )
  }

  return Promise.all(pagesPromises).then((pages) => {
    let recipes = []

    pages.forEach(page => {
      recipes = recipes.concat(page.results)
    });

    return recipes // resolve with unique recipes
  });
}

let ingredientRecipesPromises = ingredients.map(ingredientname => fetchIngredientRecipes(ingredientname)) // [ fetchIngredientResult('apples'), fetchIngredientResult('flour'), ... ]

Promise.all(ingredientRecipesPromises).then(ingredientRecipes => {

  let recipesDetailsPromises = [];
  ingredientRecipes.forEach(recipes => {
    recipes.forEach(recipe => recipesDetailsPromises.push(
      axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${apiKey}`).then(response => {
        return response.data
      })
    ))
  })

  Promise.all(recipesDetailsPromises).then(recipesDetails => {
    console.log(JSON.stringify(recipesDetails, null, 4));
  })
})