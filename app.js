var express   =require("express");
    app       =express();
    bodyParser=require("body-parser");
    mongoose  =require("mongoose");



mongoose.connect("mongodb://localhost:27017/add", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static("public"));
app.set("view engine","ejs");


var addSchema=new mongoose.Schema({
  name:String,
});

var add=mongoose.model("add",addSchema );
/*add.create(
  {
  name:"Mayank Maheshwari",

}, function(err,add){
  if(err){
    console.log(err);
  } else{
    console.log("Newly created second friend");
    console.log(add);
}
});
*/



app.get("/",function(req,res){
  res.render("home");

});
app.get("/luv/:thing",function(req,res){
  var thing=req.params.thing;
  res.render("love",{thingVar: thing});
});
app.get("/posts",function(req,res){
  var posts=[
    {title: "Simple webpage",author: "Susy"},
    {title: "Myself got surprise",author: "Charlie"},
    {title: "Can you believe me?",author:"Mayank"}
  ];
  res.render("posts",{posts:posts});
});
app.post("/addfriend",function(req,res){
  var newFriend=req.body.newfriend;
  friends.push(newFriend);
  res.redirect("/friends");
  });
app.get("/friends",function(req,res){
add.find({},function(err,friendsall){
  if(err){console.log(err);

  }else{

      res.render("friends",{friends:friendsall});
  }


});
});





app.listen("3050",function(){
  console.log("Server is listening!!!");
});
