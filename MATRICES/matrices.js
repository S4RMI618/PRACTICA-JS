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
         /* limpiarMatrices(); */
         mostrarDiagonalP();
         break;
      case "4":
         mostrarDiagonalI();
         break;
      case "5":
         mostrarSuperiorD('d');
         break;
      case "6":
         mostrarSuperiorI('i');
         break;
      case "7":
         mostrarInferiorI('i')
         break;
      case "8":
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


function limpiarMatrices() {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = 0; c < matriz.length; c++) {
         //Crear variable para almacenar posición en matriz
         let nombre = 'd-f' + f + 'c' + c;
         document.getElementById(nombre).innerText = '';
         let nombre2 = 'i-f' + f + 'c' + c;
         document.getElementById(nombre2).innerText = '';
      }     
   }   
}

function mostrarDiagonalP() {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = 0; c < matriz.length; c++) {
         let nombre = 'd-f' + f + 'c' + c;
         if (f == c) {
            document.getElementById(nombre).innerText = matriz[f][c];
         }else {
            document.getElementById(nombre).innerText = '';
         }
         
      }   
   }   
}

function mostrarDiagonalI() {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = 0; c < matriz.length; c++) { 
         let nombre = 'd-f' + f + 'c' + c;
         if ((f+c) == matriz.length - 1){
            document.getElementById(nombre).innerText = matriz[f][c];
         }else {
            document.getElementById(nombre).innerText = '';
         }
      }
   } 
}

function mostrarSuperiorD(l) {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = 0; c < matriz.length; c++) {
         let nombre = l + '-f' + f + 'c' + c;
         if (f == 0) {
            document.getElementById(nombre).innerText = matriz[f][c];
         }else {
            document.getElementById(nombre).innerText = '';
         }
      }
   }
}

function mostrarSuperiorI(l) {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = 0; c < matriz.length; c++) {
         let nombre = l + '-f' + f + 'c' + c;
         if (f == 0) {
            document.getElementById(nombre).innerText = matriz[f][c];
         }else {
            document.getElementById(nombre).innerText = '';
         }
      }
   }
}

function mostrarInferiorI(l) {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = 0; c < matriz.length; c++) {
         let nombre = l + '-f' + f + 'c' + c;
         if (f == 4) {
            document.getElementById(nombre).innerText = matriz[f][c];
         }else {
            document.getElementById(nombre).innerText = '';
         }
      }
   }
}

function mostrarInferiorD(l) {
   for (let f = 0; f < matriz.length; f++) {
      for (let c = 0; c < matriz.length; c++) {
         let nombre = l + '-f' + f + 'c' + c;
         if (f == 4) {
            document.getElementById(nombre).innerText = matriz[f][c];
         }else {
            document.getElementById(nombre).innerText = '';
         }
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