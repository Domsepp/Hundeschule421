const express = require("express");
const path = require("path")
const app = express();

app.use(express.static('pages/styles'));
app.use(express.static('pages/Images'));
app.use(express.static('pages/scripts'));

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


function mainPage(req,res,next){
    res.sendFile(path.join(__dirname + "/pages/index.html"));
}

function getLogin(req,res,next){
    console.log(req.body['name']);
    console.log(req.body['password']);
    res.send("<h1>Hallo Post</h1>");
}


app.post("/api/users/",getLogin);
app.get("/", mainPage);


app.listen(1337);
console.log("Sever listening on port 1337");