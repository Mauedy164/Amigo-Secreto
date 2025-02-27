let nombres = [];
let botonAñadir = document.querySelector('button')
let nombreAmigo = document.getElementById('amigo')
let listaAmigos = document.getElementById('listaAmigos')
let valor = nombreAmigo.value
console.log(valor)

botonAñadir.addEventListener('click', agregarAmigo)

function agregarAmigo() {
    let valor = nombreAmigo.value
    if (valor=="") {
        alert('Ingresa un nombre válido')
    } else {
        console.log(valor)
        nombres.push(valor)
        nombreAmigo.value = "";
        console.log(nombres)
        mostrarAmigos()
    }
}

function mostrarAmigos(){
    listaAmigos.innerText = ""
    for (let i = 0; i < nombres.length; i++) {
        let agregaLi = document.createElement('li');
        agregaLi.textContent= nombres[i];
        listaAmigos.appendChild(agregaLi);
    }
}

