/*Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros formais: taxaImposto, 
que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. 
A função “altera” o valor de custo para incluir o imposto sobre vendas. */

const prompt = require("prompt-sync")()

function somaImposto(taxaImposto, custo) {
    const percentualImposto = taxaImposto / 100
    const valorImposto = custo * percentualImposto
    const valorComImposto = custo + valorImposto
    return valorComImposto
}

const custo = parseFloat(prompt(`Informe o valor do produto: `))
const taxa = parseFloat(prompt(`Informe o valor do taxa: `))

console.log(`O valor com imposto é ${somaImposto(taxa, custo)}`)