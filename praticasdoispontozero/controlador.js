const { question } = require("readline-sync");
const Contato = require("./modelo");

const contatos = [];

function adicionarcontato (nome, email, telefone){

    const novocontato = new Contato(nome, email, telefone);
    contatos.push(novocontato);

}

function listarcontato(){

    return contatos;
}

function buscarcontato(nome){

    const buscou = contatos.find((contato) => contato.nome === nome);
    return buscou;
}

function atualizarcontato(nome, email, telefone){

    const buscou = buscarcontato(nome);
  if (buscou) {
    buscou.email = email;
    buscou.telefone = telefone;
}

}

function removerContato(nome){

    const remove = contatos.findIndex((contato) => contato.nome === nome);

    if(remove>=0){
        contatos.splice(remove,1);
    }

}

module.exports = {adicionarcontato, listarcontato, buscarcontato, atualizarcontato, removerContato };







