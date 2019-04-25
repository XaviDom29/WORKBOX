let seleccion = prompt("Escoge tu Idioma (english/spanish)")
let nse = document.querySelectorAll('body > main > div.jumbotron > div > p:nth-child(1)')[0]
let nse2 = document.querySelectorAll('body > main > div.jumbotron > div > p:nth-child(2)')[0]
let nse3 = document.querySelectorAll('body > main > div.jumbotron > div > p:nth-child(3)')[0]

let array = [nse, nse2, nse3]
const objeng = {
'header' : '¡Hello World!',
'body' :'This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.',
'button' :'Saber más »'
}
const objspa = {
'header' : '¡Hola, mundo!',
'body' :'Esto es una plantilla para una web de márketing simple o de información. Incluye una leyenda extensa que llama a jumbotron y tres elementos de contenido. Utilízala como punto de partida para crear algo más único.',
'button' :'Learn More »'
}
let claveeng = Object.keys(objeng)
let clavespa = Object.keys(objspa)

for (var i = 0; i < array.length; i++) {

  if (seleccion === "english") {
      array[i].textcontent = objeng[claveeng[i]]
  }else if (seleccion === "spanish") {
      array[i].textcontent = objspa[clavespa[i]]
  }
}
