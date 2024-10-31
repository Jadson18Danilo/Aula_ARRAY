// Crie dois arrays: array1 com os elementos [1, 2, 3] e array2 com os elementos [4, 5, 6]. Concatene os dois arrays e exiba o resultado no console.


const prompt = require("prompt-sync")()

const array1 = [1, 2, 3]

const array2 = [4, 5, 6]

const tamanhoArray1 = array1.length
const tamanhoArray2 = array1.length

const tamanhoArrayConcatenado = tamanhoArray1 + tamanhoArray2

const arrayConcatenado = new array(tamanhoArrayConcatenado)

for (let i = 0; i < tamanhoArray1.length; i++) {
    arrayConcatenado[i] = array1[i]
}

for (let i = 0; i < tamanhoArray2.length; i++) {
    arrayConcatenado[i + tamanhoArray1] = array2[i]
    
}
console.log(arrayConcatenado)