/*
Crie uma função que receba três números como parâmetros e retorne o maior
deles. Não use funções prontas como Math.max, apenas comparações lógicas.
*/

const prompt = require("prompt-sync")()

/*function maiorValor (num1, num2, num3){
    if (num1 > num2 && num1 > num3) {
        return num1
    }
    else if (num2 > num1 && num2 > num3){
        return num2
    }
    else{
        return num3
    }
}*/

//simplificando
/*
function maiorNumero(num1, num2, num3){
    let maiorNumero = num1
    if (num2 > maiorNumero) {
        maiorNumero = num2
    }
    if (num3 > maiorNumero){
        maiorNumero = num3
    }
    return maiorNumero
}
*/

// quiser fazer varios números
function maiorDeTodos(...numeros){
    let maiorNumero = numeros[0]
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i]
        }
    }
    return maiorNumero
}

/*const num1 = parseFloat(prompt(`Digite o primeiro número: `))
const num2 = parseFloat(prompt(`Digite o segundo número: `))
const num3 = parseFloat(prompt(`Digite o terceiro número: `))

console.log(`O maior número é ${maiorValor(num1, num2, num3)}`)
*/

// Teste
console.log(maiorDeTodos(1, 2, 0))// 2
console.log(maiorDeTodos(3, 5, 1, 4, 2, 7))// 7
console.log(maiorDeTodos(9, 6, 3, 8, 4, 1, 5, 2, 3, 7))// 9
console.log(maiorDeTodos(3, 5))// 5
console.log(maiorDeTodos(1, 2, 10, 20))// 20
