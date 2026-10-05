// Loops o bucles: Estructura de control que repite un conjunto de instrucciones de forma automática hasta que se deja de cumplir una condición
//IMPORTANTE: fijarse de que los bucles sean finitos. que en algùn momento la condiciòn de FALSE.

// for (inicialización; condición; incremento)
// Se ejecuta siempre que la condicion sea TRUE, y no FALSE 
for (let i = 0; i < 5; i++) {// inicia en 0, se ejecuta 5 veces, aumenta la repeticion en 1 cada vez 
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) { //imprime la lista de numeros, incrementando hasta el elemento maximo 
    console.log(`Elemento: ${numbers[i]}`)
}


// while

let i = 0 // Inicialización de la variable contador
while (i < 5) {  //Condición: Mientras la variable contador sea menor de 5
    console.log(`Hola ${i}`)
    i++  // Incrementamos el valor de i
}


// do while: primero se ejecuta en consola, luego se evalua la condicion.

i = 6 
do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5)


// for of: Define valores que sean iterables. Imprime los valores almacenados en distintas estructuras de datos.

const myArray = [1, 2, 3, 4]

const mySet = new Set(["Melany", "Correa", "Mel", 28, true, "mcorrea@cejs.com"])

const myMap = new Map([
    ["name", "Melany"],
    ["email", "mcorrea@cejs.com"],
    ["age", 28]
])

const myString = "¡Hola mundo!" // se comporta como lista de caracteres, no como texto de linea 

for (let value of myArray) {
    console.log(value)
}

for (let value of mySet) {
    console.log(value)
}

for (let value of myMap) {
    console.log(value)
}

for (let value of myString) {
    console.log(value)
}



// break y continue

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue // continua la ejecuciòn, mas alla de la condicion(que no cuente el 5)
    } else if (i == 7) {
        break // para el bucle despues de leer el 7 
    }
    console.log(`Hola ${i}`)
}