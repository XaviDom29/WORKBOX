
function array(palabras){

  let resultado = "";

  for (var i = 0; i < palabras.length; i++) {
    resultado = resultado + palabras[i] + " "

}
return   resultado;
}
let miresultado = array(["hola", "adios"])
console.log(miresultado);
