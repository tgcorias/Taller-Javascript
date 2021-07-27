const lista = [
    1,
    2,
    3,
    4,
    4,
    1,
    2,
    2,
    1,
    2,
    3,
    4,
    4,
    1,
    2,
    2
];
 const listaCount = {};

 lista.map(
     function(elemento){
         if (listaCount[elemento]) {
            listaCount[elemento] += 1;
         } else{
            listaCount[elemento] = 1;
         }
     }
 );

 const listaArray = Object.entries(listaCount).sort(
     function(valorAcumulado, nuevoElemento){
        return valorAcumulado[1] - nuevoElemento[1];
     }
 );

 const moda = listaArray[listaArray.length - 1];