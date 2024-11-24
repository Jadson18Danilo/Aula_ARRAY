/*
Crie uma função que receba um número n e retorne a soma de todos os números
de 1 até n. Por exemplo, para n = 5, a função deve retornar 1 + 2 + 3 + 4 + 5 = 15.
*/

const prompt = require("prompt-sync")()

function somaAteN(n) {
    let soma = 0
    for (let i = 1; i <= n; i++) {
        soma += i
    }
    return soma
}

console.log(`Soma de 1 até 5: ${somaAteN(5)}`)// 15
console.log(`Soma de 1 até 10: ${somaAteN(10)}`)// 15
console.log(`Soma de 1 até 100: ${somaAteN(100)}`)// 15