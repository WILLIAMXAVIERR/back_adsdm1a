const { MongoClient } = require("mongodb");

const url = "mongodb+srv://WILLIAMXAVIERR:meupaiquesabe@cluster0.vq2fccl.mongodb.net/";

let db = null;

async function conectarDb() {
    const client = new MongoClient(url);

        try{    
            
            await client.connect();
            return client.db('agenda');
        
        } catch (error){
            
            console.log("Deu ruim, negão")

        }

}


module.exports = conectarDb;
