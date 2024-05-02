const readline = require('readline-sync');
const controlador = require('./controler');

function menu(){
    console.log("1 - Adicionar contato");
    console.log("2 - Buscar contato");
    console.log("3 - Atualizar contato");
    console.log("4 - Remover contato");
    console.log("5 - Sair");
}

function escolhaOpcao(opcao){
    switch(opcao){
        case "1":
    readline.question("Adicione um novo nome:");
    controlador.adicionarContato();
        break
        case "2":
    controlador.buscarContato();
        break
        case "3":
    controlador.atualizarContato();
        break
        case "4":
    controlador.removerContato();
        break
        case "5":
    process.exit(0);
        default:
    console.log("Opção inválida");
    }


}
