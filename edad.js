const saludo = document.getElementById("saludo");
const edad = document.getElementById("edad");
const nombreElemento = document.getElementById("nombre-usuario");
const anoElemento = document.getElementById("ano-nacimiento");

function pedirDatos() {
    let nombre = prompt("¿Cómo te llamas?");
    
    if (!nombre) {
        alert("Por favor escribe tu nombre");
        pedirDatos();
        return;
    }
    
    let añoTexto = prompt(`Hola ${nombre}, ¿en qué año naciste?`);
    let año = Number(añoTexto);
    
    let añoActual = new Date().getFullYear();
    
    if (isNaN(año) || año > añoActual || año < 1900) {
        alert("Año no válido");
        pedirDatos();
        return;
    }
    
    let edadCalculada = añoActual - año;
    
    mostrarResultado(nombre, año, edadCalculada);
}

function mostrarResultado(nombre, año, edadCalculada) {
    nombreElemento.textContent = nombre;
    anoElemento.textContent = año;
    saludo.textContent = "Hola, " + nombre + ".";
    edad.textContent = "Tienes " + edadCalculada + " años.";
}

function reiniciar() {
    nombreElemento.textContent = "---";
    anoElemento.textContent = "---";
    saludo.textContent = "¡Hola!";
    edad.textContent = "Ingresa tus datos";
    
    setTimeout(pedirDatos, 1000);
}

window.onload = function() {
    setTimeout(pedirDatos, 1000);
};