/*Faça um programa para imprimir:
    1
    1   2
    1   2   3
    .....
    1   2   3   ...  n
para um n informado pelo usuário. Use uma função que receba um valor n inteiro imprima até a n-ésima linha.*/

const prompt = require("prompt-sync")()

function questao02(numero) {
    let resultado = ''
    for (let i = 0; i <= numero; i++) {
        for (let j = 0; j <= i; j++) {
            resultado += `${j}\t`
            
        }
        resultado += `\n`
    }
    return resultado
}

const numero = parseInt(prompt(`Informe um número: `))
console.log(questao02(numero))