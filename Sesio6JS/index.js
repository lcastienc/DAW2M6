/**Convertir numero a hexadecimal, octal y binario */
function convert() {
    let number = parseInt(prompt("Introduce un numero:"));
    
    let hex = hexadecimal(number);
    let oct = octal(number);
    let bin = binario(number);

    console.log(`Numero introducido: ${number}`)
    console.log(`Numero convertido a hexadecimal: ${hex}`);
    console.log(`Numero convertido a octal: ${oct}`);
    console.log(`Numero convertido a binario: ${bin}`);

}

function binario(number) {
    //let number = parseInt(prompt("Introduce un numero:"));
    let binary = 0;
    let rest;
    i = 1;
    while (number !== 0) {
        rest = number % 2;
        number = Math.floor(number / 2);
        binary += rest * i;
        i *= 10;
    }
    return binary;
    //console.log(binary);
}


function octal(number) {
    //let number = parseInt(prompt("Introduce un numero:"));
    let octa = 0;
    let rest;
    i = 1;
    while (number !== 0) {
        rest = number % 8;
        number = Math.floor(number / 8);
        octa += rest * i;
        i *= 10;
    }
    //console.log(octa)
    return octa;
}

function hexadecimal(number) {
    //let number = parseInt(prompt("Introduce un numero:"));
    const digitosHexadecimales = {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: 'A',
        11: 'B',
        12: 'C',
        13: 'D',
        14: 'E',
        15: 'F'
    }
    let hexa = "";
    let rest;

    while (number !== 0) {
        rest = number % 16;
        hexa = digitosHexadecimales[rest] + hexa;
        number = Math.floor(number/16);
    }
    return hexa;
    //console.log(hexa)

}

function conversor(num, base){
    let valor="";
    let digitsHexadecimals = "0123456789ABCDEF";

    while (num>0){
        let res = num%base;
        valor = digitsHexadecimals[res]+valor;
        num = Math.floor(num/base);
    } 

    return valor;

}

function convertirBase(){
    let num = parseInt(prompt("introduce un numero"));
    if(num>0){
        console.log(num + " en binario es: " + conversor(num,2));
        console.log(num + " en octal es: " + conversor(num,8));
        console.log(num + " en hexadecimal es: " + conversor(num,16));
    }
    
}