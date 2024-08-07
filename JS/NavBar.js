
//Componente NavBar


mostrar_navbar();
// let contenedor = id
//let plantilla = "Hola Mundo"
//contenedor.innerHTML = contenido

function mostrar_navbar() {
    // let opcion1 = "Inicio"
    // let opcion2 = "Listado de Productos"
    // let opcion3 = "Crear Producto"
    // let opcion4 = "Pagina de Mercadeo"

    //Arreglos ; [{},{],{}]

    // let Menu = {
    //     Nombre: "Inicio",
    //     Ruta: "index.html"
    // }

    let ListadoMenu = [
        {
            Nombre: "Inicio",
            Ruta: "index.html"
        },
        {
            Nombre: "Listado de Productos",
            Ruta: "list-products.html"
        },
        {
            Nombre: "new-product.html",
            Ruta: "index.html"
        },
        {
            Nombre: "Pagina de Mercadeo",
            Ruta: ""
        }
    ]
    
    let contenedor = document.getElementById('v_navbar')
    let plantilla = ` 
     
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="${ListadoMenu[0].Ruta}">${ListadoMenu[0].Nombre} <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${ListadoMenu[1].Ruta}">${ListadoMenu[1].Nombre} </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${ListadoMenu[2].Ruta}">${ListadoMenu[2].Nombre}</a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#">${ListadoMenu[3].Nombre}</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <a class="dropdown-item" href="#">Action 1</a>
                            <a class="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" onclick="CerrarSesion()">Cerrar Sesión</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </form>
            </div>
       
    `

    contenedor.innerHTML = plantilla
}