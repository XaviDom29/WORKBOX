let barato = {
  "Free": "0€",
  "Pro": "10€",
  "Enterprise": "25€"
}
let caro = {
  "Free": "0€",
  "Pro": "20€",
  "Enterprise": "50€"
}
let claves = Object.keys(barato)
let palabra = document.querySelectorAll('body > div.container > div > div:nth-child(1) > div.card-body > h1')[0]
let palabra2 = document.querySelectorAll('body > div.container > div > div:nth-child(2) > div.card-body > h1')[0]
let palabra3 = document.querySelectorAll('body > div.container > div > div:nth-child(3) > div.card-body > h1')[0]
let arraydeprecios = [palabra, palabra2, palabra3]

let codigo = prompt("Escribe si tienes codigo de descuento")
for (var i = 0; i < arraydeprecios.length; i++) {
  if (codigo === "LOS-MUERTOS-NO-CUENTAN-CUENTOS") {
    arraydeprecios[i].innerHTML = barato[claves[i]] + '<small class="text-muted">/ mo</small>'
  } else {
    arraydeprecios[i].innerHTML = caro[claves[i]] + '<small class="text-muted">/ mo</small>'
  }
}


/*
if (codigo === "LOS-MUERTOS-NO-CUENTAN-CUENTOS") {


palabra.innerHTML =' $0 <small class="text-muted">/ mo</small>'
palabra2.innerHTML =' $10 <small class="text-muted">/ mo</small>'
palabra3.innerHTML =' $25 <small class="text-muted">/ mo</small>'

} else {
  palabra.innerHTML = sindescuento
  palabra2.innerHTML =' $20 <small class="text-muted">/ mo</small>'
  palabra3.innerHTML =' $50 <small class="text-muted">/ mo</small>'
}
*/
