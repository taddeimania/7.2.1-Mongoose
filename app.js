const express = require("express");
const mongoose = require("mongoose");
const mustacheExpress = require("mustache-express");
const Recipe = require("./models/recipe");
const recipeController = require("./controllers/recipeController");

const app = express();
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

mongoose.Promise = require("bluebird");
mongoose.connect("mongodb://localhost:27017/mongoosestore");

app.get("/", recipeController.list);


app.listen(3000);
