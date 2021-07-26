// Código del cuadrado

function perimetroCuadrado(lado) {
  return lado * 4;
}
function areaCuadrado(lado) {
  return lado * lado;
}


// Código del triángulo

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}


// Código del círculo

// Radio
// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}
// PI
const PI = Math.PI;
console.log("PI es: " + PI);
// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}



// interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// Triangulo

function calcularPerimetroTria(){
    const lado1 = document.getElementById("InputLado1");
        const l1value = lado1.value;
    const lado2 = document.getElementById("InputLado2");
        const l2value = lado2.value;
    const base = document.getElementById("InputBase");
        const Bvalue = base.value; 
    const altura = document.getElementById("InputAltura");
        const altValue = altura.value;

    const perimetro = perimetroTriangulo(l1value, l2value, Bvalue);
    alert (perimetro);

}

function calcularAreaTria(){
    const base = document.getElementById("InputBase");
        const Bvalue = base.value; 
    const altura = document.getElementById("InputAltura");
        const altValue = altura.value;
    
    const area = areaTriangulo(Bvalue, altValue);
    alert(area);
}


// Circulo

function calcularPerimetroCir(){
    const radio = document.getElementById("InputCirculo");
        const value = radio.value; 
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCir(){
    const radio = document.getElementById("InputCirculo");
        const value = radio.value; 
    const area = areaCirculo(value);
    alert(area);
}
