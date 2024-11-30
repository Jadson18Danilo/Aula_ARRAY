/*
Crie um objeto chamado config com as propriedades tema e idioma. Use o método Object.freeze() para impedir alterações no objeto e, 
em seguida, tente modificar o valor da propriedade tema. Exiba o objeto no console para verificar se a alteração foi aplicada.
*/

const prompt = require("prompt-sync")()

let config = {
    tema: "Blue",
    idioma: "Inglês"
}

console.log(config.tema)

Object.freeze(config)
config.tema = "red",


console.log(config.tema)