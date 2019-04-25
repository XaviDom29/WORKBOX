
let color = prompt("Que color de fondo quieres? (escoge azul)")

let nav = document.querySelectorAll('body > header > nav')[0]


if ( color === "azul") {

nav.className = "navbar navbar-expand-md  fixed-top bg-primary"

}
