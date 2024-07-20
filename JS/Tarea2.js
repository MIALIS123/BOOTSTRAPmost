console.log("Solucitud de información")

function enviarSolicitud(event) {
    event.preventDefault();

    const name = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;
    const copia = document.getElementById("copia").value;
    const sipi = document.getElementById("sipi");

    alert (` Se enviará una copia de la solicitud a su correo electrónico ${sipi}`)

    resultado.textContent = `Su nombre ${name} su email ${email} su asunto ${asunto} su mensaje ${mensaje} y si quiere copia ${copia}` 
}

function calcularIMC(event) {
    event.preventDefault();

    const peso = document.getElementById("peso");
    const altura = document.getElementById("altura");
    
     let calcularIMC = parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value))
    resultado.textContent = `El resultado es ${peso}`
}