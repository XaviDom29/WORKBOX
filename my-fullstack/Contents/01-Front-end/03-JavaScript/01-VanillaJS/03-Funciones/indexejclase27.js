function piepaptij(opcion) {

  if (opcion[0] == "piedra" && opcion[1] == "papel") {
    return "Gana el jugador 2"
  } else if (opcion[0] == "piedra" && opcion[1] == "tijera") {
    return "Gana el jugador 1"
  } else if (opcion[0] == "papel" && opcion[1] == "tijera") {
    return "Gana el jugador 2"
  } else if (opcion[0] == "papel" && opcion[1] == "piedra") {
    return "Gana el jugador 1"
  } else if (opcion[0] == "tijera" && opcion[1] == "piedra") {
    return "Gana el jugador 2"
  } else if (opcion[0] == "tijera" && opcion[1] == "papel") {
    return "Gana el jugador 1"
  } else if (opcion[0] == "piedra" && opcion[1] == "piedra") {
    return "Empate"
  } else if (opcion[0] == "papel" && opcion[1] == "papel") {
    return "Empate"
  } else if (opcion[0] == "tijera" && opcion[1] == "tijera") {
    return "Empate"
  } else {
    return "Escoge una opcion Valida"
  }

}

let final = piepaptij(["tijera", "tijera"]);
console.log(final);
