// Ejercicio 1
document.addEventListener("DOMContentLoaded", main)


// Ejercicio 2
function main() {
    let parrafos = document.getElementsByTagName("p");
    
    for (let i = 0; i < parrafos.length; i++) {
        let palabras = parrafos[i].textContent.split(/\s+/);
        
        parrafos[i].innerHTML += "<br><strong>Total palabras: " + palabras.length + "</strong>";
    }

//Ejercicio 3
    for (let i = 0; i < parrafos.length; i++) {
        let palabraNulla = parrafos[i].textContent.includes("nulla");
        if (palabraNulla) {
            let enlace = "<a href='http://google.com'>nulla</a>";
            parrafos[i].innerHTML = parrafos[i].innerHTML.replace("nulla", enlace);
        }
    }

//Ejercicio 4
    parrafos = document.getElementsByTagName("h1");
    
    for (let i = 0; i < parrafos.length; i++) {
        let imagen = document.createElement('img');
        imagen.src = "https://lledogrupo.com/wp-content/uploads/2019/01/star-256.png";
        imagen.style.width = '16px';
        imagen.style.marginLeft = '10px';
        parrafos[i].appendChild(imagen);
    }

//Ejercicio 5


let abstract = document.getElementById("abstract");

    let click = false;
    abstract.addEventListener("click", function() {
        if (click) {
            abstract.style.backgroundColor = "lightgreen";
        } else {
            abstract.style.backgroundColor = "lightblue";
        }
            click =!click;
    });

//Ejercicio 6
let tamañoOriginal = 1;
let tamañoActual = tamañoOriginal;
let incremento = 0.2;

document.getElementById('content').addEventListener('click', function() {
    tamañoActual += incremento;
    if (tamañoActual <= tamañoOriginal * 2) {
        this.style.fontSize = tamañoActual + 'em';
    } else {
        tamañoActual = tamañoOriginal;
        this.style.fontSize = tamañoOriginal + 'em';
    }
});

//Ejercicio 8
let d = document.createElement("div");
d.textContent = obtenerHoraActual();
d.style.backgroundColor = "red";
d.style.border = "1px solid black";
d.style.color = "white";
d.style.position = "fixed";
d.style.display = "none";
document.body.appendChild(d);

let p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
    p[i].addEventListener("mouseover", function() {
        d.style.display = "block";
    });
    p[i].addEventListener("mouseout", function() {
        d.style.display = "none";
    });
}
document.addEventListener("mousemove", function(event) {
    let dist = 5;
    let x = event.clientX + dist;
    let y = event.clientY + dist;
    d.style.left = x + "px";
    d.style.top = y + "px";
    d.textContent = obtenerHoraActual();
});

function obtenerHoraActual() {
    let ahora = new Date();
    let hora = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();
    return hora + ":" + minutos + ":" + segundos;
}

}

//Ejercicio 7
function OcultarMostrar() {
    let botonesOculta = document.getElementsByClassName("oculta");

    for (let i = 0; i < botonesOculta.length; i++) {
        let boton = botonesOculta[i];
        let divContiguo = boton.nextElementSibling;

        if (divContiguo.style.display === "none" || divContiguo.style.display === "") {
            divContiguo.style.display = "block";
            boton.textContent = "Oculta";
        } else {
            divContiguo.style.display = "none";
            boton.textContent = "Muestra";
        }
    }
}



    

