// Crie um array numeros com os valores [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Faça um algoritmo que some todos os elementos e exiba o resultado no console.


const prompt = require("prompt-sync")()

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let soma = 0

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
}
    console.log(`A soma é ${soma}`)