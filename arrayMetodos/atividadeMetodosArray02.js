/*Remover e Adicionar no Início 

Enunciado: Considere um array colors = ["red", "blue", "green"]. Use o método .shift() para remover o primeiro elemento e, em seguida, o método .unshift() para adicionar "purple" no início do array. Qual será o conteúdo final do array colors? 
Entrada: ["red", "blue", "green"] */

const prompt = require("prompt-sync")()

const colors = ["red", "blue", "green"]
    console.log(colors)
colors.shift()
    console.log(colors)
colors.unshift("puple")
    console.log(colors)