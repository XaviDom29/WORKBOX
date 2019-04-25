/*SWITCH CASE DENTRO DE BUCLE FOR*/
const estudiantes = [
    {"nombre": "David", "puntos": 80},
    {"nombre": "Vinoth", "puntos": 77},
    {"nombre": "Divya", "puntos": 88},
    {"nombre": "Ishitha", "puntos": 95},
    {"nombre": "Thomas", "puntos": 68}
]

for (var i = 0; i < estudiantes.length; i++) {
  console.log(estudiantes[i]["nombre"] , estudiantes[i]["puntos"]);

  if (estudiantes[i]["puntos"] <60){
  console.log("F");
  }
   else if (estudiantes[i]["puntos"] <70){
  console.log("D");
   }
   else if (estudiantes[i]["puntos"] <80){
  console.log("C");
   }
   else if (estudiantes[i]["puntos"] <80){
  console.log("B");
   }
   else {
  console.log("A");
   }

}
