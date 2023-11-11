function encerta() {
    let valorRandom = Math.floor(Math.random() * 100) + 1;
    console.log(valorRandom)
    let intentos = 0;

    while (true) {
        let respostaUsuario = parseInt(prompt("Introduce tu respuesta:"));

        if (isNaN(respostaUsuario)) {
            console.log("Valor introducido no es valido. Introduce un valor valido:")
            continue;
        }
        if (respostaUsuario===0) {
            console.log("Game Over");
            break;
        }
        intentos++;

        if (respostaUsuario === valorRandom) {
            console.log(`Has ganado, el numero a acertar era ${valorRandom}`);
            console.log(`Has acertado el numero en ${intentos} intentos`)
            break;
        }else if (respostaUsuario<valorRandom) {
            console.log("El numero a acertar es Mayor");
        } else {
            console.log("El numeor a acertar es Menor");
        }
    }
}
let fechas = "17/02/2000";
