const conectarDb = require("./database");
const db = conectarDb();
const collection = db.collection("contatos");

class Contatos {
  constructor(nome, email, telefone) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.id = null;
  }

  inserir() {
    const result = collection.insertOne({ nome, email, telefone });
    this.id = result.ops[0]._id;
  }

  alterar() {
    collection.updateOne({_id: this.id}, {$set: {nome: this.nome, email: this.email, telefone: this.telefone}});
  }

  deletar(){
    collection.updateOne({_id: this.id});
  }

  buscar(){
   const result = collection.findOne({nome: this.nome});

   if(result){
    this.id = result._id;
    this.id = result._email;
    this.id = result._telefone;
   }
  }
}

module.exports = Contatos;
