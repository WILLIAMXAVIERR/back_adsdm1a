const Produto = require("../models/model_produtos");

async function validar(req, res, next) {
  try {
    const produto = new Produto(req.body);
    await produto.validate();
    next();
  } catch (error) {
    res.status(422).json({});
  }
}
async function criar(req, res) {
  const produto = await Produto.create(req.body);
  res.status(201).json({});
}

module.exports = { criar, validar };
