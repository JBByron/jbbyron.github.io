//CAMBIAR EL TEXTO DEL TITULO DESDE JAVASCRIP
/*const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡welcom mundo!';*/

// EVENTO CON UN CLICK
/*document.querySelector('img').onclick = function() {
    alert('¡Ouch! ¡Deja de pincharme!');
}*/

// CAMBIAR IMAGENES CON UN CLICK
let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/impresoras3d.jpg') {
      miImage.setAttribute('src','images/impresoras3d2.jpg');
    } else {
      miImage.setAttribute('src', 'images/impresoras3d.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

// MSN sin nesesidad de ngresar el nombre
/*function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es genial,' + miNombre;
}*/

//MSN Obligatorio ingresar nombre antes de iniciar
function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'BIENVENIDO AL UNIVERSO DE LA IMPRESION3D, ' + miNombre;
  }
}



//
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'TEGUSTO LA IMPRESION3D SIGUE DESCUBIENDO CON NOSOTROS,' + nombreAlmacenado;
}

//
miBoton.onclick = function() {
    estableceNombreUsuario();
}