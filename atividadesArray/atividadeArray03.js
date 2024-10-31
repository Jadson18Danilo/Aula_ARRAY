// Crie um array valores com os números [2, 4, 6, 8, 10]. Multiplique cada elemento por 2 e exiba o novo array no console. 


const prompt = require("prompt-sync")()

numeros = [2, 4, 6, 8, 10]

let mult = 0

for (let i = 0; i < numeros.length; i++) {
    mult = numeros[i] * 2
    console.log(`O multiplicador de ${numeros[i]} é ${mult}`)
}