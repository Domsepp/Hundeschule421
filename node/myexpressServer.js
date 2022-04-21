const express = require("express");
const path = require("path")
const app = express();

app.use(express.static('pages/styles'));

app.get("/", (req,res) => {                             // Wenn nichts hinten dran steht, soll es einfach ein get request machen
    res.sendFile(path.join(__dirname) + "/pages/index.html")
});
app.get("/users/", (req,res) => {              
    res.send("hello user world!!!");
});

app.listen(1337);
console.log("Sever listening on port 1337");