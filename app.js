var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/route.js")
var app = express();

// app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/images"));
app.use(express.static("images"));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("Server is running.")
})

app.get("/location", routes.showLocationGallary)
app.get("/", routes.welcomePage)