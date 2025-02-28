
//Listas
let nombres = [];
let numerosSorteados=[]
let indicesBloqueados = [];


let nombreAmigo = document.getElementById('amigo')
let listaAmigos = document.getElementById('listaAmigos')
let amigoSorteado = document.getElementById('resultado')

//Botones
let botonSorteo = document.getElementById('btn-sorteo')
let botonAñadir = document.querySelector('button')
let botonSiguiente = document.getElementById('btn-siguiente')
let botonSoyYo = document.getElementById('btn-resorteo')

let valor = nombreAmigo.value
let amigoSecreto = 0

//Descartivar botones iniciales
botonSoyYo.disabled = true
botonSiguiente.disabled = true
botonSorteo.disabled = false

botonAñadir.addEventListener('click', agregarAmigo)

function agregarAmigo() {
    let valor = nombreAmigo.value
    if (valor=="") {
        alert('Ingresa un nombre válido')
    } else {
        nombres.push(valor)
        nombreAmigo.value = "";
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

function sortearAmigo(){
    amigoSorteado.innerText = ""
    indicesBloqueados = [];

    if (nombres.length < 2){
        alert("Debes ingresar al menos dos amigos para sorterar")
    } else {
        amigoSecreto = Math.floor(Math.random() * nombres.length)
        generarAmigoSecreto()
        
    }
    botonSoyYo.disabled = false
    botonSiguiente.disabled = false
    verificarBotones()
}

function siguiente(){
    
    amigoSorteado.innerText=""
    indicesBloqueados = [];
    botonSorteo.disabled = false
    botonSoyYo.disabled = true
    botonSiguiente.disabled = true
    verificarBotones()
}

function soyYo(){
    amigoSorteado.innerText = ""
    botonSoyYo.disabled = true
    // Remover el último índice y añadirlo a bloqueados
    let persona = numerosSorteados.pop();
    indicesBloqueados.push(persona);
    
    // Generar nuevo índice que no esté en numerosSorteados ni en bloqueados
    do {
        amigoSecreto = Math.floor(Math.random() * nombres.length);
    } while (numerosSorteados.includes(amigoSecreto) || indicesBloqueados.includes(amigoSecreto));
    
    generarAmigoSecreto()
    verificarBotones()
}

function generarAmigoSecreto(){

    while (numerosSorteados.includes(amigoSecreto)) {
        amigoSecreto = Math.floor(Math.random() * nombres.length)
        if (numerosSorteados.length == nombres.length){
            break;
        }
    }
    numerosSorteados.push(amigoSecreto)
    console.log(numerosSorteados)
    console.log(amigoSecreto)
    let agregaResultado = document.createElement('p')
    if (numerosSorteados.length==nombres.length+1){
        agregaResultado.textContent = `Ya se han sorteado todos los amigos, éxito`
        botonSorteo.disabled = true
        botonAñadir.disabled = true
        botonSiguiente.disabled = true
    } else{
        agregaResultado.textContent = `Tu amigo secreto es ${nombres[amigoSecreto]}`
        botonSorteo.disabled = true
    }
    amigoSorteado.appendChild(agregaResultado)
    return
}

function verificarBotones(){
    if (botonSorteo.disabled == true){
        botonSorteo.className ='button-draw-disable'
    } else {
        botonSorteo.className ='button-draw'
    }
    if (botonSiguiente.disabled == true){
        botonSiguiente.className ='button-draw-disable'
    }else {
        botonSiguiente.className ='button-draw'
    }
    if (botonSoyYo.disabled == true){
        botonSoyYo.className ='button-draw-disable'
    }else {
        botonSoyYo.className ='button-draw'
    }
}

verificarBotones()