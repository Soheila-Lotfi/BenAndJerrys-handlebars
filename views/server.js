var express = require("express");
var exphdb = require("express-handelbars");

// create an instance of express
var app = express();

// create port of the app. process.env.PORT lets the port to be set by Heroku

var PORT = process.env.PORT || 8080;

// express use handlebars as the templating engine -
// Set Handlebars as the default templating engine.

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data

var icecreams = [
  { name: "vanilla", price: 10, awesomeness: 3 },
  { name: "chocolate", price: 4, awesomeness: 8 },
  { name: "banana", price: 1, awesomeness: 1 },
  { name: "greentea", price: 5, awesomeness: 7 },
  { name: "jawbreakers", price: 6, awesomeness: 2 },
  { name: "pistachio", price: 11, awesomeness: 15 }
];
