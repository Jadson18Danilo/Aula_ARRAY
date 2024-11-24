/*
Crie uma função que receba uma string como parâmetro e retorne o número de
vogais (a, e, i, o, u) presentes na string, independentemente de serem maiúsculas
ou minúsculas.
*/

const prompt = require("prompt-sync")()

function contarVogais(frase){
    let vogais = 0
    for (let letra of frase) {
/*        let letraMinuscula = letra.tolowercase()
        if (letraMinuscula === 'a'
             || letra === 'e'
             || letra === 'i'
             || letra === 'o'
             || letra === 'u') {
            vogais++
        }
*/  if ('aeiou'.includes(letra.toLowerCas())) {
        vogais++
}  
    }
    return vogais
}

console.log(contarVogais('Progamar é muito legal!'))//9
console.log(contarVogais('JavaScript'))//3
console.log(contarVogais('oi'))//2