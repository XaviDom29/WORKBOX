function calculateAge(ageOld, ageBorn) {

  if (ageOld > ageBorn) {
    if (ageOld > ageBorn === 1) {
  return "You are 1 year(s) old."
}else {
    return "You are" + (ageOld - ageBorn ).toString() + " year(s) old."
}
  } else if (ageOld < ageBorn) {

    return "You will be born in" + (ageBorn - ageOld).toString() + "year(s)."

  } else if (ageOld == ageBorn){

  return   "You were born this very year!"

  }
}
let final = calculateAge(2081, 2080);
console.log(final);
