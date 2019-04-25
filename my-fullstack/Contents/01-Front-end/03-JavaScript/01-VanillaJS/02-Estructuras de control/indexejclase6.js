/*SWITCH CASE DENTRO DE BUCLE FOR*/
const colores = ["rojo", "azul", "amarillo", "verde"];
const intensidad = ["clarito", "normal", "intenso"];

for (var i = 0; i < colores.length; i++) {


 for (var j = 0; j < intensidad.length; j++) {
    console.log(colores[i], intensidad[j]);

  }
}
