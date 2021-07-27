function calcularProm(lista){

     let sumaLista = 0;
     for (let i = 0; i < lista.length; i++){
     sumaLista = sumaLista + lista[i];
    }
     const promedio = sumaLista / lista.length;
     return promedio;
    }

var lista = [
    100,
    200,
    300,
    300,
    100000,
    200000
];
const listaOrdenada = lista.sort(function(a,b){return a -b});
const mitadLista = parseInt(listaOrdenada.length / 2);

function parImpar(numero){
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
let mediana;

if (parImpar(listaOrdenada.length)) {
    
    const elemento1 = listaOrdenada[mitadLista];
    const elemento2 = listaOrdenada[mitadLista - 1];

    const promedio1y2 = calcularProm([elemento1, elemento2]);

    mediana = promedio1y2;
} else{
    mediana = listaOrdenada[mitadLista];
}