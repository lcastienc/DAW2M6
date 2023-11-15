//Act1
function archivo(){
    let tipoArchivo = prompt("Por favor, introduce un nombre de archivo:").toLowerCase();

    if (tipoArchivo !== null) {
      let extensionArchivo = tipoArchivo.split(".").pop();
      console.log("La extensión del archivo es: " + extensionArchivo);
      alert(`La extensión del archivo es: ${extensionArchivo}`);
    } else {
      console.log("No has introducido un nombre de archivo.");
    }
}

function iguales() {
    let texto = prompt("Introduce un texto");
    let contenidoA = texto.includes("a")
    let contenidoB = texto.includes("b")

    if (texto !== null) {
        if (contenidoA = contenidoB) {
            console.log("no son iguales")
        }else{
            console.log("si iguales")
            //console.log(contenidoA)
        }
    }else{
        console.log("No has introducido un texto")
    }
}

//Act2
function iguales(){
    let texto = prompt("Introduce un texto");
    let cuantasA = texto.match(/a/g)
    let cuantasB = texto.match(/b/g)    
    let count=0;
    //let contiene = texto.match("/a/b/");
    if (texto.match("a").length === texto.match("b").length) {
        console.log("son iguales")
    }else{
        console.log("no son iguales")
    }
}

let texto = prompt("Introduce un texto");
let countA = (texto.match(/a/g) || []).length; // Cuenta las ocurrencias de "a" en el texto
let countB = (texto.match(/b/g) || []).length; // Cuenta las ocurrencias de "b" en el texto

if (countA === countB) {
    console.log("Tienen el mismo número de 'a' y 'b'.");
} else {
    console.log("No tienen el mismo número de 'a' y 'b'.");
}


//Act3
function longitud(){
    let cad1 = prompt("Introduce una cadena");
    let cad2 = prompt("Introduce otra cadena");

    if (cad1.length == cad2.length) {
      alert("son iguales, tienen la misma longitud");
        console.log("son iguales, tienen la misma longitud");
    } else {
      alert("no son iguales, no tienen la misma longitud");
        console.log("no son iguales, no tienen la misma longitud");
    }
}