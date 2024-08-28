let textoEntrada = document.getElementById('textoEntrada');
let textoResultado = document.getElementById('textoResultado');


let mensajeCopiado = document.getElementById('mensajeCopiado');

let botonCopiar = document.getElementById('botonCopiar');
let resultadoInformacion = document.getElementById('resultadoInformacion');
let resultadoImagen = document.getElementById('resultadoImagen');


function encriptarTexto() {
  if (validarTexto()) {
      textoResultado.value = textoEntrada.value
                              .replace(/e/g, 'enter')
                              .replace(/i/g, 'imes')
                              .replace(/a/g, 'ai')
                              .replace(/o/g, 'ober')
                              .replace(/u/g, 'ufat');
      modificarDisplay()
      document.querySelector('#textoEntrada').value = '';
  }
}

function validarTexto() {
  let expresionRegular = /^[a-z\s!]*$/;
  if (textoEntrada.value.trim() !== "") { 
    if (!expresionRegular.test(textoEntrada.value)) { 
      mostrarMensaje('¡Debes ingresar letras en minúsculas y sin acentos.!');
      return false;
    }
    return true;
  } else {
    mostrarMensaje('¡Debes ingresar un texto, el campo no puede estar vacio!');
    return false;
  }
}


function copiarTexto() {
if(textoResultado.value !== ""){
  navigator.clipboard.writeText(textoResultado.value)
 mensajeCopiado.style.display = 'block';

  setTimeout(function() {
    mensajeCopiado.style.display = 'none';
  }, 1000);

  document.querySelector('#textoResultado').value = '';
}else{
  mostrarMensaje('¡El campo esta vacio, no hay texto que copiar!');
  
}

}


function desencriptarTexto() {
  if (validarTexto()) {
      textoResultado.value = textoEntrada.value.replace(/enter/g, 'e')
                              .replace(/imes/g, 'i')
                              .replace(/ai/g, 'a')
                              .replace(/ober/g, 'o')
                              .replace(/ufat/g, 'u');
      modificarDisplay()
      document.querySelector('#textoEntrada').value = '';
  }
}

function modificarDisplay() {

  resultadoImagen.style.display = 'none';
  resultadoInformacion.style.display = 'none';
  textoResultado.style.display = 'block';
  botonCopiar.style.display = 'block';
}

function asignarTextoElemento(elementoegc, textoegc){
    let elementoHtml = document.querySelector(elementoegc);
    elementoHtml.innerHTML = textoegc;
    return;
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Encriptador / ONE - Alura Latam ');
    
}


function mostrarMensaje(mensaje) {
  // Obtener el elemento del diálogo
  const dialogo = document.getElementById('dialogo');

  // Establecer el mensaje
  dialogo.textContent = mensaje;

  // Mostrar el cuadro de diálogo
  dialogo.style.display = 'block';

  // Ocultar el cuadro de diálogo después de 3 segundos (puedes ajustar el tiempo)
  setTimeout(() => {
      dialogo.style.display = 'none';
  }, 3000);
}


//llamado a funcion
condicionesIniciales();

