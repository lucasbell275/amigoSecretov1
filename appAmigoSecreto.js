function textHTML(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


let listaDeAmigos = []; 


function limpiarCaja(){
    document.getElementById('amigo').value = '' //Tipica funcion de limpiar la caja
}

/*Esta es la variable que toma el ID del campo de texto, 
pero no puede capturar el valor. Tiene que hacerse en orden*/
let nombres = document.getElementById('amigo')
function aggAmigos(){
     /*Importante aclarar, la variable que captura el valor de los nombres tiene que ir adentro de la funcion,
      para que CADA VEZ que se clickea en el boton, se actualice el valor de la variable y lo capture.
      Si no siempre va a capturar un espacio vacio.*/
    let valorNombre = nombres.value
    if(valorNombre == ''){ //Esto se usa por si no se ingresa ningun resultado y no se agreguen valores vacios.
        alert('Por favor, inserte un nombre.');
    } else{
        listaDeAmigos.push(valorNombre); //Aca cada vez que es correcto el nombre ingresado, se ingresa a la lista previamente declarada 'listaDeAmigos'
    }
    console.log(listaDeAmigos);
}

function actualizarLista(){
    for(let veces = 0, )
}