console.log("Funcionando Calculadora")


function sumar(event) {
    event.preventDefault(); //ESte event puede ser cualquier palabra pero lo que lleva después es para que el mensaje quede en el formulario y no aparezca el signo de pregunta arriba. 
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const resultado = document.getElementById("resultado");

    let sumar = parseFloat(num1.value) + parseFloat(num2.value) //-->parce float es para lograr los números en la calculadora o etc y parceInt en números enteros
    resultado.textContent = `El resultado es ${sumar}`

}

function restar(event) {
    event.preventDefault(); //ESte event puede ser cualquier palabra pero lo que lleva después es para que el mensaje quede en el formulario y no aparezca el signo de pregunta arriba. 
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const resultado = document.getElementById("resultado");

    let restar = parseFloat(num1.value) - parseFloat(num2.value) //-->parce float es para lograr los números en la calculadora o etc y parceInt en números enteros
    resultado.textContent = `El resultado es ${restar}`

}

