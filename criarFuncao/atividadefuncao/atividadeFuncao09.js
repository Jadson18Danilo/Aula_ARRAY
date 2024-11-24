/*
Crie uma função que receba uma base e um expoente e retorne o valor da base
elevada ao expoente, sem usar o método Math.pow. Utilize apenas um loop para
multiplicações sucessivas.
*/

const prompt = require("prompt-sync")()

function potencia1(base, expoente) {
    return base ** expoente
}

function potencia2(base, expoente) {
    return Math.pow(base, expoente)
}

function potencia3(bae, expoente) {
    let resultado = 1
    for (let i = 0; i < expoente; i++) {
        resultado *= base
    }
    return resultado
}

console.log(potencia1(2, 3))// 8
console.log(potencia2(2, 3))// 8
console.log(potencia3(2, 3))// 8