let palabra = prompt("Introduce la palabra de 4 letras");
let l1 = palabra.charAt(0);
let l2 = palabra.charAt(1);
let l3 = palabra.charAt(2);
let l4 = palabra.charAt(3);
let a1 = false, a2 = false, a3 = false, a4 = false;
let oportunidades = 7;
while (oportunidades > 0 && !(a1 && a2 && a3 && a4)) {
  let letra = prompt("Adivina una letra (quedan " + oportunidades + ")");
  if (letra === l1) a1 = true;
  if (letra === l2) a2 = true;
  if (letra === l3) a3 = true;
  if (letra === l4) a4 = true;
  if (letra !== l1 && letra !== l2 && letra !== l3 && letra !== l4) {
    oportunidades--;
  }
  let progreso = (a1 ? l1 : "_") + " " + (a2 ? l2 : "_") + " " +
                 (a3 ? l3 : "_") + " " + (a4 ? l4 : "_");
  alert("Progreso: " + progreso);
}
if (a1 && a2 && a3 && a4) {
  alert("¡Has ganado! La palabra era " + palabra);
} else {
  alert("Te has quedado sin oportunidades. La palabra era " + palabra);
}