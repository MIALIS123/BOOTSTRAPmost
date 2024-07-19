//5.  Funciones .

// Existen Funciones Simples.
// Funciones con parámetros
//Funciones Anónimas
//  Return
//Modernas 


//Invocando la Función.

//Invocando la funcion
// Saludar();
// ConsultarProductos();
// InsertarProducto();

// SaludoDinamico(33)
// SaludoEstatico()

let edad = prompt("Ingrese su edad ")
ValidaEdad(edad)

let AquienQuiereSaludar = prompt("Indique a quien va a saludar");
SaludoDinamico(AquienQuiereSaludar)



//Creando 
function Saludar() {

    console.log("Hola a Todos ")
}

function ConsultarProductos() {
    console.log("Consultando productos .....")
}

function InsertarProducto() {
    console.log("Insertar productos .....")

}

function Hola() {
    alert("Hola Mundo")
}

function IniciarSesion() {
    let nombre = "Pepe";
    let pass = 1234;

    if (nombre == "Pepe" && pass == 1234) {

        MensajeExitoso();
    } else {
        MensajeNoExitoso();

    }

}

function SaludoDinamico(variable1) {

    alert("Hola a " + variable1)
}

function SaludoEstatico() {

    alert("Hola a Pepe")
}



function MensajeExitoso() {
    alert("Funcion Exitosa ")
}

function MensajeNoExitoso() {
    alert("No cumple con las condiciones ")
}


function ValidaEdad(Edad) {

    if (Edad >= 18) {
        alert("Eres Mayor de Edad")
    } else {
        alert("Eres Menor de Edad :(")

    }

}
