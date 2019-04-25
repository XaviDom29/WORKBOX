// encontrar palabra guepardo en arrays  e imprimir cada leyra
const animals = ["elefante", "tigre", "hipogrifo", "guepardo"]
let transpuesta = [];
let transpuesta2 = [];
for (var i = 0; i < animals.length; i++) {
  if (animals[i] === "guepardo") {
    for (var j = 0; j < animals[i].length; j++) {
      transpuesta.push(animals[i][j])
    }
    for (var x = animals[i].length - 1; x > -1; x--) {
      transpuesta2.push(animals[i][x])
    }
  }
}
console.log(transpuesta);
console.log(transpuesta2);
