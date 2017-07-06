const mongoose = require("mongoose");
const Recipe = require("./models/recipe");

mongoose.Promise = require("bluebird");

mongoose.connect("mongodb://localhost:27017/mongoosestore");

const recipe = new Recipe({name: "Joel Salad"});
recipe.save();

const ingredient = {amount: 5, name: "Tomatoes"}
recipe.ingredients.push(ingredient);
recipe.save();

console.log(recipe.toObject());
