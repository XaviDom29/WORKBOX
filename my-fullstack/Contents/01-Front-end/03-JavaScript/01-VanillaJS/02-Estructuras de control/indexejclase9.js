/*SWITCH CASE DENTRO DE BUCLE FOR*/
const mensaje = "mdylgrolpjxhcjrohc";
const diccionario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let cifrado = "";
for (var i = 0; i < mensaje.length; i++) {
let letra = diccionario[(diccionario.indexOf(mensaje[i]) - 3) % diccionario.length];
  cifrado = cifrado +letra;
}
console.log(cifrado);
