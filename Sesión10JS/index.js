//Act1
function tablaMultiplicacion() {
    const filas = parseInt(prompt('Ingresar número de filas:'));
    const columnas = parseInt(prompt('Ingresar número de columnas:'));

    if (isNaN(filas) || isNaN(columnas)) {
        alert('Ingresa números válidos para filas y columnas.');
        return;
    }

    const tabla = document.createElement('table');
    tabla.style.border = '1px solid black'; 

    for (let y = 1; y <= filas; y++) {
        const fila = document.createElement('tr');
        for (let x = 1; x <= columnas; x++) {
            const columna = document.createElement('td');
            columna.textContent = `${y * x}`;
            columna.style.border = '1px solid black';
            fila.appendChild(columna);
        }
        tabla.appendChild(fila);
    }

    const tablaAnterior = document.querySelector('table');
    if (tablaAnterior) {
        tablaAnterior.remove();
    }

    document.body.appendChild(tabla);
}

//Act2
function pintaTabla() {
    const fila = parseInt(prompt("Inserta número de filas"));

    if (isNaN(fila) || fila <= 0) {
        alert("Ingresa un valor numérico válido y mayor que cero.");
        return;
    }

    const tabla = document.createElement("table");

    for (let i = 1; i <= fila; i++) {
        const filaElement = document.createElement("tr");
        filaElement.style.width="20px"
        for (let j = 0; j <= fila; j++) {
            const columna = document.createElement("td");
            columna.style.width="20px"
            if (j >= fila - i && j <= i) {
                columna.style.backgroundColor = "red";
            } else {
                columna.style.backgroundColor = "black";
            }
            filaElement.appendChild(columna);
            
        }

        tabla.appendChild(filaElement);
    }

    const tablaExiste = document.querySelector("table");
    if (tablaExiste) {
        tablaExiste.remove();
    }

    document.body.appendChild(tabla);
}