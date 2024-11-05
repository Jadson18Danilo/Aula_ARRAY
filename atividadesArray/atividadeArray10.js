// Crie um array temperaturas com os valores [23, 19, 25, 21, 20, 18, 22]. Faça um algoritmo que encontre e exiba o menor valor do array. 


const prompt = require("prompt-sync")()

const temperaturas = [23, 19, 25, 21, 20, 18, 22]

let menorValor = temperaturas[0]

for (let i = 1; i < temperaturas.length; i++) {
    if (temperaturas[i] < menorValor) {
      menorValor = temperaturas[i];
    }
}
console.log("O menor valor de temperatura é:", menorValor)
  