const produtos = [];

function listarTodos(req, res) {

    res.json(produtos);

};

function buscarPeloId(req, res, next) {

    const { produoId } = req.params;
    const produtoEncontrado = produtos.find(item => item.item.id == produoId);
    if (produtoEncontrado) {
        req.produtoEncontrado = produtoEncontrado;
        next();
    } else {
        res.status(404).json({ msg: 'Produto não encontrado' });
    }
};

function exibir(req, res) {

    const { produtoEncontrado } = req;
    res.json(produtoEncontrado);

};

function validarDados(req, res) {

    const { nome, preco } = req.body;

    if (nome, preco) {
        next();
    } else {

        res.status(422).json({ msg: "Nome e Preço são obrigatorios" });

    }
};

function criar(req, res) {

    const { nome, preco } = req.body;
    const produtoNovo = {
        id: produtos.length + 1,
        nome,
        preco
    };
    produtos.push(produtoNovo);
    res.status(201).json(produtoNovo);
};

function atualizar(req, res) {


    const { produtoEncontrado } = req;
    produtoEncontrado.nome = nome;
    produtoEncontrado.preco = preco;
    res.json(produtoEncontrado);


};

function remover(req, res) {

    const { produoId } = req.params;
    const posicao = produtos.findIndex(item => item.id == produoId);
    produtos.splice(posicao, 1);
    res.status(204).end();

};


module.exports = { listarTodos, buscarPeloId, exibir, validarDados, criar, atualizar, remover };
