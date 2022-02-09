// Código del cuadrado
// console.group('Cuadrado');
// const ladoCuadrado = 5;

// Funciones del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

// // console.log(`El área del cuadrado es: ${areaCuadrado}cm2`);
// console.groupEnd()

// Código del triángulo
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5

// console.log(`Los lados del triángulo son: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}


// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;




// Interactuar con HTML
const valorMedida = document.getElementById("enterMedida")
const mostrarValorMedida = document.getElementById("mostrarMedida")



function mostrarResultado(resultado) {
    const inputResultado = document.getElementById("mostrarResultado")
    inputResultado.value = resultado;
}

function mostrarMedidaArea(medida) {
    mostrarValorMedida.value = medida;

    if (medida === "cm") {
        mostrarValorMedida.value = "cm²"
    } else {
        mostrarValorMedida.value = "m²"
    }
}

function mostrarMedidaPerimetro(medida) {
    mostrarValorMedida.value = medida;
}



/* Funciones cuadrado */
function calcularAreaCuadrado() {
    const inputCuadrado = document.getElementById("inputCuadrado");
    const value = inputCuadrado.value;
    mostrarResultado(areaCuadrado(value))
    mostrarMedidaArea(valorMedida.value)
}

function calcularPerimetroCuadrado() {
    const inputCuadrado = document.getElementById("inputCuadrado");
    const value = inputCuadrado.value;

    mostrarResultado(perimetroCuadrado(value))
    mostrarMedidaPerimetro(valorMedida.value)
}



/* Funciones triángulo */
function calcularPerimetroTriangulo() {
    const altura = document.getElementById("inputTrianguloAltura")
    const base = document.getElementById("inputTrianguloBase")
    const ladoA = document.getElementById("inputTrianguloLadoA")
    const ladoB = document.getElementById("inputTrianguloLadoB")

    const h = parseInt(altura.valuie);
    const b = parseInt(base.value);
    const lado1 = parseInt(ladoA.value);
    const lado2 = parseInt(ladoB.value)

        
    let perimetro = perimetroTriangulo(lado1, lado2, b)

    function mostrarResultado(resultado) {
        const inputResultado = document.getElementById("mostrarResultadoT")
        inputResultado.value = resultado;
    }
    
    mostrarResultado(perimetro);
}

