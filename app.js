const prompt = require("prompt-sync")()

function maiorValor (num1, num2, num3){
    if (num1 > num2 && num1 > num3) {
        return num1
    }
    else if (num2 > num1 && num2 > num3){
        return num2
    }
    else{
        return num3
    }
}

const num1 = parseFloat(prompt(`Digite o primeiro número: `))
const num2 = parseFloat(prompt(`Digite o segundo número: `))
const num3 = parseFloat(prompt(`Digite o terceiro número: `))

console.log(`O maior número é ${maiorValor(num1, num2, num3)}`)