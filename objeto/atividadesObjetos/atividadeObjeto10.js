/*
Crie um objeto chamado agenda que armazena informações sobre uma pessoa: nome, telefone e email. 
Crie uma função fora do objeto que receba este objeto como parâmetro e exiba uma mensagem formatada 
com todas as informações da pessoa.
*/

const prompt = require("prompt-sync")()

const agenda = {   
    nome: "Dudu",
    telefone: "(84)99999-9999",
    email: "franzino@gmail.com"
}

function exibirInformacoes(pessoa) {
    console.log(`Informações da Pessoa:
    Nome: ${pessoa.nome}
    Telefone: ${pessoa.telefone}
    Email: ${pessoa.email}`);
}

exibirInformacoes(agenda)