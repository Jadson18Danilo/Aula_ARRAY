const prompt = require("prompt-sync")()

//
//

//
let numeros = new Array(10)

// recebendo os numeros
for (let i = 0; i < numero.length; i++) {  
    let numero = parseInt(prompt(`Informe o ${i}° número: `))
    numeros[i] = numero
}

// imprimindo os elementos de tras para frente
for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(`Número ${i+1}: ${numeros[i]} número`)    
}