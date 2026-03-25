let numero = document.getElementsByClassName("numero");
let pantalla = document.getElementById("resultado");
let operacionSuma = document.getElementById("sumar");
let operacionResta = document.getElementById("restar");
let operacionDivir = document.getElementById("dividir");
let operacionMultiplicar = document.getElementById("multiplicar");
let operacion;
let resultado = document.getElementById("igualar");
let resultadoFinal;
let reinicio = document.getElementById("reiniciar");

for(let contador = 0; contador < numero.length && contador < numero.length; contador++){
        numero[contador].addEventListener("click", mostrarNumeroPantalla);
    }

function mostrarNumeroPantalla(){
    pantalla.textContent = pantalla.textContent + this.textContent
    this.style.color = "white";
}

operacionSuma.addEventListener("click", sumar);
operacionResta.addEventListener("click", restar);
operacionMultiplicar.addEventListener("click", multiplicar);
operacionDivir.addEventListener("click", dividir)
resultado.addEventListener("click", igualar);
reinicio.addEventListener("click", reinicioTotal);


let numeroGuardado = pantalla.textContent


function sumar(){
    numeroGuardado = pantalla.textContent;
    operacion = this.textContent
    pantalla.textContent = "";
}
function restar(){
    numeroGuardado = pantalla.textContent
    operacion = this.textContent
    pantalla.textContent = "";
}
function multiplicar(){
    numeroGuardado = pantalla.textContent
    operacion = this.textContent
    pantalla.textContent = "";
}
function dividir(){
    numeroGuardado = pantalla.textContent
    operacion = this.textContent
    pantalla.textContent = "";
}
function igualar(){
    if(operacion === "+"){
        resultadoFinal = Number(numeroGuardado) + Number(pantalla.textContent);
        pantalla.textContent = resultadoFinal;
    }else if(operacion === "-"){
        resultadoFinal = Number(numeroGuardado) - Number(pantalla.textContent);
        pantalla.textContent = resultadoFinal;
    }else if(operacion === "x"){
        resultadoFinal = Number(numeroGuardado) * Number(pantalla.textContent);
        pantalla.textContent = resultadoFinal;
    }else if(operacion === "/"){
        resultadoFinal = Number(numeroGuardado) / Number(pantalla.textContent);
        pantalla.textContent = resultadoFinal;
    }
}
function reinicioTotal(){
    pantalla.textContent = "";
    operacion = "";
    numeroGuardado = "";
}