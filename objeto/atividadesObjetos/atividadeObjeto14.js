/*
Crie um objeto chamado pedido com as propriedades numeroPedido, cliente e itens (um array de objetos, onde cada objeto 
representa um item com nome e quantidade). Adicione um método chamado resumoPedido que retorna o número do pedido e o 
nome de todos os itens.
*/

const prompt = require("prompt-sync")()

const pedido = {
    numeroPerdido: 1573,
    cliente: "Mara",
    itens: [
        {suco: 1, xTudo: 2, espadaMedieval: 2}
    ]
}
