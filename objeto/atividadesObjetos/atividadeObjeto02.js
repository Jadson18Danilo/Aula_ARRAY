/*
Adicione uma nova propriedade chamada editora ao objeto livro criado na questão anterior. 
Modifique o valor da propriedade titulo e remova a propriedade autor. Exiba o objeto atualizado no console.
*/

const prompt = require("prompt-sync")()

const livro = {
    titulo: "A bendita",
    autor: "Bendita",
    pagina: 666,  
}

livro.editora = "bonde"

console.log(livro.titulo)
console.log(livro.autor)
console.log(livro.pagina)
console.log(livro.editora)


