let amigos = [];

//array almacena los nombres de amigos
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre");
        return;
    }
// Verfica si el nombre ya existe 
    amigos.push(nombreAmigo);
    actualizarLista();
//Limpia el input y lo enfoca para la entada de nuevo nombre
    inputAmigo.value = "";
    inputAmigo.focus();
}
//Actualiza la lista de amigos en el DOM
function actualizarLista() {
    const listaAmigosUl = document.getElementById("listaAmigos");
    listaAmigosUl.innerHTML = "";
//Limpia la lista antes de agregar los nuevos amigos
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        //Crea un elemento li por amigo y lo agrega a la lista
        listaAmigosUl.appendChild(li);
    });
}
//Sortea un amigo y muestra el resultado
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega nombres primero.");
        return;
    }
//Genera el numero aleatorio para seleccionar un amigo
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
//Muestra el amigo srteado en el DOM
    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;
}
//Espera a que el DOM se cargue para agregar los eventos a los botones
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo);
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
});