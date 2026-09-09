


// Tipos de datos primitivos

// Cadenas de texto (string)
let myName = "Melany"
let alias = 'Mel'
let email = `mcorrea@cejs.com`

// Números (number)
let age = 37 // Entero
let height = 1.77 // Decimal

// Booleanos (boolean)
let isTeacher = true
let isStudent = false

// Undefined. valor sin definir, podrìa ser definido màs adelante
let undefinedValue
console.log(undefinedValue)

// Null, variable vacia intencionalmente
let nullValue = null

// Symbol. representa valores ùnicos que identifican propiedades

let mySymbol = Symbol("mysymbol")

// BigInt. Numeros inmensos (mas de 64bits)

let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n

// Mostramos los tipos de datos. 
console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isTeacher)
console.log(typeof isStudent)

console.log(typeof undefinedValue)

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)