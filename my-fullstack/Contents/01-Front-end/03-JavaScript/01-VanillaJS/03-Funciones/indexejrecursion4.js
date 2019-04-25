function factoriaDeFiccion(numero){
  return function(mensaje){
    const abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
    let cifrado = "";
    for (let i = 0; i < mensaje.length; i++) {
      let letra = abecedario[(abecedario.indexOf(mensaje[i]) + numero) % abecedario.length];
      cifrado = cifrado + letra;
    }
    return cifrado;
  }
}


let numeroDeSaltos = prompt("Introduce cuántos saltos deberá pegar cada letra:");

let cifrador = factoriaDeFiccion(numeroDeSaltos);

let palabra = prompt("Introduce tu palabra:");
alert(cifrador(palabra));
