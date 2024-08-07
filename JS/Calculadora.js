console.log("Funcionando Calculadora")
  
// A esta función se le llama global because se puede colocar esta estructura y lo demás se refleja en la pagina.


function calculadora2(event) {
    event.preventDefault();
    const num1 = parseFloat( document.getElementById("num1").value); //En este caso de parseFloat en const se puede colocar aquí mas rápido para dar el resultado que necesitamos en números. 
const num2 = parseFloat (document.getElementById("num2").value);
const operaciones = document.getElementById ("operaciones").value;
const resultado = document.getElementById("resultado");
let calculo;
  switch (operaciones) {
    case "+":
        calculo = num1 + num2
        break;
    case "-":
        calculo = num1 - num2
        break;    
     case "*":
        calculo = num1 * num2
        break;    
     case "/":
         calculo = num1 / num2
         break;    
    default:  // Es para mostrar algo en caso de que no se cumpla nada.
      calculo = `Operación no valida `
        break;
  }
 resultado.textContent = `El valor es : ${calculo}`  // en este caso llamamos a calculo por (17) let.calculo para que muestre el resultado segun la variable.


}






// function sumar(event) {
//     event.preventDefault(); //ESte event puede ser cualquier palabra pero lo que lleva después es para que el mensaje quede en el formulario y no aparezca el signo de pregunta arriba. 
  

//     let sumar = parseFloat(num1.value) + parseFloat(num2.value) //-->parce float es para lograr los números en la calculadora o etc y parceInt en números enteros
//     resultado.textContent = `El resultado es ${sumar}`

// }

// function restar(event) {
//     event.preventDefault(); //ESte event puede ser cualquier palabra pero lo que lleva después es para que el mensaje quede en el formulario y no aparezca el signo de pregunta arriba. 

//     let restar = parseFloat(num1.value) - parseFloat(num2.value) //-->parce float es para lograr los números en la calculadora o etc y parceInt en números enteros
//     resultado.textContent = `El resultado es ${restar}`

// }