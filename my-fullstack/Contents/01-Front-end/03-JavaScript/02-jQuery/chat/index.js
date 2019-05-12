// VARIABLES
const botonGo = document.querySelectorAll('#boton')[0];
let infoStations = []
const tableBody = document.querySelectorAll('#tabla')[0];

//  FUNCTION BICI INFO
function getBiciInfo() {
  $('#tabla').html("");

  $.get("https://slack.com/api/conversations.history?token=xoxs-252255834967-588744092688-592599478694-04187370f046ecadd8fd99ad17b0e2bbe880877e18a98408b7e02f193e47292f&channel=GHR6U88FN&pretty=1", function(dataBiciInfo) {

    for (var i = 0; i < dataBiciInfo.messages.length; i++) {
      let objMensaje = dataBiciInfo.messages[i]

      $.get(`https://slack.com/api/users.info?token=xoxs-252255834967-588744092688-592599478694-04187370f046ecadd8fd99ad17b0e2bbe880877e18a98408b7e02f193e47292f&user=${objMensaje.user}&pretty=1`, function(dataUser) {


        let objUser = dataUser.user;
        console.log(objMensaje.text);
        let time = objMensaje.ts;
        var date = new Date(time * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var formattedTime = hours + ':' + minutes.substr(-2);


        $('#tabla').append(`
          <div class="card mb-3 bg-dark" style="max-width: 540px;">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="${objUser.profile.image_original}" class="card-img" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${objUser.profile.real_name}</h5>
                  <p class="card-text">${objMensaje.text}</p>
                  <p class="card-text"><small class="text-muted">${formattedTime}</small></p>
                </div>
              </div>
            </div>
          </div>`)

      })
    }

  })
}
function postMesage (){
  $.post(`https://slack.com/api/conversations.history?token=xoxs-252255834967-588744092688-592599478694-04187370f046ecadd8fd99ad17b0e2bbe880877e18a98408b7e02f193e47292f&channel=GHR6U88FN&pretty=1`, function() {
console.log(text);
  })
}
// BINDS Y EVENTOS
botonGo.addEventListener('click', function() {
  let text = document.querySelectorAll('#input')[0].value;
  postMesage()
})

  getBiciInfo()
