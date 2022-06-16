//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var items = [];
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    var today = new Date();
    var option ={
      weekday : "long",
      day : "numeric",
      month : "long"
    };
    var day=today.toLocaleDateString("en-US",option);
    res.render("list", {ankara:day , newton:items});
});

app.post("/",function(req,res){
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000,function(){
  console.log("Here we are");
});
