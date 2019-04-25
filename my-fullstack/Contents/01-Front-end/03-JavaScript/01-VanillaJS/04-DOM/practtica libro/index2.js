const libros = [{ "titulo": "La sombra del viento",
"autor":"carlos ruiz zafon",
"url":"https://images-eu.ssl-images-amazon.com/images/I/51Ty5FOq4kL.jpg",
"año":"2001"
},
{ "titulo": "El juego del ángel",
"autor":"carlos ruiz zafon",
"url":"https://images-eu.ssl-images-amazon.com/images/I/51FTdwwis4L.jpg",
"año":"2008"
},

{ "titulo": "El prisionero del cielo",
"autor":"carlos ruiz zafon",
"url":"https://images-eu.ssl-images-amazon.com/images/I/51Wsm3mreuL.jpg",
"año":"2011"
}]


const bookCards = document.querySelectorAll('body > main > div > div > div.row')[0];

for (var i = 0; i < libros.length; i++) {
bookCards.innerHTML += `
        <div class="col-md-3">
          <div class="card mb-4 shadow-sm">
            <img src="${libros[i]["url"]}" class="card-img-top" style="min-height:20.375rem; min-widht:13rem; max-height:20.375rem; max-widht:13rem;" alt="libro">
            <div class="card-body" style= "min-height:10.625rem">
              <p class="card-text"><h5>${libros[i]["titulo"]}</h5></p>
              <p>${libros[i]["autor"]} ${libros[i]["año"]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>`
}
