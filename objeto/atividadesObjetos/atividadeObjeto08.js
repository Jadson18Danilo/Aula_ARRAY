/*
Crie um objeto chamado pessoa com as propriedades nome e idade. Use o método Object.seal() para impedir a adição ou remoção 
de propriedades, mas permita a modificação dos valores existentes. Modifique o valor da propriedade nome e tente adicionar 
uma nova propriedade chamada cidade. Exiba o objeto no console.
*/

const prompt = require("prompt-sync")()

const pessoa = {nome: "Maria"}
Object.seal(pessoa)

pessoa.nome = "João"
delete pessoa.nome
pessoa.idade = 40

console.log(pessoa)