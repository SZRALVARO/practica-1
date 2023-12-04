function cambiarColorFondo() {
    var body = document.querySelector('body');
    body.style.backgroundColor = '#1f2124';
}

var textoPrincipal = document.querySelector('.txt');

textoPrincipal.addEventListener('mouseover', function() {
    cambiarFuenteTexto();
});

function cambiarFuenteTexto() {
    textoPrincipal.style.fontFamily = 'Arial, sans-serif';
}

document.addEventListener('DOMContentLoaded', function() {
    cambiarTextoPiePagina();
});

function cambiarTextoPiePagina() {
    var textoPie = document.querySelector('.txtpie');
    textoPie.textContent = '© 2023 Fernando Alonso. Todos los derechos reservados.';
}

