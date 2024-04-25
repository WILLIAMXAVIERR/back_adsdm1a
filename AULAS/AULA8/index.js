const { MongoClient, ObjectId } = require("mongodb");

const url =
  "mongodb+srv://WILLIAMXAVIERR:meupaiquesabe@cluster0.vq2fccl.mongodb.net/";
const client = new MongoClient(url);

async function conectar() {
  try {
    await client.connect();
  } catch (error) {
    console.log("Deu ruim!", error);
  }
}

async function inserir(produto) {
  const db = client.db("loja");
  return await db.collection("produtos").insertOne(produto);
}

async function listar() {
  const db = client.db("loja");
  return await db.collection("produtos").find({}).toArray();
}

async function atualizar(id, produto) {
  const db = client.db("loja");
  return await db
    .collection("produtos")
    .updateOne({ _id: new ObjectId(id) }, { $set: produto });
}

async function remover(id){
    const db = client.db('loja');
    return await db.collection('produtos').deleteOne({_id: new ObjectId(id)});

}

async function main() {
  await conectar();
  let result = await inserir({ nome: "bala de goma", preco: 22.58 });
  console.log("Produto inserido", result);

  result = await atualizar("662a56b874d8762c7132cfb0", {
    nome: "bala de cafe",
    preco: 9.99,
  });
  console.log("Produto atualizado", result);

  result = await remover('662a5e7d12280f19c1de58a5');
  console.log('produto removido', result);

  result = await listar();
  console.log("Lista de produtos", result);

  await client.close();
}

main();
