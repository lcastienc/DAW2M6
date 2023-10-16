//Función act1
function clickme() {
    alert("Hola, como estás?")
}

//Función act2
function dontTouchMe() {
    alert("¿Haz tocado el boton?")
}

//Función act3
function muestraContenido() {
    let contenido = document.getElementById("contenido").value;
    alert(contenido);
}

//Act4
function tablaMultiplicar() {
    let numero = document.getElementById("multiplica").value;
    let maxNum = 10;
    if (isNaN(numero)) {
        alert("Ingresa un numero no texto");
    } else {
        console.log(`La tabla de multiplicar de ${numero} es:`);
        for (let index = 0; index <= maxNum; index++) {
            console.log(`${numero} x ${index} = ${index * numero} `);

        }
    }
}