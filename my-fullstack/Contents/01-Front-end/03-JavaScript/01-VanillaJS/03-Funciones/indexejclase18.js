function analizar(numeros) {

  for (var i = 0; i < numeros.length; i++) {

    if (numeros[i] === 1 || numeros[i] === 3) {
      return "hay un 1 o un 3";
    }else {
      return " NO hay un 1 o un 3";
    }
  }
}

let final = analizar ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
console.log(final);
