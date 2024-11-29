const pessoa = {
    nome: "João Silva",
    idade: 28,
    sexo: "Masculino",
    endereco:{
        logradouro: "Rua das Flores",
        numero: 123,
        bairro: "Jardim Primavera",
        cidade: "São Paulo",
        envelhecer: () => pessoa.idade++// uma função anonima que retorna a soma da idade + 1
    }
}

console.log(pessoa.endereco.logradouro)

pessoa.cpf = "99999999999999"// adicionar indice

delete pessoa.cpf // deletar indice

console.log(pessoa)

