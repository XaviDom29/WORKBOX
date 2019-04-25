const letras = []
let pizarra = "pizarra";
let par = false;
for (var i = 0; i < pizarra.length; i++) {
  console.log(pizarra[i]);

  // comprueba si es par
  if (i % 2 == 0) {
    par = true;
  } else {
    par = false
  }
  if (par) {
    letras.push(pizarra[i]);
  }
}
