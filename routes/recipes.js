const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const Recipe = require("../models/Recipe");

router.get("/allrecipes", (req, res, next) => {
  Recipe.find()
    .then(allTheIngredients => {
      res.json(allTheIngredients);  // route des ingrédients. Ajouter filtrage des recettes en choisissant ingrédient. Faire un if
    })
    .catch(err => {
      res.json(err);
    })
})

router.get("/allrecipes/:id", (req, res, next) => {
  Recipe.findById(req.params.id)
    .then(theRecipe => res.json(theRecipe))
    .catch(err => next(err))
  // })
  // route qui amène à la recette choisie
  // à mettre sur la route recipe
});

// router.get("/recipe", (req, res, next) => {
//   Recipe.find()
//     .then(allTheIngredients => {
//       res.json(allTheIngredients);
//     })
//     .catch(err => {
//       res.json(err);
//     })
//   route des recettes 
// });

router.get("/recipes/random", (req, res, next) => {
  res.json('/');
  // route sur homepage pour mettre en avant des recettes de manière aléatoire
});

// router.get("/allrecipes", (req, res, next) => {
//   res.json('/')
// });

// GET /recipes?ingredient=flour&ingredient=chicken
router.get("/ingredients", (req, res, next) => {

  console.log('req.query=', req.query.ingredients)

  let askedIngredients = req.query.ingredients;

  let query = {};

  if (askedIngredients.length > 0) {
    query.ingredients = { $all: askedIngredients };
  }

  Recipe.find(query)
    .then(recipes => res.json(recipes))
    .catch(err => next(err))
});




module.exports = router;