const divContenedor = document.getElementById('contenedor');

function saludar(event) {
    event.stopPropagation();
    alert("Saludirilijillos");
}

divContenedor.addEventListener("click", () => {
    alert("soy el div");
})