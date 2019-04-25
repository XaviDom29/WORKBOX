// encongtrar elementos con mas de 300 claorias
const calorias = {
   "ensalada":152,
   "hamburguesa":295,
   "patatas fritas":312,
   "frankfurt": 269
}
const objetoclaves = Object.keys(calorias)

let maxvalue = 0;
let maxname = "";

for (var i = 0; i < objetoclaves.length; i++) {

let clave = objetoclaves[i];
let valor = calorias[clave];

if (valor > maxvalue) {
  maxvalue = valor;
  maxname= clave;
    }
  }
  console.log(maxvalue, maxname);
