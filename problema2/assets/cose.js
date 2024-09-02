document.getElementById("calcular").addEventListener("click", function() {
    // Obtener los valores de los inputs, asignar 0 si están vacíos
    let sticker1 = parseInt(document.getElementById("sticker1").value) || 0;
    let sticker2 = parseInt(document.getElementById("sticker2").value) || 0;
    let sticker3 = parseInt(document.getElementById("sticker3").value) || 0;

    // Calcular el total de stickers
    let total = sticker1 + sticker2 + sticker3;

    // Mostrar el resultado
    let resultado = document.getElementById("resultado");

    if (total === 0) {
        resultado.textContent = "No has seleccionado ningún sticker.";
    } else if (total <= 10) {
        resultado.textContent = `Llevas ${total} stickers`;
    } else {
        resultado.textContent = "Llevas demasiados stickers";
    }
});