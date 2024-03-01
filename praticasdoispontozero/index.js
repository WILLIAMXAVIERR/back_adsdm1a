const readline = require('./readline-sync');
const contatoControlador = require('./controlador');

function menu() {

    console.log('1 - Adicionar contato: ');
    console.log('2 - Listar contato: ');
    console.log('3 - Buscar contato: ');
    console.log('4 - Atualizar contato: ');
    console.log('5 - Remover contato: ');
    console.log('6 - Sair: ');

}

function escolherOpcao(opcao) {
                                    //TESTAR MENU, PAREI QUESTÃO F
    switch (opcao) {
        case "1":
          controlador.adicionarcontato();   //  COLOCAR AS FUNÇOES DE ACORDO COM CONTROLADOR.JS
          break;
        case "2":
          controlador.criar();
          break;
        case "3":
          controlador.buscar();
          break;
        case "4":
          controlador.atualizar();
          break;
        case "5":
          controlador.remover();
          break;
        case "6":
          process.exit(0);
        default:
          console.log("Opcao invalida");
      }
    

}

