/*
Crie uma função que receba dois números como parâmetros e retorne true se o
primeiro número for divisível pelo segundo, e false caso contrário. A função deve
usar o operador de módulo (%).
*/

const prompt = require("prompt-sync")()

/*function ehDividivel(divisor, dividendo) {
    const resto = divisor % dividendo
    const resposta = resto === 0 // obrigatoriamente vai retornar (true e false)
    return resposta    
}*/
    
//simplificando
function ehDividivel(divisor, dividendo) {
    return (divisor % dividendo) === 0
}

// Teste
console.log(ehDividivel(10, 0))// false
console.log(ehDividivel(10, 1))// true
console.log(ehDividivel(10, 2))//true
console.log(ehDividivel(10, 3))//false
console.log(ehDividivel(10, 4))//false
console.log(ehDividivel(10, 5))//true
console.log(ehDividivel(10, 6))//false
console.log(ehDividivel(10, 7))//false
console.log(ehDividivel(10, 8))//false
console.log(ehDividivel(10, 9))//false
console.log(ehDividivel(10, 10))//true

// diferença entre == e ===
/*resultado1 = 0 == '0'(esta interessado no conteúdo) retorna verdadeiro
resultado2 = 0 === '0'(esta interessado no conteúdo e no tipo) retorna False*/