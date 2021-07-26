// código de consola para el cuadrado
console.group("Cuadrado");

function perimetroCua(lado){
        return lado*4;
} 
function areaCua(lado){
    return lado**2;
}
console.groupEnd();
// Fin Cuadrados


// Código de consola para el triángulo

console.group("Triángulo");

function perimetroT(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaT(altura, base){
    return (base*altura)*2;
}

console.groupEnd();

// Fin Triángulo

// Código de consola para círculos

console.group("Círculos");

//  Diametro

function diametro(radio){
    return radio*2;
}
// Circunferencia
function circunferencia(radio){
    const diametro = diametro(radio);
    return diametro * Math.PI;
}

function areaCir(radio){
    return (radio**2) * Math.PI;
}

console.groupEnd();

//Fin Círculos

// Interacción con HTML
function calcular_perimetrocua(){
    const input = document.getElementById("inputcua");
    const value = input.value;
    const perimetro = perimetroCua(value);
    alert(perimetro);
}
function calcular__areacua(){
    
}