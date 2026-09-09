


// Strings (cadenas de texto)

// Concatenación

let myName = "Melany"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud cadena de texto

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[11])

// Métodos comunes

console.log(greeting.toUpperCase()) // Mayúsculas
console.log(greeting.toLowerCase()) // Minúsculas
console.log(greeting.indexOf("Hola")) // Índice
console.log(greeting.indexOf("Mela"))
console.log(greeting.indexOf("papafritas"))
console.log(greeting.includes("Hola")) // Incluye la palabra?. devuelve booleano
console.log(greeting.includes("Mela"))
console.log(greeting.includes("papafritas"))
console.log(greeting.slice(0, 10)) // Sección. recorta la cadena dentro de esos numeros elegidos
console.log(greeting.replace("Mela", "papafritas")) // Reemplaza una palabra por otra.

// Template literals (plantillas literales)

// Strings en varias líneas
let message = `Hola, este
es el
github de
JavaScript`
console.log(message)

// Interpolación de variables
let email = "mcorrea@cejs.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)