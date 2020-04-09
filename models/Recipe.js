const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
	{
      title: String,
      image: String,
      readyInMinutes: Number,
      preparationTime: Number,
      cookingTime: Number,
      servings: Number,
      ingredients: [],
      ingredientsList:[],
      amount: [],
      unit: [],
      steps: [],
      combinedAmountUnit: [],
      ingredientsQuantities: [],
	},
	{
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at"
		}
	}
);
const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;