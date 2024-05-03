
const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({
  nome: {
    type: String,
    trim: true,
    uppercase: true,
    required: [true, "Nome é obrigatorio"],
    minlength: [3, "Nome deve ter no minimo 3 caracteres"],
  },
  preco: { type: Number, required: [true, "Preco é obrigatorio"], 
  min: [0, "Preço deve ser >= 0"] },
  quantidade: { type: Number, default: 0 },
});

module.exports = mongoose.model("Produto", produtoSchema);
