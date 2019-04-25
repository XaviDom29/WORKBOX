function analizar(edad) {


    if (edad > 20 && edad < 30) {
      return "Tu edad esta entre 20 y 30";
    }else if (edad > 50 && edad < 60) {
      return " Tu edad esta entre 50 y 60";
    }
  }


let final = analizar (55)
console.log(final);
