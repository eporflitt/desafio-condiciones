
document.getElementById("miImagen").addEventListener("click", function() {
    // Verificamos si la imagen ya tiene el borde rojo
    if (this.style.border === "2px solid red") {
        // Si tiene el borde rojo, se lo quitamos
        this.style.border = "none";
    } else {
        // Si no tiene el borde rojo, se lo agregamos
        this.style.border = "2px solid red";
    }
});