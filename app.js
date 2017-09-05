var express = require("express");
var bodyParser = require("body-parser");
//var routes = require("./routes/route.js")
var pugRoutes = require("./routes/pugrouter.js")
var app = express();

console.log(pugRoutes);

// app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/images"));
app.use(express.static("images"));
app.set('views', __dirname + '/views');
app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.get("/location", pugRoutes.showLocationGallary)
app.get("/", pugRoutes.welcomePage)

app.listen((process.env.PORT || 3000), function() {
    console.log("Server is running at:" + process.env.PORT)
})