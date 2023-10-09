function Cien(){
    let const1 = Math.abs(prompt("Introduce el primer valor"));
    let const2 = Math.abs(prompt("Introduce el segundo valor"));
    if (const1-100>const2-100) {}
    console.log(const2) 
}

function Fecha(){
    let hora = parseInt(prompt("Indica la hora:"));
    let minuto = parseInt(prompt("Indica el minuto"));
    let segundo = parseInt(prompt("Indica el segundo:"));

    let fecha = new Date(1,10,2023,hora,minuto,segundo +1 );

     console.log( fecha)
     console.log(fecha.getSeconds())
}

function Validar(){
    let año = parseInt(prompt("Indica el año:"));
    let mes = parseInt(prompt("Introduce el mes:"));
    let dia = parseInt(prompt("Introduce el dia:"));

    let FechaValida = new Date(año,mes,dia);
    /*
    if (FechaValida.getFullYear>=1970 && FechaValida.getMonth>=0 && FechaValida.getMonth<=11 && FechaValida.getDay>=1 && FechaValida.getDay<=30) {
       
        return console.log("la fecha es valida")
    }else{
        return console.log("la fecha no es valida")
    } 
    */

    if (FechaValida.getMonth == FechaValida.setMonth&& FechaValida.getDay == FechaValida.setDay && FechaValida.getFullYear == FechaValida.setFullYear){
        console.log("la fecha es valida")
    }else{
        console.log("La fecha no es valida")
    }
    
    
}