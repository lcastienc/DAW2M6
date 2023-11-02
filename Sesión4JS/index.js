//Act1
function Cien(){
    let const1 = Math.abs(prompt("Introduce el primer valor"));
    let const2 = Math.abs(prompt("Introduce el segundo valor"));
    const diferencia1 = Math.abs(const1 - 100);
    const diferencia2 = Math.abs(const2 - 100);
    if (diferencia1 < diferencia2) {
        console.log(`El numero ${const1} está más cerca de 100`); 
    }else if (diferencia2 < diferencia1) {
        console.log(`El numero ${const2} está más cerca de 100`)
    } else {
        console.log(`Los dos numeros son igual de cercanos a 100`)
    }
}

//Act2
function Fecha(){
    let hora = parseInt(prompt("Indica la hora:"));
    let minuto = parseInt(prompt("Indica el minuto"));
    let segundo = parseInt(prompt("Indica el segundo:"));

    let fecha = new Date(1,10,2023,hora,minuto,segundo +1 );

     console.log( fecha)
     console.log(fecha.getSeconds())
}

//Act3
function Validar(){
    let año = parseInt(prompt("Indica el año:"));
    let mes = parseInt(prompt("Introduce el mes:"));
    let dia = parseInt(prompt("Introduce el dia:"));

    let FechaValida = new Date(año,mes-1,dia);

    if (año===FechaValida.getFullYear() && mes === FechaValida.getMonth() +1 && dia===FechaValida.getDate()) {
        console.log("La fecha introducida es valida")
        
    } else {
        console.log("La fecha introducida no es valida")
    }
    
    
}