console.log("Funcionando")

//Crear un formulario
//Nombre y apellido 
//Y al darle click, Mostrar en un div 

function guardar(event) {
    event.preventDefault();
    const Formulario = document.getElementById("Formulario");
    const valor1 = document.getElementById("valor1").value; // Aquí con value obtengo la información que digita el usuario en el formulario
    const valor2 = document.getElementById("valor2").value;
    const valorrespuesta = document.getElementById("valorrespuesta");

    alert (`El valor1 es ${valor1} el valor2 es ${valor2}`)

    // En esta parte sale la respuesta del formulario 
    valorrespuesta.textContent = `El valor1 es ${valor1} el valor2 es ${valor2}`

    debugger
}