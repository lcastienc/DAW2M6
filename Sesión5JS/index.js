//Act1
function ConvertidorData(){
    let diesUsuari = parseInt(prompt("Indica el numero de dias a convertir:"));

    let years = Math.floor(diesUsuari/360);
    let months = Math.floor(diesUsuari%360/30);
    let dias = (diesUsuari%360)%30;

    console.log(`Los ${diesUsuari} dias introducidos convertidos son ${years} años, ${months} meses y ${dias} días`)
    
}

//Act2
function temperatura(){
    let decision = prompt("A que quieres convertir: a Celsius (c) o Fahrenheit (f)").toLowerCase();
    //Permitimos introducir temperaturas con decimales
    let temp = parseFloat(prompt("Indica la temperatura: "));
    let faren = temp *(9.0/5.0) +32;
    let celsiu = (temp-32)/(9.0/5.0);

    if (decision==='c') {
        console.log(`La temperatura convertida a Celsius es: ${celsiu.toFixed(2)} celsius`);
    }else if (decision==='f') {
        console.log(`La temperatura convertida a Fahrenheit es: ${faren.toFixed(2)} fahrenheit`);
    } else {
        console.log("La unida introducida es incorrecta. Tienes que decidir la unidad entre Celsius(c) o Fahrenheit(f).")
    }
}

//Act3
function hexa(){
    let num = parseInt(prompt("Introduce un número en base 10 para convertir:"));
    let numeroIntroducido = num;
    let binari ="";
    console.log(num);
    //Binario
    while (num>0){
        let resto = num %2;
        binari = resto +binari;
        num = Math.floor(num/2);
    }
    console.log(`El numero ${numeroIntroducido} convertido a binario es: ${binari}`);

}