function coste(){
    //let tiempo = parseInt(prompt("Intrduce el tiempo en formato hh:mm:ss"));
    let hora = parseInt(prompt("Introduce las horas")) * 3600;
    let minutos = parseInt(prompt("Introduce los minutos")) * 60;
    let segundos = parseInt(prompt("introduce los segundos"));
    let totalSegundos = hora+minutos+segundos;

    let precioBaseEuro = Math.floor((10 + ((5/60) * totalSegundos))/100);
    let precioBaseCentimos = Math.floor((10 + ((5/60) * totalSegundos))%100);
    
    console.log(`El coste de llamada por ${hora} horas, ${minutos} minutos y ${segundos} segundos son ${precioBaseEuro}€ y ${precioBaseCentimos} centimos`);
}

function ColorRGB(){
    let r = parseInt(prompt("Introduce un numero")).toString(16);
    let g = parseInt(prompt("Introduce un numero")).toString(16);
    let b = parseInt(prompt("Introduce un numero")).toString(16);
    let aux;
    //console.log(R)
    if (r<0) {
        aux = "0"+r
    }
    let color = `#${r}${g}${b}`
    

    console.log(color)
}