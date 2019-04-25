function factoryDeSaludos(divisor ){


  return function(dividendo){

    return divisor/dividendo
  }
}


let intdivisor = prompt("Introduce divisor: ");

let operacion =factoryDeSaludos(intdivisor)

let intdividendo = prompt("Introduce dividendo: ");

alert(operacion(intdividendo))
