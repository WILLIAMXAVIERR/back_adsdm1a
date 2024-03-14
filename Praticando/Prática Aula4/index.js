const express = require('express');

const app = express();

app.listen(300, function(){
    console.log('API DEU BOM');
})

module.exports = app;

app.get("/", function(req, res){
    res.status(200).send("Funciona, caraleos");
})

app.post("/", function(req, res){
    res.status(201).send("Funciona, caraleos");
})

app.put("/", function(req, res){
    res.status(200).send("Funciona, caraleos");
})

app.delete("/", function(req, res){
    res.status(204).send("Funciona, caraleos");
})
