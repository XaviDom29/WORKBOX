const numeros = []

for (let i = 0; i < 100; i++) {
  //  console.log(i);

  numeros.push(i + 1)
}
console.log(numeros);

const numerospares = []
for (var i = 0; i < numeros.length; i++) {

  console.log(i);
  console.log(numeros[i]);

  if (numeros[i] % 2 == 0) {
    console.log(numeros[i]);
    numerospares.push(numeros[i])
  }
}
console.log(numerospares);
