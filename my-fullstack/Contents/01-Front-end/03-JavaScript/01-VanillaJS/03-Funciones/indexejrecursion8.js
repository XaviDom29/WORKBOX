function random(numero) {
  let numero2 = Math.floor(Math.random() * numero.length)
    return numero2
  }
let final = random(["piedra", "papel", "tijeras"]);
let array = ["piedra", "papel", "tijeras"];
console.log(array[final]);
