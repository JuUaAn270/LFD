const formulario = document.querySelector("#formulario");
function ocultarModal() {
    const modalClose = document.querySelector('#exampleModal');
    const modal = bootstrap.Modal.getInstance(modalClose);
    modal.hide();
    
}
function añadirUsuario(nombre) {
    const usuario = nombre
    localStorage.setItem("usuario", usuario);  
}
function cerrarSesion(){
    localStorage.removeItem("usuario");
            location.reload();
}
function mostrarUsuario() {
    const nombreUsuario = localStorage.getItem("usuario");
    const identifi = document.querySelector("#identifi");
    identifi.innerHTML ='<div class="btn-group px-5" role="group"><button id="btnGroupDrop1" type="button" class="btn btn-info btn-outline-dark dropdown-toggle bg-warning" data-bs-toggle="dropdown" aria-expanded="false"><a class="navbar-brand text-dark px-3 mx-auto">' + nombreUsuario + '</a> </button> <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1"> <li><button class="dropdown-item btn btn-danger" onclick="cerrarSesion()">Cerrar Sesión</button></li> </ul></div>';
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    añadirUsuario(nombre);
    mostrarUsuario();
    ocultarModal();
});