function ConvertidorData(){
    let diesUsuari = parseInt(prompt("Indica el numero de dias a convertir"));

    let years = diesUsuari%360;
    let months = diesUsuari%360;
    
}

//Mejorar, añadir comprobacion de si es Celsiu o Faren lo que introduce el usuario en el primer prompt
//Si no es ninguno de los dos que salte error
function temperatura(){
    let decision = prompt("A que quieres convertir: a Celsius,c, o Fahrenheit,f");
    let temp = parseInt(prompt("Indica la temperatura: "));
    let faren = temp *(9.0/5.0) +32;
    let celsiu = (temp-32)/(9.0/5.0);
/*
    if (decision=="C") {
        console.log(faren)
    } else {
        console.log(celsiu)
    }
*/

    if (decision=="c" || decision=="f") {
        if (decision=="c") {
            console.log(celsiu);
        } else {
            console.log(faren)
        }
        
    } else {
        do {
            prompt("Introduce una elecion correcte")
        } while (decision!=="c" || decision!=="f");
        
    }
    

}

function hexa(){
    let num = parseInt(prompt("Introdueix un número:"));
    let hexadecimal = num % 16;
    let octal = num % 8;
    let binari = num % 2;


    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }

    while (num > 0) {
        num%16
        
        
    }

}