//  FUNCIONES

function anadirString() {
  let newString = document.querySelectorAll('#input')[0].value;
  emptyArray.push(newString)
  document.querySelectorAll('#contenedor')[0].append(" " + newString)
}

function borrarString() {
  let borrarString = document.querySelectorAll('#input2')[0].value;
  emptyArray.splice(borrarString, 1)
  document.querySelectorAll('#contenedor2')[0].append(" " + emptyArray + " ")
  //  document.querySelectorAll('#contenedor')[borrarString].append(" ")
}

function reverseString() {
  for (var x = emptyArray.length - 1; x > -1; x--) {
    transpuesta.push(emptyArray)
  }
  document.querySelectorAll('#contenedor3')[0].append(" " + emptyArray)
}

// VARIABLES

const botonAnadir = document.querySelectorAll('#botonAnandir')[0];
const botonBorrar = document.querySelectorAll('#botonBorrar')[0];
const botonReverse = document.querySelectorAll('#botonReverse')[0];
let transpuesta = [];
let emptyArray = []

// BINDS Y EVENTOS

botonAnadir.addEventListener('click', function() {
  anadirString()
})

botonBorrar.addEventListener('click', function() {
  borrarString()
})

botonReverse.addEventListener('click', function() {
  reverseString()
})
