function analizar(multiplo) {


    if (multiplo % 3 === 0) {
      return "Es multiplo de 3";
    }else if (multiplo % 7 === 0) {
      return "Es multiplo de 7";
    }else {
      return "No es multiplo ni de 3 ni de 7 ";
    }
  }


let final = analizar (14)
console.log(final);
