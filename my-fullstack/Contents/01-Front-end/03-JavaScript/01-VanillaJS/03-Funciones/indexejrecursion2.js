function imprimir(palabra, contador) {
  if (contador === 15) {
    return
  }
  console.log(palabra);
  imprimir(palabra, contador + 1)
}
imprimir("hakunamatata", 5)
