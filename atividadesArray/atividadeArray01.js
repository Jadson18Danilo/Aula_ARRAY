/*Crie um array chamado frutas com 10 elementos: "maçã", "banana", "laranja", "uva", "melancia", "abacaxi", "manga", "morango",
"kiwi", "pera". Crie um algoritmo que receba uma fruta e informe se ela pertence ao array frutas. 
*/

const prompt = require("prompt-sync")()

const   frutas = ["maçã", "banana", "laranja", "uva", "melancia", "abacaxi", "manga", "morango",
"kiwi", "pera"]

//.toLowerCase() = é usado para distinguir letra maiusculo e minúsculo.

let fruta = prompt("Digite uma fruta: ").toLowerCase()

let encontrado = false

for (let i = 0; i < frutas.length; i++) {
    let temFruta = fruta === frutas[i]
    if (temFruta) {
        encontrado = true
        break
    }
    
}

if (encontrado) {
    console.log(`A fruta ${fruta} está no array.`)
}
else {
    console.log(`A fruta ${fruta} não está no array.`)
}