const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// var db = require("./models");


// Define middleware here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
var path = require("path");
app.get("*", function(req, res){
  console.log("hello");
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
})

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactscraping");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/arnab_contacts", { useNewUrlParser: true });




// db.Contacts.create(
//   {name: "Arnab Majumdar" }, 
//   {email : "arnab156@gmail.com"},
//   {phone : "401-871-377"},
//   {message : "this is a dummy data"}
//   )
//   .then(function(dbUser) {
//     console.log(dbUser);
//   })
//   .catch(function(err) {
//     console.log(err.message);
//   });





// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
