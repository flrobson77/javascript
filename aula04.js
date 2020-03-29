//Strings e as principais formas de manipulação

const escola = "IFSP_Guarulhos"
console.log("O tipo: " + typeof(escola))
console.log("Frase: " + escola)
console.log("Exemplos: ")

console.log("O 3o Caractere da String: " + escola.charAt(3))
console.log("O 4o Caractere da String: " + escola.charAt(4))
console.log("O 5o Caractere da String: " + escola.charAt(5))
console.log("O valor ASCII do 7o caractere: " + escola.charCodeAt(7))
console.log("Exiba a partir da posicao 1: " + escola.substring(1))
console.log("Exiba os caracteres entre 0 e 3: " + escola.substring(0,3))
console.log("Concatenar: ".concat('Escola ').concat(escola).concat("!"))
console.log("Substituir caractere: " + escola.replace("_", "-"))
console.log("Criando um array a partir de uma lista")
console.log('Maria,Pedro,Ana,Jose'.split(","))