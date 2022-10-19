/* window.addEventListener("load", ejecutarOpcion) */

document.getElementById('opciones'.addEventListener('change', ejecutarOpcion))

function ejecutarOpcion() {
    let opcion = document.getElementById('opciones');
    alert('Holaaaa...' + opcion);
}
