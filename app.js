const mongoose = require("mongoose");
const Recipe = require("./models/recipe");

mongoose.Promise = require("bluebird");

mongoose.connect("mongodb://localhost:27017/mongoosestore");

Recipe.findOne({name: "Joel Salad"}).then(result => {
  const ingredient = {name: "Bacon Fat", amount: 4}
  result.ingredients.push(ingredient);
  result.save();
})
