/*
Crie um objeto chamado estoque com produtos como propriedades, onde cada propriedade é um nome de produto e o valor 
é a quantidade em estoque. Escreva uma função que recebe o nome de um produto como parâmetro e verifica se ele está 
disponível no estoque.
*/

const prompt = require("prompt-sync")()

const estoque = {
    arroz: {
        produto: 6,
        valor: 10
    }
}

const estoque1 = {
    cuzcus: {
        produto: 1,
        valor: 2
    }
}


const disponivel = function(arroz) {
    return estoque.arroz.produto
}

