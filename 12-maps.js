



// Map: Es una coleccion de elementos, cada elemento esta formado por un par, dos elementos (una clave y un valor) estos pueden ser de cualquier tipo de dato. 

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialiación

myMap = new Map([
    ["name", "Melany"],
    ["email", "mcorrea@cejs.com"],
    ["age", 28]
])

console.log(myMap)

// METODOS Y PROPIEDADES.

// set: me permite actualizar o agregar  elementos

myMap.set("alias", "Mel")
myMap.set("name", "Melany")

console.log(myMap)

// get: Me permite recuperar el valor de la clave

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has: Me permite comprobar si las claves existen o no. Devuelve booleano 

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete: me permite eliminar un elemento.

myMap.delete("email")

console.log(myMap)

// keys, values y entries

console.log(myMap.keys()) // retorna un listado solo de claves
console.log(myMap.values()) // listado solo de valores 
console.log(myMap.entries()) //nos retorna todo el par de elementos.

// size: indica mediante un numero el tamaño del mapa(cant. de elementos )

console.log(myMap.size)

// clear: limpia el mapa

myMap.clear()

console.log(myMap)