//Continuación Act2 de la Sesión7JS
function ColorRGB(){
    let r = parseInt(prompt("Introduce un numero")).toString(16);
    let g = parseInt(prompt("Introduce un numero")).toString(16);
    let b = parseInt(prompt("Introduce un numero")).toString(16); 
  /*Otra mandera de hacerlo usando el ? para hacer la comprobacion 
  de digitos y en caso de ser 1 añadirle un 0 a la izquierda

    r = (r.length === 1) ? "0" + r : r;
    g = (g.length === 1) ? "0" + g : g;
    b = (b.length === 1) ? "0" + b : b;
*/
    if (r.length === 1 ) {
        r="0"+r;
    }
    if (g.length === 1 ) {
        g="0"+g;
    }
    if (b.length=== 1) {
        b="0"+b;
    }
    let color = `#${r}${g}${b}`
    console.log(color)
}//Act1
function Canvi() {
    let preu = parseFloat(prompt("Introduce el precio del producto:"));
    let pagat = parseFloat(prompt("Introduce la cantidad pagada:"));
  
    let cambio = pagat - preu;
    if (cambio < 0) {
      alert("Pago insuficiente.");
      return;
    }
  
    const billetesMonedas = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    let cambioMin = {};
  
    for (let valor of billetesMonedas) {
      let cantidad = Math.floor(cambio / valor);
      if (cantidad > 0) {
        cambioMin[valor] = cantidad;
        cambio -= cantidad * valor;
      }
    }
  
    let cambioString = `preu = ${preu} pagat = ${pagat}\n`;
  
    for (let valor in cambioMin) {
      if (valor >= 1) {
        cambioString += `${cambioMin[valor]} de ${valor} euro\n`;
      } else {
        cambioString += `${cambioMin[valor]} de ${(valor * 100)} centimos\n`;
      }
    }
  
    console.log(cambioString);
  }
  
  //Act2
  function creartabla() {
    const filas = parseInt(prompt('Ingresar número de filas:'));
    const columnas = parseInt(prompt('Ingresar número de columnas:'));

    //Comprobación de que los valores introducidos sean validos
    if (isNaN(filas) || isNaN(columnas)) {
        alert('Ingresa números válidos para filas y columnas.');
        return;
    }

    //Creacion tabla
    const tabla = document.createElement('table');
    //Estilo a la tabla, de internet
    tabla.style.border = '1px solid black'; 

    //bulce para creacion de filas y columas, es un bucle con otro dentro
    //primero bucle filas
    for (let y = 0; y < filas; y++) {
      //Creacion filas
        const fila = document.createElement('tr');
        //bucle columnas
        for (let x = 0; x < columnas; x++) {
          //Creacion de columnas
            const columna = document.createElement('td');
            //Añadimos informacion en el cuadro
            columna.textContent = `Fila ${y + 1}, Columna ${x + 1}`;
            columna.style.border = '1px solid black';
            //Dentro de fila añadimso columnas
            fila.appendChild(columna);
        }
        //Dentro de tabla añadimos las filas, que filas tiene tambien las columnas dentro
        tabla.appendChild(fila);
    }

    //En caso de existir una tabla la borramos para crear una nueva
    const tablaAnterior = document.querySelector('table');
    if (tablaAnterior) {
        tablaAnterior.remove();
    }

    document.body.appendChild(tabla);
}

  