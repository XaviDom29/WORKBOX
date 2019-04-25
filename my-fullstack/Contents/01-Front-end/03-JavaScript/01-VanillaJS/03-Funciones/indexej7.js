// encontrar palabra guepardo en arrays  e imprimir cada leyra


function reverse(string){



let result = "";

for (var i = string.length - 1; i > -1; i--) {
  result = result + string[i]

    }
if (string == result) {
return true
}else {
  return false
}

}
console.log(reverse("xavi"));
