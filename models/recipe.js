const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  prepTime: Number,
  cookTime: Number,
  ingredients: [{
    amount: { type: Number, required: true, default: 1 },
    name: { type: String, required: true }
  }],
  instructions: [String]
});
