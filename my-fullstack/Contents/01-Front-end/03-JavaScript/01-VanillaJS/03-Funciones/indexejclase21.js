
var string =  "miami";

function create(string) {


  let last = string.length - 1;
  let lastletter = string[last];

  let last2 = string.length - 2;
  let lastletter2 = string[last] + string[last2];


  let last3 = string.length - 3;
  let lastletter3 = string[last3] + string[last2] + string[last];

  function junta() {

      return lastletter3 + string + lastletter3;
  }

  return junta();


}

/////////// execucion

  let final = create(string)
  console.log(final);

    let final2 = create("uruguay")
    console.log(final2);
