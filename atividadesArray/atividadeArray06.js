// Crie um array nomes com os elementos ["Ana", "Bruno", "Carlos", "Diana"]. Remova o último elemento do array e exiba o resultado no console. 

const prompt = require("prompt-sync")()

let nomes = ["Ana", "Bruno", "Carlos", "Diana"]

nomes.pop()
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])   
}