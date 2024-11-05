/*  Adicionar e Remover Elementos 

Enunciado: Crie um array chamado fruits com os elementos "apple", "banana", "orange". Use o método .push() para adicionar "grape" ao final do array e o método .pop() para remover o último elemento. Qual será o conteúdo do array após essas operações? 
Entrada: ["apple", "banana", "orange"] */

const prompt = require("prompt-sync")()

const fruits = ["apple", "banana", "orange"]
    console.log(fruits)
fruits.push("grape")
    console.log(fruits)
fruits.pop()
    console.log(fruits)
