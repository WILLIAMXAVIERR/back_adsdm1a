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
    const contatos = buscarContato(nome);

    if(contatos == nome){
        contatos.alterar(contatos);
    } else{
        console.log("Esse trem não existe");
    }

    alterar(contatos);
}

function removerContato(nome){
    const contatos = buscarContato(nome);

    if(contatos == nome){
        contatos.deletar(contatos);
    } else{
        console.log("Esse trem não existe");
    }
}

module.exports = adicionarContato;
module.exports = buscarContato;
module.exports = atualizarContato;
module.exports = removerContato;
