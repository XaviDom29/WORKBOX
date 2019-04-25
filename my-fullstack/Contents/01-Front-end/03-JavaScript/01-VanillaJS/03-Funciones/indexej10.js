
function posicion(palabras, palabra1) {
  for (var i = 0; i < palabras.length; i++) {
    let strPalabra = palabras[i]; // la palabra en la posicion i
    let intPosicion = i; //la posicion de la palabra, la posicion es i
    if (strPalabra == palabra1) {
      return intPosicion;
    }
  }
}
console.log(posicion(["hola", "mundo"], "mundo"));
