//Al cargar el HTML muestra la función
document.addEventListener('DOMContentLoaded', ev => {
    Mostrar_Footer()
})
//Opciones
const Opciones_Footer = [
    { Nombre: "Términos y Condiciones", Ruta: "term.html", Activo: true },
    { Nombre: "Política de Privacidad", Ruta: "privacidad.html", Activo: true },
    { Nombre: "Contacto", Ruta: "contacto.html", Activo: true },
    { Nombre: "Footer", Ruta: "contacto.html", Activo: true }
]

//Función que muestra el footer
function Mostrar_Footer() {
    let Contenedor = document.getElementById('V_Lista_Footer');
    let Plantilla;

    Opciones_Footer.forEach(element => {
        if (element.Activo) {  //Valida si la opción es valida para mostrar al usuario
            
        Plantilla += `
        <li class="list-inline-item">
            <a href="${element.Ruta}" class="text-white">${element.Nombre}</a>
        </li>
        `
        }

    });


    Contenedor.innerHTML = Plantilla
}
//Función para ingresar las Opciones_Footer a mostrar_footer
function Datos_Footer(Opciones_Footer) {

}