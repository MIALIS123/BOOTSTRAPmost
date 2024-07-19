// console.log("Funcionando")

// let mensaje = "Hola Mundo"

// // console.log () --> Es para mostrar
// // alert --> Mostrar 
// //  prompt --> Ingresar

// console.log(mensaje)

//resultado

//DOM --> Document Object Modal.

//Seleccionar el elemento del DOM por el id y cambiar el contenido.
//document.getElementById("resultado").textContent = "Hola Mundo"

//document. get (ID NAME) . Property . value =

//Este cambia el background desde el DOM y id
//document.getElementById("resultado").style.backgroundColor = "blue"

//El ejemplo que sigue es otra version para hacer lo mismo y para poner texto desde JS..

let DivResultado = document.getElementById("resultado")

console.log(DivResultado)

DivResultado.textContent = "Hola Mundo"
DivResultado.style.backgroundColor = "red"

let PárrafoTexto = document.getElementById("texto")
console.log(PárrafoTexto)
PárrafoTexto.textContent = "rosi rosi rosi"
PárrafoTexto.style.backgroundColor = "green"
// debugger  --> Premite observar que hay de malo en la consola.


//1. Este es el ejemplo para extraer el texto que esta en la etiqueta de HTML.
let Titulo = document.getElementById("titulo").Value
// Titulo.textContent = "Holi"
// Titulo.innerHTML = "Gato"
//text content y InnerHTML es lo mismo


console.log(titulo) //-->En este lado se coloca el ID en caso de querer extraer el texto de HTML

//1.En el siguiente ustedes pueden crear elementos 

let NuevoPárrafo = document.createElement("p")
NuevoPárrafo.textContent = ("Hola amiguitos")
DivResultado.appendChild(NuevoPárrafo) //--> En esta parte se extrae el DivResultado del primer ID para añadir el p(el niño) al div (padre)
console.log(NuevoPárrafo)
