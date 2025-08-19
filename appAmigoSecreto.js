function textHTML(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
let listaDeAmigos = [];

function limpiarCaja(){
    document.getElementById('amigo').value = ''
}
function actualizarLista(){

}
var nombres = document.getElementById('amigo')
var valorNombre = nombres.value
function aggAmigos(){
    //var valorNombre = nombres.value
    if(valorNombre == ''){ 
        alert('Por favor, inserte un nombre.');
    } else{
        listaDeAmigos.push(valorNombre);
    }
    console.log(listaDeAmigos);
}
console.log(listaDeAmigos)
/*function aggAmigos(nombre){
            listaAmigoss.push(nombre);
            limpiarCaja()
    }
console.log(listaAmigoss)*/

