// recupera el botón
let miboton = document.getElementById("boton-arriba");

// cuando se hace scroll hacía abajo 20px muestrael botón
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    miboton.style.display = "block";
    } else {
    miboton.style.display = "none";
    }
}

//cuando se hace click al botón se va hacía arriba de la página
function arribaFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
