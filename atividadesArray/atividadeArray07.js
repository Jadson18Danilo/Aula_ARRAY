// Crie um array dias com os elementos ["segunda", "terça", "quarta", "quinta", "sexta"]. Inverta a ordem do array e exiba o resultado no console. 


const prompt = require("prompt-sync")()

const dias = ["segunda", "terça", "quarta", "quinta", "sexta"]

dias.reverse()
console.log(dias)

/*const diasInvertidos = new Array(dias.length)

for (let i = 0; i < dias.length; i++) {
    diasInvertidos[i] = dias[dias.length - 1 - i]
}
console.log(diasInvertidos)*/