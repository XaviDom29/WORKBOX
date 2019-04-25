function random(numero) {
  let numero2 = Math.floor(Math.random() * numero.length)
    return numero2
  }
let final = random(["hola", "mundo", "lo estoy", "petando"]);
let array = ["hola", "mundo", "lo estoy", "petando"];
console.log(array[final]);
