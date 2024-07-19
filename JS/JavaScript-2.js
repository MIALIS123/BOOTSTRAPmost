let países = ["CR", "USA", "PA"]
let frutas = ["manzana","pera","uva"] 
// Tres elementos en un Array
// Se posicionan desde cero, CR es 0 , USA es 1 y PA es 2.
//Siempre hay números positivos. No negativos.
//Para visualizar un país en especifico en este caso, tienes que declarar el numero con llaves cuadradas.
console.log(países[1])
console.log(países[2])

let estudiante ={
    Nombre: "Pedro",
    Edad: 20,
    EstadoCivil: true,
    Materias: ["Progra1", "Base de Datos", "Calculo"]
}

console.log(estudiante)
console.log(estudiante.Nombre)
console.log(estudiante.Materias[2])

//Declarar el siguiente objeto : auto , 4 propiedades : string , int ,bool y array.
//Mostrar el Objeto completo.

const auto = {
    Marca: "Mini Cooper",
    Año: 1999,
    CarrodeCarreras: true,
    Colores: ["Negro", "Vino", "Gris"]

}

let mensaje = "La Marca del auto es "+ auto.Marca + " es del Año"+ auto.Año +" ,un carro de carreras "+ auto.CarrodeCarreras +" y tiene variedad de colores "+ auto.Colores

let mensaje2 = `La Marca del auto es ${auto.Marca}  es del Año ${auto.Año}  ,un carro de carreras  ${auto.CarrodeCarreras}  y tiene variedad de colores  ${auto.Colores}`

console.table(mensaje2)



//3. Operadores Aritméticos.

let suma = 5 + 3 
let resta = 3 - 5 
let multi = 5 * 2
let div = 8 / 2
let mod = 10 % 3

//Comparación


console.log (5 == "5") // Igualdad débil
console.log (5 === "5")   //Igualdad fuerte 
console.log (5 != "5") // Igualdad débil False
console.log (5 !== "5") // Igualdad fuerte  True 
console.log (5 > 3) // True
console.log (5 < 3) // False

//Lógicos. 
// Se basan con los signos && significa y 
console.log(true && false)
// Se basan con los signos || significa o
console.log(true || false)

// Estructuras de Control. con ife

let pato = true 

if (pato = true) {   // si 
    alert("pato"+pato)
} else {   // si no 
    alert("no cumple")
}

let edad = 18

if (edad = 18) {
    alert("Si es mayor de edad"+ 18)
} else {
    alert("No es mayor de edad")
}