



// Set:Es una colección de valores únicos sin elementos duplicados. Los elimina automaticamente

// Declaración

let mySet = new Set() // set vacio 

console.log(mySet)

// Inicialización

mySet = new Set(["Melany", "Correa", 28, true, "mcorrea@cejs.com"])

console.log(mySet)

// METODOS COMUNES

// add y delete 

mySet.add("https://cejs.com") //Añade datos

console.log(mySet)

mySet.delete("https://cejs.com") // elimina datos, tenemos que explicarle que elementos va a borrar. Retorna un boolean.  

console.log(mySet)

console.log(mySet.delete("Melany"))
console.log(mySet.delete(4))

console.log(mySet)

// has: corrobora que exista ese dato dentro de la lista

console.log(mySet.has("Melany "))
console.log(mySet.has("Correa"))

// size: longitud de cadena

console.log(mySet.size)


// No admite duplicados

mySet.add("mcorrea@cejs.com")
mySet.add("mcorrea@cejs.com")
mySet.add("mcorrea@cejs.com")
mySet.add("mcorrea@cejs.com")
console.log(mySet)
