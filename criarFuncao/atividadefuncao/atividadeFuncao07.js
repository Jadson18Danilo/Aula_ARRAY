/*
Crie uma função que receba um array de números e retorne um objeto contendo o
valor mínimo e o valor máximo do array. Exemplo: encontrarMinMax([3, 7, 1, 9, 4])
deve retornar { min: 1, max: 9 }.
*/

const prompt = require("prompt-sync")()

// usando objeto
function encontrarMinMax(...numeros) {
    let minimo = numeros[0]
    let maximo = numeros[0]
/*    for (let numero of numeros) {
        if (numero < minimo) {
            minimo = numero
        }
        if (numero > maximo) {
            maximo = numero
        }
    }
    return { minimo, maximo }
}

console.log(encontrarMinMax(3, 7, 1, 9, 4))// { min; 1, max: 9 }
console.log(encontrarMinMax(1, 2, 3, 4, 5))// { min; 1, max: 5 }
console.log(encontrarMinMax(3, 7, 1, 9, 4))// { min; 1, max: 5 }
console.log(encontrarMinMax(3, 7, 1, 9, 4))// { min; 1, max: 1 }
console.log(encontrarMinMax(3, 7, 1, 9, 4))// { min; 1, max: 1 }
console.log(encontrarMinMax(3, 7, 1, 9, 4))// { min; undefined, max: undefined }
console.log(encontrarMinMax(1, 2, 3, 4, 5, 6,  7, 8, 9, 10))// { min; 1, max: 10 }*/
    


        for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < minimo) {
            minimo = numeros[i]
        }
        if (numeros[i] > maximo) {
            maximo = numeros[i]
        }
    }
    return {
        min: minimo,
        max: maximo
    }
}


/*const carros = ['Gol', 'Uno', 'Celta', 'Corsa', 'Palio']
for (let carro of carros) {
    console.log(carro)
}

// com arrou function
carros.forEach(carro => console.log(carro))

carros.forEach(function(carro){
    console.log(carro)
})*/

