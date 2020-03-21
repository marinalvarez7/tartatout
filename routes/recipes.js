const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const Recipe = require("../models/Recipe");

router.get('/', (req, res, next) => {
  res.json({ message: 'welcome sur la homepage' });
});

router.get("/ingredients", (req, res, next) => {
  Recipe.find()
    .then(allTheIngredients => {
      res.json(allTheIngredients);  // route des ingrédients. Ajouter filtrage des recettes en choisissant ingrédient. Faire un if
    })
    .catch(err => {
      res.json(err);
    })
})

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

// router.get("/recipe/custom", (req, res, next) => {
//   Recipe.findOne({ _id: req.params.id })
//     .then(recipe => res.json(recipe))
//     .catch(err => next(err))
// ;

// router.post("recipe/custom", (req, res, next) => {
//   Recipe.findOne({ _id: req.params.id })
//     .then(recipe => res.redirect())
//     .catch(err => next(err))
//     ;
  //cette route merdouille ; à reprendre entre le get et post 


  //faire un formulaire pour sélectionner les ingrédients : faire une requete post avec req.body


  //route qui permet quand on choisit les ingrédients de filtrer les recettes
  // à mettre sur la route recipe
  //vérifier ; faire un composant show les recipes (4ème page du figma)
});

router.get("/recipes/:id", (req, res, next) => {
  Recipe.findOne({ '_id': req.params.id })
    .then(theRecipe => res.json(theRecipe))
    .catch(err => next(err))
  // })
  // route qui amène à la recette choisie
  // à mettre sur la route recipe
});



module.exports = router;