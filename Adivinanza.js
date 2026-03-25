let numeroSecreto = Math.floor(Math.random() * 100 + 1);
let contadorIntentos = 1;

function juegoAdivinanza(){

    let numeroUsuario = Number(document.getElementById("adivinarNumero").value);

    let mensaje = document.getElementById("mensaje");
    let mensajeIntentos = document.getElementById("mensajeIntentos");

    if(numeroUsuario == ""){
        mensaje.textContent = "Por favor ingrese un dato valido";
        mensaje.style.color = "red";
        return;
    }
     if(numeroUsuario > 100 || numeroUsuario <= 0){
        mensaje.textContent = "Solo se permiten numeros del 1 al 100";
        mensaje.style.color = "red";
        return;
    }

    if(numeroUsuario != numeroSecreto){
        contadorIntentos++;
    }else{
        mensajeIntentos.textContent = ("Tu numero de intentos fue: " + contadorIntentos);
        mensajeIntentos.style.color = "green";
    }

    if(numeroSecreto > numeroUsuario){
        mensaje.textContent = "El numero secreto es mas alto";
        mensaje.style.color = "yellow";
    }else if(numeroSecreto < numeroUsuario){
        mensaje.textContent = "El numero secreto es mas bajo";
        mensaje.style.color = "yellow";
    }else{
        mensaje.textContent = ("El numero secreto es: " + numeroSecreto + " ¡Felicidades, lo haz encontrado!");
        mensaje.style.color = "green";
        }
        
}

function reiniciarJuego(){
    mensaje.textContent = "";
    mensajeIntentos.textContent = "";
    contadorIntentos = 1;
    numeroSecreto = Math.floor(Math.random() * 100 + 1);
}