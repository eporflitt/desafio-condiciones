document.getElementById("ingresar").addEventListener("click", function() {
    // Obtener los valores seleccionados de los 3 select
    let digit1 = document.getElementById("digit1").value;
    let digit2 = document.getElementById("digit2").value;
    let digit3 = document.getElementById("digit3").value;

    // Concatenar los valores para formar el password
    let password = digit1 + digit2 + digit3;

    // Obtener el párrafo para mostrar el resultado
    let resultado = document.getElementById("resultado");

    // Validar el password utilizando if else if y else
    if (password === "911") {
        resultado.textContent = "Password 1 correcto";
        resultado.style.color = "green";
    } else if (password === "714") {
        resultado.textContent = "Password 2 correcto";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "El password es incorrecto";
        resultado.style.color = "red";
    }
});

