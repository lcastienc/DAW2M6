//Act1
function primerMiercoles(){
    let yearOne= parseInt(prompt("Introduce el primer año entre 2000 y2050:"));
    let yearSecond = parseInt(prompt("Introduce el segundo año entre 2000 y 2050:"));

    //Validacion de que las fechas sean correctas
    if (isNaN(yearOne)|| isNaN(yearSecond||yearOne<2000 || yearOne>2050 ||yearSecond<2000||yearSecond>2050)) {
        document.write("Los años introducidos son invalidos, introduce unos validos");
        return;
    }
    //for para recorrer el lapso de los años introducidos
    for (let index = Math.min(yearOne, yearSecond); index <=Math.max(yearOne,yearSecond); index++) {
        const primerMiercoles = new Date(`${index}-01-01`);
        if (primerMiercoles.getDay()===3) {
            document.write(`El primer año entre ${yearOne} y ${yearSecond} que comienza por miercoles es ${primerMiercoles.getFullYear()}`);
            return;
        }
    }
    document.write(`Entre el año ${yearOne} y el año ${yearSecond} no existe ningun año que inicie por miercoles`);

}

//Act2
function cincoVocales(){
    let palabra = prompt("Introduce una palabra:");
    //Array de todas las posible vocales
    let vocals = [/[aáàä]/gi,/[eèéë]/gi,/[iíìï]/gi,/[oóòö]/gi,/[uùúü]/gi];
    //Penta es ture, damos por hecho que tiene las 5 vocales
    let penta = true;
    //Recorremos la palabra, en caso de no tener las 5 vocales penta es false y termina
    for (let index = 0; index < vocals.length; index++) {
        if (palabra.match(vocals[index])) {
            penta=false;
            break;
        }
    }
    
    if (penta) {
        console.log("Contiene las 5 vocales");
        //document.write(`La palabra ${palabra} contiene las cinco vocales`);
    } else {
        console.log("No las contiene");
        //document.write(`La palabra ${palabra} no contiene las cinco vocales`)
    }
}
