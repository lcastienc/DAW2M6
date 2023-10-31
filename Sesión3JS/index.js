//Act1A
function PotenciaPow() {
    let numero = prompt('Indica un numero:');
    let potencia = prompt('Indica la potencia');

    console.time();
    if (isNaN(numero) || isNaN(potencia)) {
        alert("Introduce valores numericos");
        console.log("Los valores introducidos no son correctos, introduce valores numericos");
    }else{
    let respuesta = Math.pow(numero, potencia);
    console.log(`potencia pow: ${respuesta}`);
    }console.timeEnd();
}

//Act1B
function PotenciaBucle() {
    let number = prompt('Dame una cifra');
    let expo = prompt('Dame la potencia');
    let result = 1;

    console.time()
    if (isNaN(number) || isNaN(expo)) {
        alert("Introduce valores numericos");
        console.log("Los valores introducidos no son correctos, introduce valores numericos");
    } else {
        for (let index = 0; index < expo; index++) {
            result = result * number;
        }
        console.log(`potencia bucle: ${result}`);
    }console.timeEnd()
}

//Act2
function calcular() {
    let number1 = parseInt(prompt('Inserta el primer valor:'));
    let number2 = parseInt(prompt('Inserta el segon valor:'));
    let number3 = parseInt(prompt('Inserta el tercer valor:'));

    let arr = new Array(number1, number2, number3);
    if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
        alert("Introduce numeros no texto");
    } else {
        let mitja = (arr.reduce((a, b) => a + b, 0)) / arr.length;
        let mitjana = mitja;
        //el operador ... nos ayuda ya que pasa los elementos de todo el array a las funciones
        let major = Math.max(...arr);
        let menor = Math.min(...arr);

        console.log(`La Mitja de ${arr} es: ${mitjana}`);
        console.log(`La Mitjana de ${arr} es: ${mitjana}`);
        console.log(`El Major de ${arr} es: ${major} `);
        console.log(`EL Menor de ${arr} es: ${menor}`);
    }
}
