
function calcularProm(lista){

// METODO 1:
 let sumaLista = 0;
 for (let i = 0; i < lista.length; i++){
 sumaLista = sumaLista + lista[i];
}


// METODO 2:
// const sumaLista = lista.reduce(
//     function(valorAcumulado = 0, nuevoElemento){
//         return valorAcumulado + nuevoElemento;
//     }
// );


// ESTO SE VA A MANTENER EN LOS DOS METODOS
 const promedio = sumaLista / lista.length;
 return promedio;

}

function onClickPromedio(){
    const array = document.getElementById("InputValores");
        const value = array.value;

    const promedio = calcularProm(value);

    let results = document.getElementById("Promedio");
    results = "Promedio: " + promedio;
}

