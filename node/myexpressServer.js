const express = require("express");
const app = express();

app.get("/", (req,res) => {                             // Wenn nichts hinten dran steht, soll es einfach ein get request machen
    res.send("hello GET world!!!");
});
app.get("/users/", (req,res) => {                             // Wenn nichts hinten dran steht, soll es einfach ein get request machen
    res.send("hello user world!!!");
});

app.listen(1337);
console.log("Sever listening on port 1337")