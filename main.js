let contador = 0;
let intervalo;
const images = ["/img/castillo.jpg", "/img/callejon.jpg", "/img/ministerio.jpg", "/img/pasillos.webp", "/img/comedor.jpg", "/img/tren.webp", "/img/wands.jpg"]

let backImg = document.getElementById("slider");
backImg.style.backgroundImage = "url(" + images[contador] + ")";




function siguiente() {
    if (contador < images.length - 1) {
        contador++;
    }
    else {
        contador = 0;
    }
    backImg.style.backgroundImage = "url(" + images[contador] + ")";
}

function anterior() {
    if (contador > 0) {
        contador--;
    }
    else {
        contador = images.length - 1;
    }
    backImg.style.backgroundImage = "url(" + images[contador] + ")";
}

let next = document.getElementById("siguiente");
let previous = document.getElementById("anterior");

next.addEventListener("click", siguiente);
previous.addEventListener("click", anterior);



function comenzar() {
    intervalo = setInterval(siguiente,1000);
}
function parar() {
    clearInterval(intervalo);
}




let start = document.getElementById("play");
let stop = document.getElementById("stop");

start.addEventListener("click",comenzar);
stop.addEventListener("click",parar);


