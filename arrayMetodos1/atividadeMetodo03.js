/*Faça um programa, com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos. */

const prompt = require("prompt-sync")()



function questO03(numero1, numero2, numero3){
    const soma = numero1 + numero2 + numero3
    return soma
}

const a = parseFloat(prompt(`Digite o número 1: `))
const b = parseFloat(prompt(`Digite o número 2: `))
const c = parseFloat(prompt(`Digite o número 3: `))

console.log(`A soma dos números é ${questO03(a, b, c)}`)