let botonJugar = document.getElementById("btnJugar");
botonJugar.addEventListener("click", inciarJuego);
let formulario = document.getElementById('formulario');
formulario.addEventListener("submit", numeroMagico); //agregador de eventos
let numeroAleatorio = 0;
let seccionPadre = document.querySelector("#contenedorPadre");
let contador = 0;

function inciarJuego() {
    console.log(seccionPadre.children);
    console.log(contador);
    while (contador > 0) {
    seccionPadre.removeChild(seccionPadre.children[2]);
    contador--;
    }
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}

function numeroMagico(e) {
    e.preventDefault();
    let valor = document.querySelector('input').value; // almacena el objeto input
    let alerta = document.createElement("div");
    contador++;
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
    formulario.reset();
  }