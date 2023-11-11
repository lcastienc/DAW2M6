//Act1
function contiene() {
    let text = prompt("Introduce un texto");
    let caracter = prompt("Introduce un caracter");
    counter = 0;

    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == caracter) {
            counter++;
        }
    }
    if (counter >= 2 && counter <= 4) {
        console.log("El caracter " + "'" + caracter + "'" + " si se repite de 2 a 4 veces en la cadena")
    } else {
        console.log("El caracter " + "'" + caracter + "'" + " no aparece de 2 a 4 veces en la cadena")
    }
}

//Act2
function borrarLetra() {
    let textoUsuario = prompt("Introduce un texto");
    let posicion = parseInt(prompt("Introduce un numero"));

    if (posicion >= 0 && posicion < textoUsuario.length) {
        let final = textoUsuario.slice(0, posicion) + textoUsuario.slice(posicion + 1);
        console.log(`La palabra resultante de haber eleminado la posición ${posicion} de la palabra ${textoUsuario} es: ${final}`);
    } else {
        console.log("La posición que has introducido no es valida, no se puede borrar");
    }
}

//Act3
function muestraRespuesta() {
    let informacion = prompt("Introduce un texto:")

    //1 Text majuscules
    let mayus = informacion.toUpperCase();
    document.write("La palabra en mayusculas es: ", mayus, "<br>")

    //2 Text minuscules
    let minus = informacion.toLocaleLowerCase();
    document.write("La palabra en minusculas es: ", minus, "<br>")

    //3 Longitud total cadena
    let longitudTotal = informacion.length;
    document.write("La longitud de la palabra es: ", longitudTotal, "<br>");

    //4 Nombre de paraules
    let numeroParaules = informacion.trim().split(/\s+/).length;
    document.write("El numero de palabras introducidas es: ", numeroParaules, "<br>");
    //5 Les vocals que conte
    let queVocalsConte = informacion.match(/[aeiouAEIOU]/g);
    queVocalsConte ? document.write("La palabra contiene las siguientes vocales: " + queVocalsConte.join(','), "<br>") : (document.write("No hay vocales"));

    //6 numero de vocals que conte
    let numeroVocals = informacion.replace(/[^aeiouAEIOU]/g, '').length;
    document.write("La palabra contiene la siguiente cantidad de vocales: ", numeroVocals, "<br>")

    //7 Borrar letra inicial cada vez hasta 0
    let finalInformacion = informacion;
    while (finalInformacion.length > 0) {
        document.write(finalInformacion, "<br>");
        finalInformacion = finalInformacion.slice(1);
    }
}

//Act4
function bonAny(){

    let horaActual = prompt("Introduce una hora en formato hh:mm");
    let [hora, minutos] = horaActual.split(":");
    hora = parseInt(hora);
    minutos = parseInt(minutos);

    if (hora === 0 && minutos === 0) {
        document.write("¡Feliz Año Nuevo!");
    } else {
        let minutosFaltantes = (24 - hora - 1) * 60 + (60 - minutos);
        document.write("Faltan " + minutosFaltantes + " minutos para la medianoche.");
    }
}

// function bonAny() {
//     let horaActual = prompt("Introduce una hora en formato hh:mm");

//     let horaIntroducida = horaActual.split(":");
//     if (horaIntroducida.length !== 2 || isNaN(parseInt(horaIntroducida[]) || isNaN(parseInt(horaIntroducida[1])))) {
//         console.log("La hora introducida no es valida");
//         return;
//     }

//     let [hora, minutos] = horaIntroducida;
//     hora = parseInt(hora);
//     minutos = parseInt(minutos);

//     if ((hora===0 && minutos ===0)) {
//         console.log("¡Feliz Año Nuevo!");
//     }else{
//         if (hora>24 || hora === 24 && minutos>0) {
//             console.log("Lo hora que has introducido es pasada la media noche. Año nuevo ya ha pasado");
//             return;
//         }

//         let tiempoFaltaAñoNuevo = (24 - hora -1) * 60 +(60 -minutos);
//         console.log(`Faltan ${tiempoFaltaAñoNuevo} minutos para media noche `);
//     }

// }