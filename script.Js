function ocultarMenu() {

    let menuDesplegable = document.getElementById('menuDesplegable');
    menuDesplegable.style.display = "none";
}
ocultarMenu();

function mostrarMenu() {

    let menuDesplegable = document.getElementById('menuDesplegable');
    menuDesplegable.style.display = "flex";
}
var scrollAnterior = 0;

function opacarObjetos() {
    let iconoTele = document.getElementById('iconoFlotante');
    let scrolleableSection = document.getElementById('scrolleableSection');
    iconoTele.style.opacity = "0.5";
    let pendiente;
    let scrollActual = scrolleableSection.scrollTop;
    //console.log(scrollActual);
    pendiente = Math.abs(scrollActual - scrollAnterior);
    console.log(pendiente);
    if (pendiente < 2) {
        console.warn(pendiente);
        iconoTele.style.opacity = "1";
    }
    scrollAnterior = scrollActual;
}