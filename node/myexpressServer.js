const express = require("express");
const app = express();

app.all("*", (req,res) => {
    console.log(req);
    res.send("hello world!!!");
});

app.listen(1337);
console.log("Sever listening on port 1337")