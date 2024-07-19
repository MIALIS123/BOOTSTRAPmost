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

//El ejemplo que sigue es otra version para hacer lo mismo.

let DivResultado = document.getElementById("resultado")

console.log (DivResultado)

DivResultado.textContent = "Hola Mundo"
DivResultado.style.backgroundColor = "red"

let PárrafoTexto = document.getElementById("texto")
console.log(PárrafoTexto)
PárrafoTexto.textContent= "rosi rosi rosi"
PárrafoTexto.style.backgroundColor = "green"