// função para imprimir texto "Olá Mundo!"
/*function olaMundo() {
    console.log("Olá Mundo!")
}*/

// função para imprimir texto "Olá Mundo!" e "Bem vindo Jadson!" 
/*function imprimirNome(){
    olaMundo()
    console.log("Bem vindo Jadson!")
}*/

/*function calcularMedia(){
    const prompt = require("prompt-sync")()
    const numero1 = parseFloat(prompt(`Digite o número 1: `))
    const numero2 = parseFloat(prompt(`Digite o número 2: `)) 
    const media = (numero1 + numero2) / 2
    console.log(`A média de ${numero1} e ${numero2} é ${media.toFixed(2)}`)
}

for (let i = 0; i < 5; i++) {
    calcularMedia()
}*/ 
// a quantidade de números que quiser

/*function somar(...valores) {
    let resultado = 0
    for (let i = 0; i < valores.length; i++) {
        resultado += valores[i]   
    }
    return resultado
}

let valores = []

for (let i = 0; i < valores.length; i++) {
    valores = parseInt(prompt(`Digite a quantidade de valores: `))
}

function media(a, b) {
    return media(a, b) / 2
}

let teste = somar(1, 2, 3, 4, 5, 20)

console.log(`Resultado: ${teste}`)*/


/*function somar(valor1, valor2) {
    return somar(valor1 + valor2)
}


let n1 = parseInt(prompt(`Digite 1: `))
let b2 = parseInt(prompt(`Digite 2: `))

let teste = somar(n1, b2)
console.log(`Resultado: ${teste}`)*/


//pedir ao usuário a quantidade de valores para colocar no array
/*let continuar = true
let vetor = []
let contador = 1
while (continuar) {
    let numero = parseInt(prompt(`Digite o número ${contador}: `))
    vetor.push(numero)
    let resposta = prompt(`Deseja PARAR? (s ou n)`).toLocaleLowerCase
    if(resposta === `s`) {
        continuar = false
    }
    contador++
}

 console.log(vetor)*/

 function fatorial(numero) {
    resultado = 1
    for (let i = numero; i > 0; i--) {
        resultado *= i 
    }
    return resultado
}
console.log(fatorial(-5))

 function fat(numero) {
    if (numero === 0 || numero === 1){
        return 1
    }
     return numero * fat(numero - 1) 
}

console.log(fat(5))