var express = require("express");
var app = express();

app.get("/",(req,res)=>{
    res.send("Home Page");
});

app.listen(8989,()=>{
    console.log("Listening at port 8989");
});