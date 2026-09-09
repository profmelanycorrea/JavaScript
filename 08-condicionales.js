


// if, else if, else

// if (si) Se ejecuta si la condicion es verdadera

let age = 20

if (age == 20) {
    console.log("La edad es 20")
}

// else (si no). Se ejecuta correspondiendo la condicion

if (age == 20) {
    console.log("La edad es 20")
} else {
    console.log("La edad no es 20")
}

// else if (si no, si)

if (age == 20) {
    console.log("La edad es 20")
} else if (age < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 20 ni es menor de edad")
}

// Operador ternario

const message = age == 20 ? "La edad es 20" : "La edad no es 20"
console.log(message)

// switch. Alternativa a anidar if-else. Comparo muchas condiciones con UNA sola variable.
// es eficiente y rapido de leer.
// si o si hay que ejecutar el break para que se ejecute bien.

let day = 3
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break //rompe la lectura del bloque, si la condicion se cumple
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default: // forma de tener un "else"
        dayName = "Número de día incorrecto"
}

console.log(dayName)