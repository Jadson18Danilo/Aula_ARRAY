/*
Crie um objeto chamado aluno com as propriedades nome, idade e matriculado (com valores booleanos). 
Use um for...in para iterar sobre o objeto e exibir as chaves e os valores no console.
*/

const prompt = require("prompt-sync")()

const aluno = {
    nome: "Baltazar",
    idade: 15,
    matricula: true
}

for (let jadson in aluno) {
    console.log(`${jadson}: ${aluno[jadson]}`);
}
