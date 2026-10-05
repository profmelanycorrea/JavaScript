


// Array: 

/* Estructura de datos: Nos permiten almacenar varios valores en una sola variable (numerico, cadena de texto o booleano)
Que sucede si queremos poner varios datos dentro de la misma variable? 
Los arrays son una lista ordenada de elementos(datos) que permite valores duplicados
*/

// Declaración

let myArray = [] //se suele usar esta forma
let myArray2 = new Array() // de esta forma reserva la cantidad de casillas numeradas 

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)


myArray = [1, 2, 3, 4]
console.log(myArray)


myArray = ["Lorem", "Hola", "mundo", 16, true]
console.log(myArray)


myArray2 = new Array(3)
myArray2[2] = "Hola"
myArray2[0] = "queso"
myArray2[1] = "papafritas"
myArray2[3] = "mundo"

console.log(myArray2)

myArray = []
myArray[2] = "Hola"
myArray[0] = "mundo"
myArray[1] = "queso"

console.log(myArray)

// METODOS COMUNES

myArray = []

// push y pop. sigue orden creciente 

myArray.push("hola")
myArray.push("mundo")
myArray.push("papafritas")
myArray.push(67)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último elemento del array y lo devuelve(lo guarda internamente) 
myArray.pop()

console.log(myArray)

// shift y unshift. elimina el primer elemento del array y lo devuelve como pop. unshift: pasa un listado de elementos al principio del array.

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("mundo", "papafritas")
console.log(myArray)

// length: propiedad que dentro de my array tiene un valor.

console.log(myArray.length)

// clear: sirve para eliminar el contenido ya guardado dentro de mi array.


myArray = [] // se suele usar este modo.
myArray.length = 0 // alternativa
console.log(myArray)

// slice: estructura de conjunto de datos, devuelve una copia superficial de una porcion. 

myArray = ["hola", "Mundo", "ñoquis", 67, true]

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice: elimina los elementos  

myArray.splice(1, 3)
console.log(myArray)

myArray = ["lorem", "lorem1", "lorem2", 67, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)