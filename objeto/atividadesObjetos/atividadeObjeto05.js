/*
Crie dois objetos chamados usuario1 e usuario2 com as propriedades nome e idade. 
Combine os dois objetos em um único objeto chamado usuarios, utilizando o spread operator. 
Exiba o objeto resultante no console.

*/



const usuario1 = {
    nome: "Jorel",
    idade: 11
}

const usuario2 = {
    nome1: "Irmão do Jorel",
    idade1: 15
}

const usuarios = {...usuario1, ...usuario2}

console.log(usuarios)


