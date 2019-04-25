/*SWITCH CASE DENTRO DE BUCLE FOR*/
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
for (var i = 0; i < meses.length; i++) {
  switch (meses[i]) {
    case "enero":
    case "febrero":
    case "diciembre":
      console.log(meses[i], 'invierno');
      break;
    case "marzo":
    case "abril":
    case "mayo":
      console.log(meses[i], 'primavera');
      break;
    case "junio":
    case "julio":
    case "agosto":
      console.log(meses[i], 'verano');
      break;
    case "septiembre":
    case "octubre":
    case "noviembre":
      console.log(meses[i], 'otoño');
      break;
    default:
      console.log(meses[i], 'invierno');
  }
}
