// Numeros e seus tipos

const peso1 = 1.0
const peso2 = 2.0
const peso3 = 4.0
const peso4 = 2.5

console.log(peso1, peso2, peso3, peso4)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(peso3))
console.log(Number.isInteger(peso4))

const av1 = 9.871
const av2 = 6.781
const av3 = 4.782

const media = ((av1*peso1)+(av2*peso2)+(av3*peso3))/(peso1+peso2+peso3)

console.log(media)
console.log(typeof(media))
console.log("Arredondamento: " + media.toFixed(2))
console.log(typeof(media))
console.log("Converter em string: " + media.toString())
console.log(typeof(media))
console.log("Converter em binário: " + media.toString(2))
console.log(typeof(media))
console.log("Converter em Hexa: " + media.toString(16))
console.log(typeof(media))


