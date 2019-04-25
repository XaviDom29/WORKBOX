let hour = 16;
let hours12 = 0;
let amorpm = "";
if (hour >= 12) {
  amorpm = "PM"
} else {
  amorpm = "AM"
}
hours12 = hour % 12;
console.log(`la hora es: ${hours12} ${amorpm}`);
