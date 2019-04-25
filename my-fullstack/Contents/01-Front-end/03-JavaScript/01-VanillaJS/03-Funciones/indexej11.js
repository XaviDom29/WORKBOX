function miFuncion(numeros) {


  if (numeros[1] == 4) {
    return false;
  }
  if (numeros[0] == numeros[1]){
    return true;
  }
   if (numeros[1] == numeros[2]) {
    return true;
  }

}


console.log(miFuncion([4, 4, 1]));
