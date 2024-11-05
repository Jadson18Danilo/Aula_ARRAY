//  Crie um array idades com os valores [15, 20, 18, 22, 25, 20, 18, 22]. Faça um algoritmo que conte quantas vezes o número 18 aparece no array. 
const prompt = require("prompt-sync")()

const idades = [15, 20, 18, 22, 25, 20, 18, 22]

let contador = 0;

for (let i = 0; i < idades.length; i++) {
    if (idades[i] === 18) {
      contador++;
    }
}
console.log("O número 18 aparece", contador, "vezes no array.")