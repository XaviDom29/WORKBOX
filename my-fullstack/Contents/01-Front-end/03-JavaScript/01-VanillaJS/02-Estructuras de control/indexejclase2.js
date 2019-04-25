/*SWITCH CASE DENTRO DE BUCLE FOR*/
const dias = ["lunes", "martes", "miercoles", "abril", "jueves", "viernes", "sabado", "domingo"]
for (var i = 0; i < dias.length; i++) {
  switch (dias[i]) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
      console.log(dias[i], 'entresemana');
      break;
    case "domingo":
    case "sabado":
      console.log(dias[i], 'finde');
      break;

    default:
      console.log(dias[i], 'entresemana');
  }
}
