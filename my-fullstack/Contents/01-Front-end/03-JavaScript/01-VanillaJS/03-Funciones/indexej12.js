function gooseFilter (birds) {
 let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
 let final = [];
for (var i = 0; i < birds.length; i++) {
  if (geese.indexOf(birds[i]) === -1 ) {

    final.push(birds[i]);
    }
  }
  return final
}

let final = gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]);
console.log(final);
    //  console.log(sistemaSolar["planetas"][i]["temperatura"]);
