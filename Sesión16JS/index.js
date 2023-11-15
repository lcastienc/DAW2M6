function fecha() {
    let hoy = new Date();
    //Act1 Avui es dd del mm del aaaa
    console.log(`Avui és ${hoy.getDate()} del ${hoy.getMonth() + 1} del ${hoy.getFullYear()}`);
    //Act2 Han passat n setmanas de l'any
    let primerDiaDelAny = new Date(hoy.getFullYear(), 0, 1); // 0 representa enero (enero es el mes 0)
    let diferenciaEnTiempo = hoy - primerDiaDelAny;
    let diferenciaEnDias = diferenciaEnTiempo / (1000 * 3600 * 24); // Milisegundos en un día
    let setmanes = Math.floor(diferenciaEnDias / 7);
    console.log(`Han passat ${setmanes} setmanas de l'any`);
    //Act3 El % de dias transcorreguts del any en nn,nn% 82,09%
    let tres = ((diferenciaEnDias / 365) * 100).toFixed(2)
    console.log(`El % de dies transcorreguts es ${tres}`)
    //Act4 Queden un nn,nn% de dies a l'any 17,92%
    let cuantosDiasQuedan = (100 - tres).toFixed(2)
    console.log(`Queden un ${cuantosDiasQuedan}% de dies a l'any`)
    //Act5 Ara són les hh:mm:ss 16:19:46=hora actual
    console.log(`Ara són les ${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()} `)
    //Act6 El % del dia que ha passat és en nn,nn%  68,05%
    let porcentajeDiaTranscurrido = ((hoy.getHours() * 3600 + hoy.getMinutes() * 60 + hoy.getSeconds()) / 86400 * 100).toFixed(2);
    console.log(`El % del dia que ha passat és ${porcentajeDiaTranscurrido}%`);
    //Act7 Queda un % de nn,nn% del dia 31,95%
    let porcentajeDiaRestante = (100 - porcentajeDiaTranscurrido).toFixed(2);
    console.log(`Queda un ${porcentajeDiaRestante}% del dia`);
}

//Act2
function validarCodigo() {
    let code = prompt("Introduce un código de 8 o 13 dígitos:");
    if (code === null) {
        // El usuario presionó Cancelar o cerró el cuadro de diálogo
        return;
    }
    code = code.trim(); // Eliminamos espacios al principio y al final

    if (code.length < 8 || code.length > 13) {
        alert("Longitud de código inválida.");
    } else {
        // La longitud del código está entre 8 y 13, agregamos ceros a la izquierda
        code = addLeftZeroPadding(code, 13);
        alert("Código corregido: " + code);

        let resultado = checkDigitControl(code);
        alert("El código es " + resultado);
    }
}

function addLeftZeroPadding(code, longitudDeseada) {
    while (code.length < longitudDeseada) {
        code = "0" + code;
    }
    return code;
}

function checkDigitControl(codi) {
    if (codi.length === 13) {
        let pesos = [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1];
        let suma = 0;

        for (let i = 0; i < codi.length - 1; i++) {
            suma += parseInt(codi[i]) * pesos[i];
        }

        let residu = suma % 10;
        let digitControlCalculat = (residu === 0) ? 0 : 10 - residu;

        let digitControl = parseInt(codi[codi.length - 1]);

        return (digitControl === digitControlCalculat) ? "Correcto" : "Incorrecto";
    } else {
        return "Longitud de código incorrecta para verificar el dígito de control.";
    }
}

// Llamar a la función para validar el código
validarCodigo();
