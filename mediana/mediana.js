function calcularProm(lista){

     let sumaLista = 0;
     for (let i = 0; i < lista.length; i++){
     sumaLista = sumaLista + lista[i];
    }
     const promedio = sumaLista / lista.length;
     return promedio;
    }

lista = [
    100,
    200,
    300,
    300,
    100000,
    200000
];

const mitadLista = parseInt(lista.length / 2);

function parImpar(numero){
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
let mediana;

if (parImpar(lista.length)) {
    
    const elemento1 = lista[mitadLista];
    const elemento2 = lista[mitadLista - 1];

    const promedio1y2 = calcularProm([elemento1, elemento2]);

    mediana = promedio1y2;
} else{
    mediana = lista[mitadLista];
}