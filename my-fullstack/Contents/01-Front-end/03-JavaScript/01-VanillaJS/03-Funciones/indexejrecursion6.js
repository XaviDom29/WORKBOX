function random(numero) {
  let numero2 = Math.floor(Math.random() * 2)
  if (numero2 < 1) {
    return numero2 + 1
  }else {
    return numero2
  }
}
let final = random();
console.log(final);
