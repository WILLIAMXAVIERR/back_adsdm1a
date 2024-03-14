

const express = require('express');

const app = express();

// middleware integrado
app.use(express.json());

// middleware de aplicação
    app.use(function(req, res, next){
        console.log("Data:" , new Date());
        console.log(req.url);
        console.log(req.method);
        console.log(req.headers);
        console.log(req.params);
        console.log(req.body);
        next();
    })

// middleware de rota
    app.get("/", function(req, res){
        res.send("Olá, j'aimé"); // status 200 
    });

    app.post("/", function(req, res){
        console.log(req.body);
        res.status(201).send("Criado com sucesso"); // status 200
    });

    app.put("/", function(req, res){

        res.json({status: "200", message: "Sucesso"}); 
    });

    app.delete("/", function(req,res){

        throw new Exception();
    });

    // midleware de erro
    app.use(function(error, req, res, next){
        res.status(400).send("Fudeu!");
    });

app.listen(3000, function() {
        console.log("API está ON!");
    
})

module.exports = app;