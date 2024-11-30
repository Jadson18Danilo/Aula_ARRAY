/*
Utilize o método Object.keys() para obter todas as chaves de um objeto chamado produto com as propriedades nome, 
preco e estoque. Exiba as chaves no console.
*/

const prompt = require("prompt-sync")()

produto = {
    nome: "copo",
    preco: 10,
    estoque: 30
}

console.log(Object.keys(produto))