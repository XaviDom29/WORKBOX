

function mifuncion(numeros) {
let numalto = 0;
  for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] > numalto) {
      numalto = numalto + numeros[i];
    }
  }
}
let  orden = mifuncion(5,2,7,1,9);
console.log(orden);
