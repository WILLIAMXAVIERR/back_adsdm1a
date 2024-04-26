const Contatos = require('./modelo');

function adicionarContato(nome, email, telefone){
    const contatos = new Contatos(nome, email, telefone);

    contatos.inserir();
}

function buscarContato(nome){
    const contatos = new Contatos(nome);

    contatos.buscar();
}

function atualizarContato(nome, email, telefone){
    const contatos = buscarContato();

    if(contatos){
        //parei na i da 5
    }
}