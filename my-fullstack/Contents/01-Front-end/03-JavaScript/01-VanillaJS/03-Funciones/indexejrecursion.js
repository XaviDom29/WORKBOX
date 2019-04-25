function suma(numeros) {
  if (numeros === 1) {
    return 1
  }
  return numeros + suma(numeros - 1)
}
let final = suma(20);
console.log(final);
