/*SWITCH CASE DENTRO DE BUCLE FOR*/
const ventas = [13,17,29,30,32]
var maxventas = 0;

for (var i = 0; i < ventas.length; i++) {

  if (ventas[i] > maxventas){
    maxventas = ventas[i];

  }

}
console.log(maxventas);
