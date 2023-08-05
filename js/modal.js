let openModal = document.getElementById('openModal');
let modalCuenta = document.getElementById('modal');
let closeModal = document.getElementById('close');

//abrir modal

openModal.onclick = function(){
    modalCuenta.style.visibility = "visible";
}

// cerrar modal desde boton cerrar

closeModal.onclick = function(){
    modalCuenta.style.visibility = "hidden";
}

// cerrar en ventana , se cierra dando click fuera del modal

/*modalCuenta.onclick = function(){
    modalCuenta.style.visibility = "hidden";
}*/




