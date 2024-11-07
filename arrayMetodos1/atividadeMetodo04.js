/*Faça um programa, com uma função que necessite de um argumento. 
A função retorna o valor de caractere ‘P’, se seu argumento for positivo, e ‘N’, se seu argumento for zero ou negativo. */

const prompt = require("prompt-sync")()

function questao04(numero){
    if (numero > 0) {
        return 'P'  
    }
    return 'N'
}

const numero = parseInt(prompt('Digite um número: '))
console.log(`O número é ${questao04(numero)}`)
