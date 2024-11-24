/*
Crie uma função que receba um número inteiro e retorne true se ele for um número
primo e false caso contrário. Lembre-se de que um número primo é divisível apenas
por 1 e por ele mesmo.
*/

const prompt = require("prompt-sync")()

function ehPrimo(numero){
    if (numero <= 1) {
        return false
    }
    let divisores = 0
    for (let i = 1; i < numero; i++){
        if (numero % i === 0){ 
        divisores++
    }
        if (divisores > 2) {
        return false
        }
    }
    return true
}

console.log(ehPrimo(1))
console.log(ehPrimo(2))
console.log(ehPrimo(3))
console.log(ehPrimo(4))
console.log(ehPrimo(5))
console.log(ehPrimo(6))
console.log(ehPrimo(7))
console.log(ehPrimo(8))