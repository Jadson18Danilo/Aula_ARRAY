/*
Crie uma função que receba uma string como parâmetro e retorne a string invertida.
Por exemplo, ao passar "casa", a função deve retornar "asac".
*/

const prompt = require("prompt-sync")()

function inverterTexto(texto){
    let textoInvertido = ''
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i]
    }
    return textoInvertido
}

console.log(inverterTexto('cachorro'))
//exemplo de como seria o texto invertido
/*    C A C H O R R O
    0 1 2 3 4 5 6 7

    O R R O H C A C  
    7 6 5 4 3 2 1 0 */