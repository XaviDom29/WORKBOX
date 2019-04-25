const animals = {
  "mamiferos": ["Caballo", "Cabra doméstica", "Gacela", "Alce"],
  "anfibios": ["rana", "sapo", "Salamandras", "anuros"],
  "reptiles": ["Dragón de komodo", "galápago", "anaconda"]
}

const objetovalues = Object.values(animals)
//const objetovalues2 = Object.Values(objetovalues)

for (var i = 0; i < objetovalues.length; i++) {

const objetovalues2 = Object.Values(objetovalues)
console.log(objetovalues2[i]);
    }
