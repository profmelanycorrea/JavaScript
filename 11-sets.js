



// Set:Es una colección de valores únicos sin elementos duplicados. Los elimina automaticamente

// Declaración

let mySet = new Set() // set vacio 

console.log(mySet)

// Inicialización

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

console.log(mySet)

// METODOS COMUNES

// add y delete 

mySet.add("https://moure.dev") //Añade datos

console.log(mySet)

mySet.delete("https://moure.dev") // elimina datos, tenemos que explicarle que elementos va a borrar. Retorna un boolean.  

console.log(mySet)

console.log(mySet.delete("Brais"))
console.log(mySet.delete(4))

console.log(mySet)

// has: corrobora que exista ese dato dentro de la lista

console.log(mySet.has("Moure"))
console.log(mySet.has("Brais"))

// size: longitud de cadena

console.log(mySet.size)


// No admite duplicados

mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")
console.log(mySet)