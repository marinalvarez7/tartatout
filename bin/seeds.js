// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

require('dotenv').config({
  path: require('path').resolve(__dirname, '../.env')
});

const mongoose = require("mongoose");
const json = require("./data.json");
const Recipe = require("../models/Recipe");

const app_name = require('../package.json').name; // "tartatout"

mongoose.connect((process.env.MONGODB_URI || `mongodb://localhost/${app_name}`), { useNewUrlParser: true });

//mongoose.connection.db.dropDatabase();

const recipes = json.map(complexrecipe => {
  //console.log('çomplexrecipe=', complexrecipe.analyzedInstructions[0].steps)

  let steps;
  if (complexrecipe.analyzedInstructions[0]) {
    steps = complexrecipe.analyzedInstructions[0].steps.map(complexstep => {
      //console.log("coucou", complexstep.step)
      return complexstep.step;
    })
  } else {
    steps = []
  }

  let ingredients;
  if (complexrecipe.extendedIngredients) {
    ingredients = complexrecipe.extendedIngredients.map(complexIngredients => {
      // console.log("coucou", complexIngredients.name)
      return complexIngredients.name;
    })
  } else {
    ingredients = []
  }

  let amount;
  if (complexrecipe.extendedIngredients) {
    amount = complexrecipe.extendedIngredients.map(complexAmount => {
      console.log("coucou", complexAmount.measures.metric.amount)
      return complexAmount.measures.metric.amount;
    })
  } else {
    amount = []
  }

  let unit;
  if (complexrecipe.extendedIngredients) {
    unit = complexrecipe.extendedIngredients.map(complexUnit => {
      console.log("coucou", complexUnit.measures.metric.unitShort)
      return complexUnit.measures.metric.unitShort;
    })
  } else {
    unit = []
  }
  let ingredientsList = ingredients
    .map((str) => str.split(" "))
    .reduce((acc, it) => [...acc, ...it], []);

  return {
    title: complexrecipe.title,
    image: complexrecipe.image,
    steps: steps,
    readyInMinutes: complexrecipe.readyInMinutes,
    preparationTime: complexrecipe.preparationMinutes,
    cookingTime: complexrecipe.cookingMinutes,
    servings: complexrecipe.servings,
    ingredients: ingredients,
    ingredientsList: ingredientsList,
    amount: amount,
    unit: unit
  }
});

console.log('recipes=', recipes)

Recipe.create(recipes, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${json.length} recipes`);

  mongoose.disconnect();
});

