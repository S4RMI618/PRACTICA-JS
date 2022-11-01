/**
 * Codigo JavasCript para agregar funcionalidades a la página
 */

var matriz = [
   [0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0],
];

document.getElementById('opciones').addEventListener('change', ejecutarOpcion);

/**
 * Ejecuta una acción segun la opción seleccionada
 */
function ejecutarOpcion() {
   let opcion = document.getElementById('opciones').value;

   switch (opcion) {
      case "1":
         generarMatriz();
         mostrarMatriz('i');
         break;
      case "2":
         mostrarMatriz('d');
         break;
      case "3":
         limpiarMatrices();
         mostrarDiagonalP('d');
         break;
      case "4":
         limpiarMatrices()
         mostrarDiagonalI('i');
         break;
      case "5":
         limpiarMatrices()
         mostrarSuperiorD('d');
         break;
      case "6":
         limpiarMatrices()
         mostrarSuperiorI('d');
         break;
      case "7":
         limpiarMatrices()
         mostrarInferiorI('d')
         break;
      case "8":
         limpiarMatrices()
         mostrarInferiorD('d')
         break;

      default:
         break;
   }

}

/**
 * Genera numeros aleatorios para la matriz
 */
function generarMatriz() {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = 0; c < matriz.length; c++) {
         matriz[f][c] = generarNumero(10, 100);
      }
   }
}

/**
 * 
 * @param {char} l : indica cual grilla mostrar
 */
function mostrarMatriz(l) {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = 0; c < matriz.length; c++) {
         //Construir nombre
         let nombre = l + '-f' + f + 'c' + c;
         //mostrar en la casilla  matriz[f][c];
         document.getElementById(nombre).innerText = matriz[f][c];
      }
   }
}

/**
 *Limpiar las casillas de los dos lados
 */
function limpiarMatrices() {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = 0; c < matriz.length; c++) {
         //Crear variable para almacenar posición en matriz
         let nombre = 'd-f' + f + 'c' + c;
         document.getElementById(nombre).innerText = '';
      }
   }
}

/**
 * 
 * @param {char} l : indica la casilla para mostrar
 */
function mostrarDiagonalP(l) {
   for (let f = 0; f < matriz.length; f++) {
      let nombre = 'd-f' + f + 'c' + f;
      document.getElementById(nombre).innerText = matriz[f][f];
   }
}

/**
 * 
 * @param {char} l : indica la casilla para mostrar 
 */
function mostrarDiagonalI(l) {
   for (let f = 0; f < matriz.length; f++) {
      let c = matriz.length - 1 - f;
      let nombre = 'd-f' + f + 'c' + c;
      document.getElementById(nombre).innerText = matriz[f][c];
   }
}

/**
 * 
 * @param {char} l : indica la casilla para mostrar
 */
function mostrarSuperiorD(l) {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = f; c < matriz.length; c++) {
         let nombre = l + '-f' + f + 'c' + c;
         document.getElementById(nombre).innerText = matriz[f][c];
      }
   }
}

/**
 * 
 * @param {char} l : indica la casilla para mostrar
 */
function mostrarSuperiorI(l) {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = 0; c < matriz.length - f; c++) {
         let nombre = l + '-f' + f + 'c' + c;
         document.getElementById(nombre).innerText = matriz[f][c];
      }
   }
}

/**
 * 
 * @param {char} l : indica la casilla para mostrar
 */
function mostrarInferiorI(l) {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = 0; c <= f; c++) {
         let nombre = l + '-f' + f + 'c' + c;
         document.getElementById(nombre).innerText = matriz[f][c];
      }
   }
}

/**
 * 
 * @param {char} l : indica la casilla para mostrar
 */
function mostrarInferiorD(l) {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = matriz.length - 1 - f; c < matriz.length; c++) {
         let nombre = l + '-f' + f + 'c' + c;
         document.getElementById(nombre).innerText = matriz[f][c];
      }
   }
}
/**
 * Genera un numero entre min y max
 * @param {int} min: valor mínimo 
 * @param {int} max: valor máximo 
 * @returns num
 */
function generarNumero(min, max) {
   let num = parseInt(Math.random() * (max - min)) + min;
   return num;
}