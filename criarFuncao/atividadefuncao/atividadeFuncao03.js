/*
Crie uma função que receba um número inteiro positivo e retorne o fatorial desse
número. Não utilize recursão, apenas um loop simples (por exemplo, 5! = 5 * 4 * 3
* 2 * 1 = 120).
*/

const prompt = require("prompt-sync")()

function fatorial(numero){
    let resultado = 1
    for (let i = numero; i > 0; i--) {
        console.log(`${resultado} * ${i} = ${resultado * i}`)
        resultado *= i
    }
    return resultado
}

//fatorial(5)
console.log(`6! ${fatorial(6)}`)