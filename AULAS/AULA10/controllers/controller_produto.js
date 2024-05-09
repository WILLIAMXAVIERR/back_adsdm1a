const Produto = require('../models/model_produtos');

async function criar(req, res) {
    const produto = await Produto.create(req.body);
    res.status(201).json({});

}

module.exports = { criar }