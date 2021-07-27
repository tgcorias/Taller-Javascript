
// Helpers

// #Promedio
;
function calcularProm(lista){

    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++){
    sumaLista = sumaLista + lista[i];
   }
    const promedio = sumaLista / lista.length;
    return promedio;
   }
    
// #Par o Impar
function parImpar(numero){
    (numero % 2 ===0) 
}

// # CALCULADORA DE MEDIANAS
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2)

    if (parImpar(lista.length)) {
        const persona1Mitad = lista[mitad];
        const persona2Mitad = lista[mitad - 1];
        const mediana = calcularProm([persona1Mitad, persona2Mitad]);
    }else{
        const personaDeLaMitad = lista[mitad];
        return personaDeLaMitad;
    }
}
//  ----  FIN DE HELPERS ----

const salariosCol = colombia.map(
    function(person){
        return person.salary;
    }
);
const salariosColSort = salariosCol.sort(
    function(a, b){
        return a - b;
}
)
const medianaGeneral = medianaSalarios(salariosColSort);

// Mediana del TOP 10%

const spliceStart = ((salariosColSort.length * (100 - 10))/100);
const spliceCount = salariosColSort.length - spliceStart;
const salariosTOP10 = salariosColSort.splice(spliceStart, spliceCount);

const medianaTop10 = medianaSalarios(salariosTOP10);

console.log({
    medianaGeneral,
    medianaTop10
   
});