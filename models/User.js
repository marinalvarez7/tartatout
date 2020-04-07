const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  password: String,
  email: String,
  favoriteIngredient: {
    type: String,
    enum: []
  },
  favoriteRecipes: {
    type: String,
    enum: []
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;