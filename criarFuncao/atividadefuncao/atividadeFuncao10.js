/*
Crie uma função que receba uma base e um expoente e retorne o valor da base
elevada ao expoente, sem usar o método Math.pow. Utilize apenas um loop para
multiplicações sucessivas.
*/

const prompt = require("prompt-sync")()

function contarOcorrencias(texto, caractere){
    let contador = 0
    for (let letra of texto) {
        if (letra === caractere) {
            contador++
        }
    }
    return contador
}

console.log(contarOcorrencias("Javascript", "a"))// 2
console.log(contarOcorrencias("Javascript", "x"))// 0