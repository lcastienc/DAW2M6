function PotenciaPow() {
    let numero = prompt('Indica un numero:');
    let potencia = prompt('Indica la potencia');

    console.time();
    let respuesta = Math.pow(numero, potencia);
    console.log(`potencia pow: ${respuesta}`)
    console.timeEnd();


}

function PotenciaBucle(){
    let number = prompt('Dame una cifra');
    let expo = prompt('Dame la potencia');
    let result = 1;

    console.time()
    for (let index = 0; index < expo; index++) {
        
        result = result * number;
    }
    console.log(`potencia bucle: ${result}`);
    console.timeEnd()
}

