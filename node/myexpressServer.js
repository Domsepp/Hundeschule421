const express = require("express");
const path = require("path")
const app = express();

app.use(express.static('pages/styles'));
app.use(express.static('pages/Images'));
app.use(express.static('pages/scripts'));


function mainPage(req,res,next){
    res.sendFile(path.join(__dirname + "/pages/index.html"));
}


app.use("/", mainPage);

app.listen(1337);
console.log("Sever listening on port 1337");