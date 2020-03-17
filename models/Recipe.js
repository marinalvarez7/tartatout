const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const recipeSchema = new Schema({
  ingredients: { 
      title: String,
      readyInMinutes: Number,
      image: String,
      step: ,
      ingredients : [],
      amount : Number,

  },
  
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;