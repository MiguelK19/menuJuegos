let piedra = document.getElementById("piedra");
let papel = document.getElementById("papel");
let tijeras = document.getElementById("tijera");

piedra.addEventListener("click", piedraPapelTijeras);
papel.addEventListener("click", piedraPapelTijeras);
tijeras.addEventListener("click", piedraPapelTijeras);

let contenedorResultado = document.getElementById("contenidoPrincipal");
let contenidoDeIconos = document.getElementById("options");
let menu = document.getElementById("menu");

let nuevoContenedor = document.createElement("div");

nuevoContenedor.style.color = "aliceblue";
nuevoContenedor.style.font = "50px";
nuevoContenedor.style.minHeight = "200px";
nuevoContenedor.style.width = "100%";
nuevoContenedor.style.maxWidth = "600px"
nuevoContenedor.style.background = "rgba(0,0,0,0.7)";
nuevoContenedor.style.border = "5px solid red";
nuevoContenedor.style.fontSize = "30px";
nuevoContenedor.style.textAlign = "center";
nuevoContenedor.style.display = "flex";
nuevoContenedor.style.flexDirection = "column";
nuevoContenedor.style.gap = "10px";
nuevoContenedor.style.marginBottom = "20px";

contenedorResultado.appendChild(nuevoContenedor);

let contenedorIconos = document.createElement("div");
let contenedorResultados = document.createElement("div")

nuevoContenedor.appendChild(contenedorIconos);

contenedorIconos.style.fontSize = "50px";
contenedorIconos.style.minHeight = "150px";
contenedorIconos.style.border = "5px solid red";
contenedorIconos.style.margin = "15px"

nuevoContenedor.appendChild(contenedorResultados);

contenedorResultados.style.display = "flex";
contenedorResultados.style.alignItems = "center";
contenedorResultados.style.justifyContent = "center";
contenedorResultados.style.fontSize = "60px";
contenedorResultados.style.minHeight = "150px";
contenedorResultados.style.border = "5px solid red";
contenedorResultados.style.margin = "15px"


function piedraPapelTijeras(){
    
    let opcionesId = this.id;

    let opcionesIconos = {
        piedra: { nombre: "piedra", icono: "🪨"},
        papel: {nombre: "papel", icono: "📄"},
        tijera: {nombre: "tijera", icono: "✂️"}
    }
            
    let randomIndex = Math.floor(Math.random() * 3);

    let opciones  = ["piedra", "papel", "tijera"];
    let IA;
    IA = opciones[randomIndex];

    contenedorIconos.innerHTML = opcionesIconos[opcionesId].icono + "VS" + opcionesIconos[IA].icono;

    contenedorIconos.style.fontSize = "120px"

    if(opcionesId === IA){
        contenedorIconos.textContent = opcionesIconos[opcionesId].icono + "VS" + opcionesIconos[IA].icono;
        contenedorIconos.style.border = "5px solid white";
        contenedorResultados.style.border = "5px solid white";
        contenedorResultado.style.border = "5px solid white";
        contenidoDeIconos.style.border = "5px solid white";
        menu.style.border = "5px solid white";
        nuevoContenedor.style.border = "5px solid white";
        contenedorResultados.style.color = "white";
        contenedorResultados.textContent = "Haz empatado!";     
    }else if(opcionesId === "piedra" && IA === opciones[2] || opcionesId === "papel" && IA === opciones[0] || opcionesId === "tijera" && IA === opciones[1]){
        contenedorIconos.textContent = opcionesIconos[opcionesId].icono + "VS" + opcionesIconos[IA].icono
        contenedorIconos.style.border = "5px solid green";
        contenedorResultados.style.border = "5px solid green";
        contenidoDeIconos.style.border = "5px solid green";
        menu.style.border = "5px solid green";
        contenedorResultado.style.border = "5px solid green";
        nuevoContenedor.style.border = "5px solid green";
        contenedorResultados.style.color = "green";
        contenedorResultados.textContent = "Haz ganado!";
    }else{
        contenedorIconos.textContent = opcionesIconos[opcionesId].icono + "VS" + opcionesIconos[IA].icono
        contenedorIconos.style.border = "5px solid red";
        contenedorResultados.style.border = "5px solid red";
        contenedorResultado.style.border = "5px solid red";
        contenidoDeIconos.style.border = "5px solid red";
        menu.style.border = "5px solid red";
        nuevoContenedor.style.border = "5px solid red";
        contenedorResultados.style.color = "red";
        contenedorResultados.textContent = "Haz perdido :(";
    }

}