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

const environment = process.env.NODE_ENV || "development";
let mongoURL;

if (environment === "production") {
  mongoURL = process.env.MONGODB_URI;
} else {
  mongoURL = require("./config.json")[environment].mongoURL;
}

mongoose.connect(mongoURL);

app.get("/", recipeController.list);


app.listen(process.env.PORT || 3000);
