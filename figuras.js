// Código del cuadrado
// console.group('Cuadrado');
// const ladoCuadrado = 5;

// console.log(`Los lados del cuadrado son: ${ladoCuadrado}cm`);

function perimetroCuadrado(lado) {
    return lado * 4;
}


// console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}cm`);

function areaCuadrado(lado) {
    return lado * lado;
}

// console.log(`El área del cuadrado es: ${areaCuadrado}cm2`);
console.groupEnd()

// Código del triángulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5

console.log(`Los lados del triángulo son: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es: ${perimetroTriangulo}`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es de: ${areaTriangulo}`)



// Interactuar con HTML

function mostrarResultado(resultado) {
    const inputResultado = document.getElementById("mostrarResultado")
    inputResultado.value = resultado;
}

function calcularPerimetroCuadrado() {
    const inputCuadrado = document.getElementById("inputCuadrado");
    const value = inputCuadrado.value;

    mostrarResultado(perimetroCuadrado(value))
}

function calcularAreaCuadrado() {
    const inputCuadrado = document.getElementById("inputCuadrado");
    const value = inputCuadrado.value;

    mostrarResultado(areaCuadrado(value))
}