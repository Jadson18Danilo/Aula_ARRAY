/*
Crie um objeto chamado filme com as propriedades titulo, diretor e ano. Adicione uma propriedade chamada atores 
contendo um array com nomes de atores. Adicione um método chamado descricaoCompleta que retorna uma string 
descrevendo o filme, incluindo o título, diretor, ano e atores.
*/

const prompt = require("prompt-sync")()


const filme = {
    titulo: "A volta dos que não foram",
    diretor: "Valcir Playback",
    ano: 1980
}

filme.atores = ["AnjolinaJouliy", "Maicom jaquissom", "Greg"]

console.log(filme)