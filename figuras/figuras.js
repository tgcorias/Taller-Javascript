// código de consola para el cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log(
    "Los lados del cuadrado miden " 
    + ladoCuadrado + "cm"
);

const perimetroCuadrado = ladoCuadrado*4;
console.log(
    "Perímetro " 
    + perimetroCuadrado + "cm"
);

const areaCuadrado = ladoCuadrado**2;
console.log(
    "Área " 
    + areaCuadrado+ "cm2"
);

console.groupEnd();
// Fin Cuadrados


// Código de consola para el triángulo

console.group("Triángulo");
const lado1= 6;
const lado2= 6;
const base= 4;
const altura= 5.5;

console.log(
"Los lados del cuadrado miden: " 
+ lado1 + "cm, " 
+ lado2 + "cm, " 
+ base + "cm de base y "
+ altura + "cm de altura."
);

const perimetroT = lado1 + lado2 + base;
console.log(
"Perímetro del triángulo: " 
+ perimetroT
);

const areaT = (base*altura)*2;
console.log(
"Área del triángulo: " 
+ areaT
);

console.groupEnd();

// Fin Triángulo

// Código de consola para círculos

console.group("Círculos");

// Radio 
const radio = 4;
// Diametro
const diametro = radio*2;
// Pi
const Pi = Math.PI;
// Circunferencia
const Circunferencia = diametro*2;
// Área
const areaCir = (radio**2) * Pi; 
//Logs
console.log(
    "El radio del cículo es " + radio + "cm"
);
console.log(
    "El diámetro del cículo es " + diametro + "cm"
);
console.log(
    "Circunferencia " + Circunferencia
);
console.log(
    "Área " + areaCir
);

console.groupEnd();

//Fin Círculos