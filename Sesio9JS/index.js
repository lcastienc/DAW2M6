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
