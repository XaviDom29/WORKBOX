$.get("https://cors-anywhere.herokuapp.com/https://anapioficeandfire.com/api/books/", function(data) {
  for (var i = 0; i < data.length; i++) {
    $('#caja').append(`<option value="${data[i].name}">${data[i].name}</option>`)
    console.log(data[i].name);
  }
});

const botonAñadir = document.querySelectorAll('#boton')[0];

botonAñadir.addEventListener('click', function() {
  let nombrelibro = document.querySelectorAll('#caja')[0].value;
  $('#contenedor2').append(`<p>${nombrelibro}</p>`)
  console.log(nombrelibro);

})
