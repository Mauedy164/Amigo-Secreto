
//Listas
let nombres = [];
let numerosSorteados=[]


let nombreAmigo = document.getElementById('amigo')
let listaAmigos = document.getElementById('listaAmigos')
let amigoSorteado = document.getElementById('resultado')

//Botones
let botonSorteo = document.getElementById('btn-sorteo')
let botonAñadir = document.querySelector('button')
let botonSiguiente = document.getElementById('btn-siguiente')

let valor = nombreAmigo.value
let amigoSecreto = 0


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
    

    if (nombres.length < 2){
        alert("Debes ingresar al menos dos amigos para sorterar")
    } else {
        amigoSecreto = Math.floor(Math.random() * nombres.length)
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
}

function siguiente(){
    amigoSorteado.innerText=""
    botonSorteo.disabled = false
}

function soyYo(){
    //Tome el ultimo valor agregado y lo guarde en una variable
    persona = numerosSorteados.pop();
    console.log(persona);
    
    //Generar otro número aleatorio y si es igual que el anterior hacer un bucle hasta que sea diferente 
}