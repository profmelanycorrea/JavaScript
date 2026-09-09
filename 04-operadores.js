



// Operadores. relaciona distintos datos

// Operadores Aritméticos. 

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Módulo
console.log(a ** b) // Exponente

a++ // Incremento. modificamos su valor en +1
console.log(a)

b-- // Decremento. modificamos su valor en -1
console.log(b)


// Operadores de asignacion. 

let myVariable = 2
console.log(myVariable)
myVariable += 2 // Suma con asignación
console.log(myVariable)

myVariable -= 2 // Resta con asignación
myVariable *= 2 // Multiplicación con asignación
myVariable /= 2 // División con asignación
myVariable %= 2 // Módulo con asignación
myVariable **= 2 // Exponente con asignación

// Operadores de comparación

console.log(a > b) // Mayor que. Se ejecuta booleano
console.log(a < b) // Menor que. Se ejecuta booleano
console.log(a >= b) // Mayor o igual que. Se ejecuta booleano
console.log(a <= b) // Menor o igual que. Se ejecuta booleano
console.log(a == b) // Igualdad por valor. Se ejecuta booleano 
console.log(a == 6)
console.log(a == "6")
console.log(a == a)
console.log(a === a) // Igualdad por identidad (por tipo y valor) o igualdad estricta
console.log(a === 6)
console.log(a === "6")
console.log(a != 6) // Desigualdad por valor
console.log(a !== "6") // Desigualdad por identidad (por tipo y valor) o desigualdad estricta
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)

/*
Truthy values (valores verdaderos)

- Todos los numeros positivos y negativos menos el cero
- Todas las cadenas de texto menos las vacías
- El boolean true
*/

/*
Falsy values (valores falsos)

- 0
-  0n
- null
- undefined
- NaN (Not a Number)
- El boolean false
- Cadenas de texto vacías 
*/

// Operadores lógicos

// and (&&) si un dato es falso, ya es false
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||) si una expresion es verdadera, ya da true
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)

console.log(5 > 10 && 15 > 20 || 30 < 40)

// not (!) , me sirve para negar los valores ya establecidos.
console.log(!true)
console.log(!false)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios. Permiten escribir condiciones
// si la condicion se cumple, se imprime una opciòn, sino la imprime la otra.

const isRaining = false
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")