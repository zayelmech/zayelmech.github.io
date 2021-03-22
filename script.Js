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
var sectionServicios = document.getElementById("servicios");
var logoLetras = document.getElementById('logoLetras');
var spanMenuIcon = document.getElementById('spanMenuIcon');

function opacarObjetos() {
    let iconoTele = document.getElementById('iconoFlotante');
    let scrolleableSection = document.getElementById('scrolleableSection');
    iconoTele.style.opacity = "0.4";
    let pendiente;
    let scrollActual = scrolleableSection.scrollTop;
    //console.log(scrollActual);
    pendiente = Math.abs(scrollActual - scrollAnterior);
    //console.log(pendiente);
    if (pendiente < 5) {
        //console.warn(pendiente);
        iconoTele.style.opacity = "1";
    }
    scrollAnterior = scrollActual;

    if (scrollActual >= sectionServicios.clientHeight * 2 && scrollActual < sectionServicios.clientHeight * 3) {
        logoLetras.style.color = "#fff";
        spanMenuIcon.style.filter = "invert(100%)";
        console.warn("listo");
    } else {
        spanMenuIcon.style.filter = "invert(0%)";
        logoLetras.style.color = "#393c41";
    }
}