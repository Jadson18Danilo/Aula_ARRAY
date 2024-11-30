/*
Crie um objeto chamado biblioteca que possui uma propriedade livros (um array de objetos). 
Cada objeto no array deve representar um livro, com as propriedades titulo e autor. Adicione 
um método ao objeto biblioteca chamado listarLivros que exibe o título e o autor de cada livro.
*/

const prompt = require("prompt-sync")()

const biblioteca = {
    livros: [
        { titulo: "Dom Quixote", autor: "Miguel de Cervantes" },
        { titulo: "1984", autor: "George Orwell" },
        { titulo: "O Grande Gatsby", autor: "F. Scott Fitzgerald" }
    ],
    
    listarLivros() {
        console.log("Lista de Livros na Biblioteca:");
        this.livros.forEach((livro, index) => {
            console.log(`${index + 1}. ${livro.titulo} - ${livro.autor}`);
        });
    }
};
