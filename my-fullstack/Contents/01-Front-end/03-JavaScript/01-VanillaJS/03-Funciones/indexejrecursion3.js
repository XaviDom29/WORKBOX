function factoryDeSaludos(saludo){
  return function(nombre){
    return saludo + "  " + nombre
  }
}

undefined
let saluda_en_castellano = factoryDeSaludos("yay");
undefined
saluda_en_castellano("pepito")
"yay  pepito"
// Esto copiarlo y pegarlo en la consola 
