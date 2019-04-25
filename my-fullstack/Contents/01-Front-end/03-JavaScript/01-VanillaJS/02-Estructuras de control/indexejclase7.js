/*SWITCH CASE DENTRO DE BUCLE FOR*/
const alumnos = ["Alfredo", "Sergio", "Xavi", "Liena", "Julio", "Andrés"]
 for (var i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i]);
  for (var j = 0; j < alumnos.length; j++) {
    console.log(alumnos[i],alumnos[j]);

  }
 }
