// Funciones:es un bloque de código con nombre que podés reutilizar cada vez que lo necesites.
//Los parámetros son las "entradas" de la función
//los Argumentos: Los valores concretos que le pasás al llamar la funcion 
//return: devuelve un resultado que podés guardar o usar después.



// Simple: define una tarea especifica. las funciones pueden ser invocadas

function myFunc() {
    console.log("¡Hola, función!")
}

for (let i = 0; i < 5; i++) { // por el bucle for, se invoca a la funcion 5 veces.
    myFunc()
}

// Con parámetros

function myFuncWithParams(name) {
    console.log(`¡Hola, ${name}!`)
}

myFuncWithParams("Melany")
myFuncWithParams("mundo")

// Funciones anónimas: no tienen un nombre definido, pero se tienen que asignar a una variable y a una constante para poder nombrarla

const myFunc2 = function (name) {
    console.log(`¡Hola, ${name}!`)
}

myFunc2("Melany Correa")

// Arrow functions: mas concreto. debemos asignarlas a una variable 

const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)

myFunc3("Melany")
myFunc4("papa frita")


// Parámetros

function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)
sum(5)
sum()

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

// Por defecto

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(undefined, 5)

// Retorno de valores

function mult(a, b) {
    return a * b
}

let result = mult(5, 10)
console.log(result)

// Funciones anidadas

function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función interna")
    }
    intern()
}

extern()
// intern() Error: fuera del scope

// Funciones de orden superior

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "función de orden superior")

// forEach

const myArray = [1, 2, 3, 4]

const mySet = new Set(["Melany", "Correa", "Mel", 28, true, "mcorrea@cejs.com"])

const myMap = new Map([
    ["name", "Melany"],
    ["email", "mcorrea@cejs.com"],
    ["age", 28]
])

const myString = "¡Hola mundo!"

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))