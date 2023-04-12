let botonJugar = document.getElementById("btnJugar");
botonJugar.addEventListener("click", inciarJuego);
let formulario = document.getElementById('formulario');
formulario.addEventListener("submit", obtenerDato); //agregador de eventos
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let seccionPadre = document.querySelector("#contenedorPadre");

function inciarJuego() {
    console.log(seccionPadre.children);
}

function obtenerDato(e) {
    e.preventDefault();
    let valor = document.querySelector('input').value; // almacena el objeto input
    let alerta = document.createElement("div");
    // let resultado = "";
    console.log(numeroAleatorio);
    if (valor>numeroAleatorio) {
        alerta.innerHTML = `<i class="bi bi-exclamation-circle-fill"></i> El numero ingresado ${valor}, es mayor al numero magico `
        alerta.className += "alert alert-danger my-3";
    }else if(valor<numeroAleatorio){
        alerta.innerHTML = `<i class="bi bi-exclamation-circle-fill"></i> El numero ingresado ${valor}, es menor al numero magico `
        alerta.className += "alert alert-warning my-3";
    }else if (valor == numeroAleatorio) {
        alerta.innerHTML = `<i class="bi bi-check-circle-fill"></i> El numero ingresado ${valor}, es el numero magico!! `
        alerta.className += "alert alert-success my-3";
    }
    seccionPadre.appendChild(alerta);
    // let div = document.createElement("p");
    // div.innerHTML = resultado
    formulario.reset();
  }