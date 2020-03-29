//Criando Templates Strings
console.log("Usando a função template Strings\n")

const nome = "Daniele"
const idade = 25
console.log ("Concatenação tradicional")
const concatenar = "Olá " + nome + " tenho " + idade +" anos !"
console.log(concatenar)

console.log ("\nExemplos usando o template strings")
const template = `
    Olá
    sou a ${nome}
    e tenho ${idade} anos!`
console.log (template)

//expressoes
console.log(`1 + 1 = ${1 + 1}`)

//Funcoes
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)