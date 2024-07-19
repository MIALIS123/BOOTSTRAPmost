// Condicionales de Control.

let pato = true;

if (pato = true) {
    alert(" Pato " + pato)
} else {
    alert(" No cumple  ")
}

let edad = 18;

if (edad >= 18) {
    console.warn("Si es mayor de edad" + 18)
} else {
    console.error("No es mayor de edad")
}

const nombre = "Harry"
if (nombre == "Pedro") {
    console.error("respuesta" + nombre)
}

//El siguiente es un if anidado

const nombre2 = "Harry";
if (nombre == "Pedro") {
    console.error("respuesta" + nombre2)

} else if (nombre = "Tobias") {
    console.error("respuesta" + nombre2)

}
else if (nombre = "Hary") {
    console.error("respuesta" + nombre2)
} else {
    console.error("No se cumple")
}


// Lo de abajo es la forma correcta de hacer el if anidado con todos los else que quieras.

//const persona = "David";  > Al final de una variable de este caso condicional siempre lleva (;)

// if (condition) {

// } else if (condition) {

// } else if (condition) {

// }else {

// }

const persona = "David";

if (persona == "david") {
    console.error("respuesta" + persona)
} else if (persona == "David") {

} else if (persona == "David") {

} else {

}

// En el siguiente si ven la serie porque sus respuesta sconcuerdan

let MiPlataforma = "HBO";
let MiPlataforma2 = "amazon";

if (MiPlataforma === "HBO" && MiPlataforma2 === "Netflix" || MiPlataforma2 === "amazon") {
    console.log("Esta noche vemos una serie ")


}
else {
    console.log("Esta noche no vemos  una serie ")

}

//Operador ternario  //SI no se cumple seria el segundo msj "Hola Desconocido"

let Animal = "Tigre";

const saludo = Animal == "Mono" ? "Hola" + Animal : "Hola Desconocido "

console.log(saludo)

// Switch 

const EdadSwitch = 60

switch (EdadSwitch) {

    case 20:
        console.log("Tiene 20 ")
        break;

    case 40:
        console.log("Tiene 40 ")
        break;

    case 60:
        console.log("Tiene 60 ")
        break;

    default:
        console.log("no cumple con ninguna ")
        break;    