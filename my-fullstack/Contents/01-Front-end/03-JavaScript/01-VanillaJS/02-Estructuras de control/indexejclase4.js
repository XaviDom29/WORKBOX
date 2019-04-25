/*SWITCH CASE DENTRO DE BUCLE FOR*/
const numeros = []

for (var i = 0; i < 100; i++) {

  console.log(i);

  if (i % 3 == 0 && i % 5 == 0){
  console.log("FizzBuzz");
  }
   else if ( i%5 == 0) {
  console.log("Buzz");
   }
   else {
    console.log("Fiz");
   }
}
