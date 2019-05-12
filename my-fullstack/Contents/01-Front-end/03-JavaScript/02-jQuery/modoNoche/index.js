const botonDia = $('#botonDia')[0];
const botonNoche = $('#botoNoche')[0];

botonDia.addEventListener('click', function() {
  $('#navbar1').removeClass('bg-dark navbar-dark')
  $('#navbar1').addClass('bg-light navbar-light')
  $('#fondo').removeClass('bg-dark')
  $('#fondo').addClass('bg-light')
  $('#section').removeClass('bg-dark')
  $('#section').addClass('bg-light').css('color','black')
})

botonNoche.addEventListener('click', function() {
  $('#navbar1').removeClass('bg-light navbar-light')
  $('#navbar1').addClass('bg-dark navbar-dark')
  $('#fondo').removeClass('bg-light')
  $('#fondo').addClass('bg-dark')
  $('#section').removeClass('bg-light')
  $('#section').addClass('bg-dark').css('color','white')
})
