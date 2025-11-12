const botonSaludar = document.getElementById('contenedor')

botonSaludar.addEventListener("click", () => {
    event.stopPropagation;
    alert("soy el div");
})