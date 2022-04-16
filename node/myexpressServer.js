const express = require("express");
const app = express();

app.all("*", (req,res) => {
    res.send("<h1>Hello World</h1>");
});

app.listen(1337);
console.log("Sever listening on port 1337")