var express = require("express");
var exphbs = require("express-handlebars");

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

// create a route called `/icecream/:name`.
//When the route is hit, it will display the name, price and awesomeness for that specific ice cream.

app.get("/icecream/:name", function(req, res) {
  var icecreamName = req.params.name;
  for (i = 0; i < icecreams.length; i++) {
    if (icecreams[i].name === icecreamName) {
      res.render("icecream", icecreams[i]);
    }
  }
});

// start the saerver

app.listen(PORT, function() {
  console.log("the server is listening on: " + PORT);
});

// * Create an `/icecreams` route. It will loop over all the ice creams and display them all to the user.
