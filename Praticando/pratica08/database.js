const { MongoClient, ObjectId } = require('mongodb');

const url = "mongodb+srv://WILLIAMXAVIERR:meupaiquesabe@cluster0.vq2fccl.mongodb.net/";

const client = new MongoClient(url);

    async function conectarDb(){
        try{    
            
            await client.connect();
            return client.db('agenda');
        
        } catch (error){
            
            console.log("Deu ruim, negão")

        }

}

module.exports = conectarDb;

