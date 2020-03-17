const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Ingredient = require("../models/Ingredient");
const Recipe = require("../models/Recipe");

router.get("/ingredients", (req, res, next) => {
  Ingredient.find()
    .then(allTheIngredients => {
      res.json(allTheIngredients);  // route des ingrédients. Ajouter filtrage des recettes en choisissant ingrédient. Faire un if
    })
    .catch(err => {
      res.json(err);
    })
})

router.get("/recipe", (req, res, next) => {
  Recipe.find().populate('ingredients')
  .then(allTheIngredients => {
    res.json(allTheIngredients);
  })
  .catch(err => {
    res.json(err);
  })
  // route des recettes 
});

router.get("/recipes/featured", (req, res, next) => {
  // route sur homepage pour mettre en avant des recettes
});

router.get("/recipe?ingredients", (req, res, next) => {
 //route qui permet quand on choisit les ingrédients de filtrer les recettes
 // à mettre sur la route recipe
});

router.get("/recipes/:id", (req, res, next) =>{
  Recipe.findOne({'_id':req.params.RecipeId})
    .then(theRecipe => {
      res.status(200)
    })
// route qui amène à la recette choisie
// à mettre sur la route recipe
});



module.exports = router;