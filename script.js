const auto = [];
const agregar = document.querySelector('#agregar');
const agregados = document.querySelector('#mostrar');
const modelos = document.querySelector('#modelo');
const EliPrimero = document.querySelector('#eliPrimero');
const EliUltimo = document.querySelector('#eliUltimo');

function listado() {
    agregados.innerHTML = "";
    for (element of auto) {
        agregados.innerHTML += element + "<br>";
    }
};

agregar.addEventListener('click', function (e) {
    auto.push(modelos.value);
    auto.value = "";
    listado();
});

EliPrimero.addEventListener('click', function (e) {
    auto.shift();
    listado();
});

EliUltimo.addEventListener('click', function(e) {
    auto.pop();
    listado();
});
