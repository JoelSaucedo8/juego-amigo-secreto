// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

//Agrega un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    if (nombreAmigo !== "") {
        listaDeAmigos.push(nombreAmigo);
        actualizarListaHTML(listaDeAmigos, "listaAmigos");
        inputAmigo.value = "";
    } else {
        alert("Por favor, inserte un nombre.");
    }
}

//Recorre la lista de amigos
function recorrerListaAmigos() {
    for (let i = 0; i < listaDeAmigos.length; i++) {
        listaDeAmigos[i] = listaDeAmigos.push(etiqueta);
    }
}

//Muestra la lista de amigos
function mostrarListaDeAmigos() {
    asignarTextoElemento('listaAmigos', `${listaDeAmigos}`);
}

function actualizarListaHTML(amigos, idLista) {
    let listaHTML = document.getElementById(idLista);
    listaHTML.innerHTML = ""; // Limpia la lista antes de actualizar

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaHTML.appendChild(li);
    }
}

//Asigna texto a un elemento
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}

//Sortea un amigo de la lista
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("La lista de amigos está vacía. Agrega al menos un amigo.");
        return;
    }

    let nombreAleatorio = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    asignarTextoElemento("resultado", `<li>${nombreAleatorio}</li>`); // Muestra el nombre sorteado
}