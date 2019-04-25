function convertTemperatre(numero, string) {

  function CelsiusToFahrenheit(grados) {
    let farenheit = grados + 33.8;
    console.log(grados);
    return farenheit
  }

  function farenheitTocelsius(farenheit) {
    let grados = farenheit - 33.8;
    return grados
  }
  if (string == "celsius") {
    let result = CelsiusToFahrenheit(numero);
    return result;

  } else if (string == "farenheit") {
  return  farenheitTocelsius(numero)

  }

}

let final = convertTemperatre(10, "celsius");
console.log(final);
