//Act2
function pintaTabla() {
  const tamanoCuadro = 20;
  const fila = parseInt(prompt("Inserta numero de columnas de la ultima filas"));

  if (isNaN(fila) || fila <= 0) {
      alert("Ingresa un valor numérico válido y mayor que cero.");
      return;
  }

  const tabla = document.createElement("table");

  for (let i = 1; i <= fila; i++) {
      const filaElement = document.createElement("tr");
      for (let j = 0; j < fila * 2 - 1; j++) {
          const columna = document.createElement("td");
          columna.style.width = tamanoCuadro + "px";
          columna.style.height = tamanoCuadro + "px";
          columna.style.border = "1px solid black"; 
          columna.style.backgroundColor = "black";
          if (j >= fila - i && j <= fila + i - 2) {
              columna.style.backgroundColor = "red";
          }
          filaElement.appendChild(columna);
      }
      tabla.appendChild(filaElement);
  }

  const tablaExistente = document.querySelector("table");
  if (tablaExistente) {
      tablaExistente.remove();
  }
  document.body.appendChild(tabla);
}



function pintaRombo() {
  const tamanoCuadro = 20;
  let numCasellesVermelles = prompt("Inserta el número de casillas rojas en la fila central");

  // Eliminar cualquier no número
  numCasellesVermelles = numCasellesVermelles.replace(/\D/g, '');

  if (!numCasellesVermelles || numCasellesVermelles <= 0) {
      alert("Ingresa un valor numérico válido y mayor que cero.");
      return;
  }

  numCasellesVermelles = parseInt(numCasellesVermelles);

  const fila = numCasellesVermelles * 2 - 1; // Calcula el número total de columnas

  const tabla = document.createElement("table");

  for (let i = 0; i < fila; i++) {
      const filaElement = document.createElement("tr");
      for (let j = 0; j < fila; j++) {
          const columna = document.createElement("td");
          columna.style.width = columna.style.height = tamanoCuadro + "px";
          columna.style.border = "1px solid black";

          const distanciaHorizontal = Math.abs(j - (fila - 1) / 2);
          const distanciaVertical = Math.abs(i - (fila - 1) / 2);

          // Condición para colorear el rombo
          if (distanciaHorizontal + distanciaVertical <= numCasellesVermelles - 1) {
              columna.style.backgroundColor = "red";
          } else {
              columna.style.backgroundColor = "black";
          }

          filaElement.appendChild(columna);
      }
      tabla.appendChild(filaElement);
  }

  alert("Número de columnas en la última fila: " + fila);

  const tablaExistente = document.querySelector("table");
  if (tablaExistente) {
      tablaExistente.remove();
  }
  document.body.appendChild(tabla);
}








