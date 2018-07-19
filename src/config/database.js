const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

module.exports = mongoose.connect("mongodb://localhost/mymoney");

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatória";
mongoose.Error.messages.Number.min =
  "O '{VALUE}' informado é menor que o limite mínimo informado de '{MIN}'";
mongoose.Error.messages.Number.max =
  "O '{VALUE}' informado é maior que o limite máximo informado de '{MAX}'";
mongoose.Error.messages.String.enum =
  "'{VALUE}' não é válido para o atributo '{PATH}'";
