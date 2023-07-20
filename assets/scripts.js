//fecha

var fechaActual = new Date();

var dia = fechaActual.getDate()

var mes = fechaActual.getMonth() + 1;

var year = fechaActual.getFullYear();


var fecha = document.getElementById("fecha");
fecha.innerHTML = `${dia}/ ${mes} / ${year} `;


//hora

function obtenerHora() {

    var horaActual = fechaActual.getHours();
    var minutos = fechaActual.getMinutes();

    if ( horaActual < 10) {
        horaActual = "0" + horaActual;
    } ;
    if ( minutos < 10) {
        minutos = "0" + minutos;
    };
return horaActual + ":" + minutos
}

var horaDeVuelo = document.getElementById("hora");
horaDeVuelo.innerHTML = obtenerHora();

// flyNumber

var numeroAleatorio = Math.floor(Math.random() * 9999) + 1;

var numeroDeVuelo = document.getElementById("flyNumber");
numeroDeVuelo.innerHTML = `${numeroAleatorio}`

// terminal

var numeroAleatorioTerminal = Math.floor(Math.random() * 70) + 1;

var numeroDeTerminal = document.getElementById("terminal");
numeroDeTerminal.innerHTML = `${numeroAleatorioTerminal}`


alert ("Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de embarque. Mántengase atento a los avisos mediante esta plataforma.")

